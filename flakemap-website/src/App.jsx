import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Home from "./Home";
import EntrySequence from "./EntrySequence";
import { modules, articles } from "./data";
import { Icon, Button, Eyebrow } from "./components";
import {
  Products,
  Product,
  Problem,
  Solutions,
  Platform,
  Evaluation,
  Pricing,
  Request,
  SignIn,
  Demo,
  Company,
  Trust,
  Resources,
  Article,
  Legal,
  NotFound,
} from "./Pages";
import { track } from "./telemetry";
gsap.registerPlugin(ScrollTrigger);
function Nav({ motion, setMotion }) {
  const [menu, setMenu] = useState(false),
    [mobile, setMobile] = useState(false);
  const location = useLocation(),
    panel = useRef(),
    toggle = useRef(),
    productToggle = useRef();
  useEffect(() => {
    setMenu(false);
    setMobile(false);
  }, [location.pathname]);
  useEffect(() => {
    if (!mobile) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const f = panel.current?.querySelector("a,button");
    f?.focus();
    return () => {
      document.body.style.overflow = old;
    };
  }, [mobile]);
  function keyboard(e) {
    if (e.key === "Escape") {
      setMenu(false);
      setMobile(false);
      (mobile ? toggle : productToggle).current?.focus();
    }
    if (mobile && e.key === "Tab") {
      const f = [...panel.current.querySelectorAll("a,button")],
        first = f[0],
        last = f.at(-1);
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header" onKeyDown={keyboard}>
        <div className="nav-shell">
          <Link to="/" className="brand" aria-label="FlakeMap home">
            <img
              src="/brand/logos/flakemap-lockup-ink.svg"
              width="160"
              height="42"
              alt="FlakeMap"
            />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <button
              ref={productToggle}
              aria-expanded={menu}
              aria-controls="product-menu"
              onClick={() => setMenu(!menu)}
            >
              Products <span className={menu ? "rotate" : ""}>⌄</span>
            </button>
            <Link to="/platform">Platform</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/company">Company</Link>
          </nav>
          <div className="nav-actions">
            <Link to="/sign-in" className="sign-in-link">
              Sign in ↗
            </Link>
            <Button to="/request-demo">Request a study</Button>
          </div>
          <button
            ref={toggle}
            className="mobile-toggle"
            aria-label={mobile ? "Close navigation" : "Open navigation"}
            aria-expanded={mobile}
            onClick={() => setMobile(!mobile)}
          >
            <Icon name={mobile ? "close" : "menu"} />
          </button>
        </div>
        {menu && (
          <div id="product-menu" className="mega-menu">
            <div className="mega-intro">
              <Eyebrow>The proposed lab</Eyebrow>
              <h2>
                Five questions.
                <br />
                One evidence chain.
              </h2>
              <Link to="/products">Explore all modules →</Link>
            </div>
            <div className="mega-grid">
              {modules.map((m) => (
                <Link key={m.slug} to={`/products/${m.slug}`}>
                  <Icon name={m.icon} />
                  <div>
                    <b>{m.name}</b>
                    <small>{m.short}</small>
                  </div>
                  <span>↗</span>
                </Link>
              ))}
            </div>
            <button
              className="mega-close"
              aria-label="Close products menu"
              onClick={() => {
                setMenu(false);
                productToggle.current?.focus();
              }}
            >
              ×
            </button>
          </div>
        )}
      </header>
      {menu && (
        <button
          tabIndex="-1"
          className="menu-backdrop"
          aria-label="Dismiss products menu"
          onClick={() => setMenu(false)}
        />
      )}{" "}
      {mobile && (
        <div
          ref={panel}
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          onKeyDown={keyboard}
        >
          <button
            className="text-button"
            onClick={() => {
              setMobile(false);
              toggle.current?.focus();
            }}
          >
            Close navigation ×
          </button>
          <nav>
            {[
              ["/products", "Products"],
              ["/platform", "Platform"],
              ["/solutions", "Solutions"],
              ["/pricing", "Pricing"],
              ["/resources", "Resources"],
              ["/company", "Company"],
              ["/sign-in", "Sign in"],
              ["/request-demo", "Request a study"],
              ["/demo", "Synthetic demo"],
            ].map(([to, l]) => (
              <Link to={to} key={to}>
                {l}
                <span>↗</span>
              </Link>
            ))}
          </nav>
          <small>Explore the reliability lab</small>
        </div>
      )}
    </>
  );
}
function Footer({ motion, setMotion }) {
  const [social, setSocial] = useState("");
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <Link to="/" aria-label="FlakeMap home">
            <img
              src="/brand/logos/flakemap-lockup-reverse.svg"
              width="190"
              height="50"
              alt="FlakeMap"
            />
          </Link>
          <p>
            Same workflows.
            <br />
            <em>Clearer outcomes.</em>
          </p>
          <Button light to="/request-demo">
            Request a replay study
          </Button>
        </div>
        <div className="footer-columns">
          <div>
            <Eyebrow>Proposed products</Eyebrow>
            {modules.map((m) => (
              <Link key={m.slug} to={`/products/${m.slug}`}>
                {m.name}
              </Link>
            ))}
          </div>
          <div>
            <Eyebrow>Explore</Eyebrow>
            {[
              ["/problem", "Why change"],
              ["/solutions", "Solutions"],
              ["/platform", "Platform"],
              ["/evaluation", "Evaluation example"],
              ["/demo", "Synthetic demo"],
            ].map(([t, l]) => (
              <Link to={t} key={t}>
                {l}
              </Link>
            ))}
          </div>
          <div>
            <Eyebrow>Company</Eyebrow>
            <address className="company-address">
              2No. 47 Hoang Van Thu, Pleiku<br />
              Pleiku<br />
              Gia Lai<br />
              Vietnam
            </address>
            {[
              ["/company", "About FlakeMap"],
              ["/pricing", "Pricing hypotheses"],
              ["/resources", "Resources"],
              ["/contact", "Contact preview"],
              ["/trust", "Trust & scope"],
            ].map(([t, l]) => (
              <Link to={t} key={t}>
                {l}
              </Link>
            ))}
          </div>
          <div>
            <Eyebrow>Details</Eyebrow>
            <Link to="/sign-in">Sign in preview</Link>
            <Link to="/legal/privacy">Privacy & scope</Link>
            <Link to="/legal/terms">Draft preview terms</Link>
            <button
              className="motion-switch"
              aria-pressed={!motion}
              onClick={() => setMotion(!motion)}
            >
              {motion ? "Reduce motion" : "Enable motion"}{" "}
              <span>{motion ? "◉" : "○"}</span>
            </button>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            <p>© 2026 FlakeMap. All rights reserved.</p>
            <small>Same workflows. Clearer outcomes.</small>
          </div>
          <div className="footer-socials">
            {["LinkedIn", "Crunchbase"].map((s) => (
              <button
                key={s}
                aria-label={`${s} — profile pending`}
                onClick={() =>
                  setSocial(
                    `${s} profile is not configured. No company-profile URL has been supplied.`,
                  )
                }
              >
                <img
                  src={`/brand/social/${s === "LinkedIn" ? "linkedin.svg" : "crunchbase.png"}`}
                  width="20"
                  height="20"
                  alt=""
                />
                <span>{s}</span>
                <small>Pending</small>
              </button>
            ))}
          </div>
        </div>
        {social && (
          <p className="social-message" role="status">
            {social}
          </p>
        )}
      </div>
    </footer>
  );
}
function useMotion(root, motion, path) {
  useLayoutEffect(() => {
    if (!root.current) return;
    let lenis, ticker, storyTrigger;
    const cleanups = [];
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          all: "all",
          desktop: "(min-width: 1000px) and (min-height: 740px)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          if (!motion || context.conditions.reduced) return;
          lenis = new Lenis({
            lerp: 0.09,
            smoothWheel: true,
            prevent: (node) => Boolean(node.closest(".mobile-menu")),
            anchors: { offset: -110 },
            allowNestedScroll: true,
          });
          lenis.on("scroll", ScrollTrigger.update);
          ticker = (time) => lenis.raf(time * 1000);
          gsap.ticker.add(ticker);
          gsap.ticker.lagSmoothing(0);
          const visibility = () => {
            if (document.hidden) gsap.ticker.remove(ticker);
            else gsap.ticker.add(ticker);
          };
          document.addEventListener("visibilitychange", visibility);
          cleanups.push(() =>
            document.removeEventListener("visibilitychange", visibility),
          );
          gsap.from(".hero-content h1,.hero-description,.hero-actions", {
            y: 24,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          });
          gsap.from(".page-hero-copy,.hero-visual", {
            y: 28,
            opacity: 0,
            duration: 0.85,
            stagger: 0.16,
            ease: "power3.out",
          });
          if (context.conditions.desktop && document.querySelector(".hero-art"))
            gsap.to(".hero-art", {
              y: 60,
              scale: 1.04,
              ease: "none",
              scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: 1,
              },
            });
          const story = document.querySelector(".story");
          if (story && context.conditions.desktop) {
            story.classList.add("is-pinned");
            const track = story.querySelector(".story-track"),
              slides = [...story.querySelectorAll(".story-slide")],
              buttons = [...story.querySelectorAll("[data-story-jump]")];
            storyTrigger = ScrollTrigger.create({
              trigger: story,
              start: "top 86px",
              end: () => `+=${track.scrollWidth - innerWidth}`,
              pin: true,
              refreshPriority: 10,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const i = Math.round(self.progress * 3);
                buttons.forEach((b, j) => {
                  b.setAttribute("aria-current", j === i ? "step" : "false");
                  b.classList.toggle("active", j === i);
                });
                slides.forEach((s, j) => (s.inert = j !== i));
              },
            });
            slides.forEach((slide, i) => (slide.inert = i !== 0));
            gsap.to(track, {
              x: () => -(track.scrollWidth - innerWidth),
              ease: "none",
              scrollTrigger: {
                trigger: story,
                start: "top 86px",
                end: () => `+=${track.scrollWidth - innerWidth}`,
                scrub: 0.65,
                invalidateOnRefresh: true,
              },
            });
            buttons.forEach((b, i) => {
              const fn = () => {
                lenis.scrollTo(
                  storyTrigger.start +
                    (storyTrigger.end - storyTrigger.start) * (i / 3),
                  { duration: 0.8 },
                );
              };
              b.addEventListener("click", fn);
              cleanups.push(() => b.removeEventListener("click", fn));
            });
            cleanups.push(() => {
              storyTrigger = null;
              story.classList.remove("is-pinned");
              slides.forEach((s) => (s.inert = false));
            });
          }
          // Animate whole compositions once per viewport crossing; avoid nesting
          // independent transforms on the same visual. Re-enter from the other
          // direction when the reader scrolls back up.
          const candidates = gsap.utils.toArray(
            ".section > .container,.final-cta > .container,.context-band,.reveal",
          );
          const compositions = candidates.filter(
            (el) =>
              !candidates.some(
                (parent) => parent !== el && parent.contains(el),
              ),
          );
          compositions.forEach((el, i) => {
            gsap.set(el, { x: 0, y: 0, opacity: 1 });
            const direction = ["left", "up", "right", "down"][i % 4];
            const x =
              direction === "left" ? -56 : direction === "right" ? 56 : 0;
            const y = direction === "up" ? 44 : direction === "down" ? -44 : 0;
            el.dataset.revealDirection = direction;
            const enter = (reverse) =>
              context.add(() =>
                gsap.fromTo(
                  el,
                  { x: reverse ? -x : x, y: reverse ? -y : y, opacity: 0 },
                  {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    duration: 0.72,
                    ease: "power3.out",
                    overwrite: true,
                  },
                ),
              );
            const leave = (reverse) =>
              context.add(() =>
                gsap.to(el, {
                  x: reverse ? x : -x,
                  y: reverse ? y : -y,
                  opacity: 0,
                  duration: 0.26,
                  overwrite: true,
                }),
              );
            const rect = el.getBoundingClientRect();
            if (rect.top >= window.innerHeight || rect.bottom <= 0)
              gsap.set(el, { x, y, opacity: 0 });
            ScrollTrigger.create({
              trigger: el,
              start: "top 94%",
              end: "bottom 6%",
              onEnter: () => enter(false),
              onLeave: () => leave(false),
              onEnterBack: () => enter(true),
              onLeaveBack: () => leave(true),
            });
          });
          cleanups.push(() => gsap.killTweensOf(compositions));
          // Measure reveals after the story has added its pin spacing.
          const refreshFrame = requestAnimationFrame(() =>
            ScrollTrigger.refresh(),
          );
          let active = true;
          document.fonts?.ready.then(() => {
            if (active) ScrollTrigger.refresh();
          });
          cleanups.push(() => {
            active = false;
            cancelAnimationFrame(refreshFrame);
          });
          return () => {
            lenis?.destroy();
            if (ticker) gsap.ticker.remove(ticker);
            cleanups.forEach((f) => f());
          };
        },
      );
      return () => mm.revert();
    }, root);
    const fallbackButtons = [...document.querySelectorAll("[data-story-jump]")];
    const fns = fallbackButtons.map((b) => {
      const fn = () => {
        if (!storyTrigger) {
          const slide =
            document.querySelectorAll(".story-slide")[
              Number(b.dataset.storyJump)
            ];
          slide?.scrollIntoView({ behavior: "instant", block: "start" });
        }
      };
      b.addEventListener("click", fn);
      return () => b.removeEventListener("click", fn);
    });
    return () => {
      fns.forEach((f) => f());
      ctx.revert();
    };
  }, [motion, path]);
}
const titles = {
  "/": "Every path has a breaking point",
  "/products": "Proposed product portfolio",
  "/platform": "The proposed platform",
  "/solutions": "Release-team solutions",
  "/problem": "Why single-run passes can miss it",
  "/evaluation": "Synthetic evaluation example",
  "/pricing": "Pricing hypotheses",
  "/request-demo": "Request a replay study",
  "/contact": "Contact preview",
  "/demo": "Synthetic replay workspace",
  "/sign-in": "Sign in preview",
  "/company": "About FlakeMap",
  "/trust": "Trust & scope",
  "/resources": "Reliability resources",
  "/legal/privacy": "Privacy & preview scope",
  "/legal/terms": "Draft preview terms",
};
export default function App() {
  const location = useLocation(),
    root = useRef(),
    [motion, setMotion] = useState(
      typeof window === "undefined" ||
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  const [intro, setIntro] = useState(false);
  const dismissIntro = useCallback(() => {
    try {
      sessionStorage.setItem("flakemap-intro-seen", "1");
    } catch {}
    setIntro(false);
    requestAnimationFrame(() => {
      const heading = document.querySelector(".hero h1");
      if (heading) {
        heading.setAttribute("tabindex", "-1");
        heading.focus({ preventScroll: true });
      }
    });
  }, []);
  useEffect(() => {
    if (location.pathname !== "/" || location.hash) {
      setIntro(false);
      return;
    }
    let seen = false;
    try {
      seen = sessionStorage.getItem("flakemap-intro-seen") === "1";
    } catch {}
    if (!seen || new URLSearchParams(location.search).get("intro") === "1")
      setIntro(true);
  }, [location.pathname]);
  useMotion(root, motion && !intro, location.pathname);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setMotion(!media.matches);
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);
  useEffect(() => {
    const module = modules.find(
        (m) => location.pathname === `/products/${m.slug}`,
      ),
      article = articles.find(
        (a) => location.pathname === `/resources/${a.slug}`,
      );
    document.title = `${module ? `FlakeMap ${module.name}` : article ? article.title : titles[location.pathname] || "Path not mapped"} — FlakeMap`;
    document
      .querySelector("meta[name=description]")
      ?.setAttribute(
        "content",
        module
          ? module.description
          : article
            ? article.intro
            : "Find the failing step in long-horizon agent workflows. Explore seeded replay, controlled tool faults, and human-reviewed release evidence.",
      );
    window.scrollTo({ top: 0, behavior: "instant" });
    track(
      location.pathname === "/pricing"
        ? "pricing_view"
        : location.pathname === "/demo"
          ? "demo_open"
          : "landing_view",
      { synthetic: location.pathname === "/demo", key: location.pathname },
    );
    if (location.hash) {
      requestAnimationFrame(() =>
        document
          .getElementById(decodeURIComponent(location.hash.slice(1)))
          ?.scrollIntoView({ block: "start" }),
      );
    }
  }, [location.pathname]);
  return (
    <>
      {intro && location.pathname === "/" && (
        <EntrySequence motion={motion} onClose={dismissIntro} />
      )}
      <Nav motion={motion} setMotion={setMotion} />
      {location.pathname === "/demo" && (
        <div className="workspace-ribbon">
          <span>DEMO · SYNTHETIC DATA</span>
          <span>Local simulation only</span>
        </div>
      )}
      <main
        id="main"
        ref={root}
        key={location.pathname}
        data-motion={motion ? "on" : "reduced"}
      >
        <Routes>
          <Route
            path="/"
            element={<Home onReplayIntro={() => setIntro(true)} />}
          />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<Product />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/evaluation" element={<Evaluation />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/request-demo" element={<Request />} />
          <Route path="/contact" element={<Request contact />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/company" element={<Company />} />
          <Route path="/trust" element={<Trust />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<Article />} />
          <Route path="/legal/privacy" element={<Legal />} />
          <Route path="/legal/terms" element={<Legal terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer motion={motion} setMotion={setMotion} />
    </>
  );
}
