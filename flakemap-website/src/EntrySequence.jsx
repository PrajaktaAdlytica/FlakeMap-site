import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Icon } from "./components";
import "./entry-sequence.css";

const chapters = [
  {
    title: "Every workflow.",
    emphasis: "Worth a replay.",
    description: "Replay agent workflows under the conditions that test them.",
    label: "PO-204 / BASELINE",
    evidence: "One order. One expected draft.",
  },
  {
    title: "Find the break.",
    emphasis: "Before release.",
    description: "Replay agent workflows. Expose failures between steps.",
    label: "STOCK CHECK / TIMEOUT",
    evidence: "Retry produced a duplicate PO draft.",
  },
  {
    title: "See the evidence.",
    emphasis: "Make the call.",
    description:
      "Compare versions. Review the failing step. Define your release gate.",
    label: "HUMAN REVIEW / TASK CRITERION",
    evidence: "Exactly one draft required. Two observed.",
  },
];

export default function EntrySequence({ motion, onClose }) {
  const dialog = useRef(null),
    timeline = useRef(null),
    progress = useRef(null),
    closing = useRef(false);
  const [chapter, setChapter] = useState(motion ? 0 : 1);
  const [paused, setPaused] = useState(!motion);
  const [ready, setReady] = useState(false);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  const selected = chapters[chapter];

  function finish() {
    if (closing.current) return;
    closing.current = true;
    timeline.current?.pause();
    if (!motion) return closeRef.current();
    gsap.to(dialog.current, {
      opacity: 0,
      duration: 0.65,
      ease: "power2.inOut",
      onComplete: () => closeRef.current(),
    });
  }

  useLayoutEffect(() => {
    const el = dialog.current;
    const previousFocus = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    el.showModal();
    return () => {
      gsap.killTweensOf(el);
      el.close();
      document.body.style.overflow = overflow;
      if (
        previousFocus instanceof HTMLElement &&
        previousFocus !== document.body
      )
        previousFocus.focus({ preventScroll: true });
    };
  }, []);

  useEffect(() => {
    let active = true;
    const images = ["intact-line", "fault-line"].map((name) => {
      const image = new Image();
      image.src = `/brand/intro/${name}.webp`;
      return image.decode().catch(() => {});
    });
    // Skip remains usable while artwork loads; a failed image never blocks entry.
    Promise.all(images).then(() => {
      if (active) setReady(true);
    });
    const fallback = setTimeout(() => {
      if (active) setReady(true);
    }, 3500);
    return () => {
      active = false;
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (!ready || !motion) return;
    const clock = { value: 0 };
    const tl = gsap.timeline({ paused: true });
    tl.to(clock, {
      value: 1,
      duration: 12,
      ease: "none",
      onUpdate: () => {
        if (progress.current)
          progress.current.style.transform = `scaleX(${clock.value})`;
        setChapter(clock.value < 0.28 ? 0 : clock.value < 0.64 ? 1 : 2);
      },
    });
    tl.call(finish);
    timeline.current = tl;
    return () => {
      tl.kill();
      timeline.current = null;
    };
  }, [ready, motion]);

  useEffect(() => {
    const sync = () => {
      if (!timeline.current || closing.current) return;
      if (paused || document.hidden || !motion) timeline.current.pause();
      else timeline.current.play();
    };
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, [paused, ready, motion]);

  useEffect(() => {
    if (!motion) {
      setPaused(true);
      setChapter(1);
    }
  }, [motion]);

  useEffect(() => {
    if (!motion || paused || !window.matchMedia("(pointer:fine)").matches)
      return;
    const scene = dialog.current.querySelector(".entry-scene");
    const xTo = gsap.quickTo(scene, "x", { duration: 1.4, ease: "power3.out" });
    const yTo = gsap.quickTo(scene, "y", { duration: 1.4, ease: "power3.out" });
    gsap.set(scene, { scale: 1.018 });
    const move = (event) => {
      xTo((event.clientX / window.innerWidth - 0.5) * -12);
      yTo((event.clientY / window.innerHeight - 0.5) * -8);
    };
    const stage = dialog.current;
    stage.addEventListener("pointermove", move);
    return () => {
      stage.removeEventListener("pointermove", move);
      xTo.tween.kill();
      yTo.tween.kill();
      gsap.set(scene, { clearProps: "transform" });
    };
  }, [motion, paused]);

  function keyboard(event) {
    if (event.key !== "Tab") return;
    setPaused(true);
    const controls = [
      ...dialog.current.querySelectorAll("button:not(:disabled)"),
    ];
    const first = controls[0],
      last = controls.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function selectChapter(index) {
    setPaused(true);
    timeline.current?.pause().seek([0, 3.5, 7.8][index]);
    setChapter(index);
  }

  return (
    <dialog
      ref={dialog}
      className="entry-sequence"
      data-lenis-prevent
      data-chapter={chapter}
      data-ready={ready}
      data-animated={motion && !paused}
      data-reduced={!motion}
      aria-labelledby="entry-heading"
      onKeyDown={keyboard}
      onCancel={(event) => {
        event.preventDefault();
        finish();
      }}
    >
      <div className="entry-stage">
        <div className="entry-scene" aria-hidden="true">
          <img
            className="entry-image entry-intact"
            src="/brand/intro/intact-line.webp"
            alt=""
            width="1536"
            height="1024"
            fetchPriority="high"
          />
          <img
            className="entry-image entry-fault"
            src="/brand/intro/fault-line.webp"
            alt=""
            width="1536"
            height="1024"
          />
        </div>
        <header className="entry-header">
          <img
            src="/brand/logos/flakemap-lockup-ink.svg"
            width="160"
            height="42"
            alt="FlakeMap"
          />
          <button className="entry-skip" autoFocus onClick={finish}>
            Skip intro <Icon name="arrow-right" />
          </button>
        </header>
        <div className="entry-copy" key={`copy-${chapter}`}>
          <h2 id="entry-heading">
            {selected.title}
            <br />
            <em>{selected.emphasis}</em>
          </h2>
          <p>{selected.description}</p>
        </div>
        <div
          className="entry-evidence"
          key={`evidence-${chapter}`}
          aria-live="polite"
          aria-atomic="true"
        >
          <strong>{selected.label}</strong>
          <p>{selected.evidence}</p>
          <small>SYNTHETIC REPLAY</small>
        </div>
        <footer className="entry-footer">
          <nav className="entry-chapters" aria-label="Intro chapters">
            {["Replay", "Reveal", "Review"].map((label, index) => (
              <button
                key={label}
                aria-current={chapter === index ? "step" : undefined}
                onClick={() => selectChapter(index)}
              >
                <span>0{index + 1}</span> {label}
              </button>
            ))}
          </nav>
          <div className="entry-playback">
            <div className="entry-progress" aria-hidden="true">
              <span ref={progress} />
            </div>
            {motion && (
              <button
                className="entry-pause"
                onClick={() => setPaused(!paused)}
                aria-label={paused ? "Play intro" : "Pause intro"}
              >
                {paused ? "Play" : "Pause"}
              </button>
            )}
          </div>
          <button className="button entry-enter" onClick={finish}>
            Explore FlakeMap <Icon name="arrow-right" />
          </button>
        </footer>
      </div>
    </dialog>
  );
}
