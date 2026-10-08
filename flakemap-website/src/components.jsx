import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { modules, runSeeds, outcome, durations } from "./data";
import { track } from "./telemetry";
export function Icon({ name = "arrow-right", size = 20 }) {
  return (
    <img
      className="icon"
      src={`/brand/icons/${name}.svg`}
      alt=""
      width={size}
      height={size}
    />
  );
}
export function Button({
  to,
  children,
  light = false,
  secondary = false,
  ...props
}) {
  const cls = `button ${secondary ? "secondary" : ""} ${light ? "light" : ""}`;
  return to ? (
    <Link className={cls} to={to} {...props}>
      {children}
      <span className="arrow" aria-hidden="true">
        ↗
      </span>
    </Link>
  ) : (
    <button className={cls} {...props}>
      {children}
      <span className="arrow" aria-hidden="true">
        →
      </span>
    </button>
  );
}
export function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}
export function Boundary() {
  return (
    <div className="demo-boundary">
      <span className="status-dot" />
      DEMO — SYNTHETIC DATA <span>Simulation only</span>
    </div>
  );
}
export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <Eyebrow>A smaller test. A clearer decision.</Eyebrow>
        <h2>
          Start with the workflow
          <br />
          you <em>can’t afford to guess.</em>
        </h2>
        <div className="cta-line">
          <p>
            Agree on one task criterion, an approved fixture, and a named
            engineering owner.
          </p>
          <Button to="/request-demo">Request a replay study</Button>
        </div>
      </div>
    </section>
  );
}
export function Artifact({
  duplicate = false,
  compact = false,
  origin = "Retry response",
}) {
  return (
    <div
      className={`artifact ${duplicate ? "duplicate" : ""} ${compact ? "compact" : ""}`}
    >
      <div className="artifact-top">
        <Icon name="evidence" />
        <span>Purchase order</span>
        <span className="artifact-id">{duplicate ? "B" : "A"}</span>
      </div>
      <h3>PO-204-{duplicate ? "B" : "A"}</h3>
      <dl>
        <dt>Order reference</dt>
        <dd>PO-204</dd>
        <dt>Vendor</dt>
        <dd>Fictional Harbor Parts</dd>
        <dt>Origin</dt>
        <dd>{duplicate ? "Late original response" : origin}</dd>
      </dl>
      <div className="paper-lines">
        <i />
        <i />
        <i />
      </div>
      <span className={`badge ${duplicate ? "fail" : "pass"}`}>
        {duplicate ? "Duplicate artifact" : "Expected draft"}
      </span>
    </div>
  );
}
export function TraceDiagram({ fault = false, dark = false }) {
  return (
    <div className={`trace-diagram ${dark ? "dark" : ""}`}>
      <div className="trace-step">
        <Icon name="search" />
        <b>Order lookup</b>
        <small>PO-204</small>
      </div>
      <span className="connector" aria-hidden="true">
        →
      </span>
      <div className={`trace-step ${fault ? "fault" : ""}`}>
        <Icon name={fault ? "timeout" : "check"} />
        <b>Stock check</b>
        <small>{fault ? "Timeout injected" : "Response received"}</small>
      </div>
      <span className="connector" aria-hidden="true">
        →
      </span>
      <div className="trace-step">
        <Icon name="evidence" />
        <b>PO draft</b>
        <small>
          {fault ? "Retry + late response" : "Exactly one artifact"}
        </small>
      </div>
      {fault && (
        <div className="branch-note">
          <span>↳</span>
          <b>Two paths reach draft creation.</b>
          <small>Candidate lacks a shared deduplication guard.</small>
        </div>
      )}
    </div>
  );
}
export function ModuleGraphic({ module }) {
  if (module.slug === "trust-desk")
    return (
      <div className="fixture-visual">
        <div className="fixture-paper">
          <span>APPROVED FIXTURE / PO-204</span>
          <pre>
            {
              '{\n  "order": "PO-204",\n  "tool": "stock.lookup",\n  "source": "redacted",\n  "expected_drafts": 1\n}'
            }
          </pre>
        </div>
        <div className="scenario-card">
          <Icon name="scenario" />
          <b>Scenario ready</b>
          <span>
            Exactly one draft
            <br />
            Original order reference
          </span>
        </div>
        <small>Proposed source mapping · synthetic example</small>
      </div>
    );
  if (module.slug === "trust-review")
    return (
      <div className="mini-matrix">
        <div className="mini-heading">
          <b>Seed / timeout</b>
          <span>v0.8 → v0.9</span>
        </div>
        {runSeeds.map((s) => (
          <div key={s}>
            <span>{s}</span>
            <span className="mini-pass">1 draft</span>
            <span
              className={
                outcome(s, "timeout") === 2 ? "mini-fail" : "mini-pass"
              }
            >
              {outcome(s, "timeout")} draft
              {outcome(s, "timeout") === 2 ? "s" : ""}
            </span>
          </div>
        ))}
        <small>Baseline 8/8 · Candidate 6/8 · synthetic</small>
      </div>
    );
  if (module.slug === "trust-proof")
    return (
      <div className="fault-visual">
        <span className="time-label">SEED 104 / STOCK API</span>
        {[
          ["00:00", "Order lookup", "pass"],
          ["00:04", "Timeout injected", "fault"],
          ["00:06", "Retry → PO-204-A", "pass"],
          ["00:12", "Late response → PO-204-B", "fault"],
        ].map(([t, x, c]) => (
          <div key={t}>
            <span>{t}</span>
            <i className={c} />
            <b>{x}</b>
          </div>
        ))}
        <p>Failing transition: second draft creation</p>
      </div>
    );
  if (module.slug === "trust-signal")
    return (
      <div className="gate-visual">
        <span className="eyebrow">TASK ACCEPTANCE</span>
        <h3>Exactly one draft.</h3>
        <div>
          <span>Expected</span>
          <b>1</b>
          <span>Observed</span>
          <b>2</b>
        </div>
        <div className="gate-line">
          <Icon name="gate" />
          <b>Mock gate blocked</b>
        </div>
        <small>Reviewed by Mira Chen · fictional reviewer</small>
      </div>
    );
  return (
    <div className="archive-visual">
      <img
        src="/brand/illustrations/evidence-archive.webp"
        width="800"
        height="600"
        alt="Original glass evidence folios"
        loading="lazy"
      />
      <div>
        <span>FAILURE CLUSTER / 01</span>
        <b>Duplicate after retry</b>
        <small>Seeds 104 + 108 · two linked artifact pairs</small>
      </div>
    </div>
  );
}
export function FAQ({ items }) {
  return (
    <div className="faq-list">
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>
            {q}
            <span aria-hidden="true">+</span>
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
export function Dashboard({ compact = false }) {
  const [condition, setCondition] = useState("timeout"),
    [seed, setSeed] = useState(104),
    [version, setVersion] = useState("candidate"),
    [note, setNote] = useState(""),
    [review, setReview] = useState(false),
    [error, setError] = useState(""),
    [report, setReport] = useState(null),
    [reportUrl, setReportUrl] = useState("");
  useEffect(() => {
    if (!report) {
      setReportUrl("");
      return;
    }
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(report, null, 2)], { type: "application/json" }),
    );
    setReportUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [report]);
  const noteRef = useRef();
  const drafts = outcome(seed, condition, version),
    passes = runSeeds.filter((s) => outcome(s, condition) === 1).length;
  function reset() {
    setCondition("timeout");
    setSeed(104);
    setVersion("candidate");
    setNote("");
    setReview(false);
    setReport(null);
    setError("");
  }
  function change(next) {
    next();
    setNote("");
    setReview(false);
    setError("");
    setReport(null);
  }
  function exportReport() {
    const r = {
      boundary: "DEMO — SYNTHETIC DATA",
      workflow: "PO-204",
      baseline: "v0.8",
      candidate: "v0.9",
      condition,
      seeds: runSeeds,
      criterion: "Exactly one PO draft per order",
      baselineMet: 8,
      candidateMet: passes,
      denominator: 8,
      selected: { seed, version, drafts },
      humanReview: review
        ? {
            rationale: note,
            decision: drafts === 2 ? "block mock gate" : "eligible mock gate",
          }
        : "Pending",
      uncertainty:
        "Fixed stub fixtures. Not a production reliability estimate.",
      externalWrites: false,
    };
    setReport(r);
    track("demo_complete", {
      synthetic: true,
      key: `${condition}:${seed}:${version}`,
    });
  }
  return (
    <div className={`dashboard ${compact ? "dashboard-compact" : ""}`}>
      <Boundary />
      <div className="dashboard-head">
        <div>
          <Icon name="replay" />
          <b>Harbor Parts / PO-204</b>
          <span>Replay workbench</span>
        </div>
        <button className="text-button" onClick={reset}>
          <Icon name="reset" />
          Reset demo
        </button>
      </div>
      <div className="dashboard-controls">
        <label>
          Version
          <select
            value={version}
            onChange={(e) => change(() => setVersion(e.target.value))}
          >
            <option value="candidate">Candidate v0.9</option>
            <option value="baseline">Baseline v0.8</option>
          </select>
        </label>
        <label>
          Tool condition
          <select
            value={condition}
            onChange={(e) => change(() => setCondition(e.target.value))}
          >
            <option value="normal">Normal response</option>
            <option value="timeout">Stock API timeout</option>
            <option value="delay">Delayed response</option>
          </select>
        </label>
        <label>
          Visible seed
          <select
            value={seed}
            onChange={(e) => change(() => setSeed(Number(e.target.value)))}
          >
            {runSeeds.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <span className="simulation">8 fixed runs / condition</span>
      </div>
      <div className="dashboard-stats">
        <span>
          Acceptance criterion <b>Exactly one draft per order</b>
        </span>
        <span>
          Baseline met <b>8 / 8</b>
        </span>
        <span>
          Candidate met <b>{passes} / 8</b>
        </span>
      </div>
      <div className="dashboard-body">
        <div className="run-matrix">
          <Eyebrow>Seeded run matrix</Eyebrow>
          <table>
            <caption>
              Same criterion, seeds, and tool condition. Synthetic fixtures.
            </caption>
            <thead>
              <tr>
                <th>Seed</th>
                <th>Baseline</th>
                <th>Candidate</th>
                <th>Inspect</th>
              </tr>
            </thead>
            <tbody>
              {runSeeds.map((s) => (
                <tr key={s} className={s === seed ? "selected" : ""}>
                  <th>{s}</th>
                  <td>
                    <span className="result-dot pass" />1 draft
                  </td>
                  <td>
                    <span
                      className={`result-dot ${outcome(s, condition) === 2 ? "fail" : "pass"}`}
                    />
                    {outcome(s, condition)} draft
                    {outcome(s, condition) === 2 ? "s" : ""}
                  </td>
                  <td>
                    <button
                      onClick={() => change(() => setSeed(s))}
                      aria-label={`Inspect seed ${s}`}
                      aria-pressed={s === seed}
                    >
                      ↗
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="run-evidence" aria-live="polite">
          <div className="evidence-heading">
            <Eyebrow>
              {version} / seed {seed}
            </Eyebrow>
            <span className={`badge ${drafts === 2 ? "fail" : "pass"}`}>
              {drafts === 2 ? "Criterion failed" : "Criterion met"}
            </span>
          </div>
          <h3>
            {drafts === 2 ? "Two drafts. One task." : "One task. One draft."}
          </h3>
          <p>
            {drafts === 2
              ? "The retry and late original response both reach draft creation. The candidate misses the exactly-one-draft criterion."
              : "This fixture produces one draft preserving the order reference. The selected criterion is met."}
          </p>
          <div className="artifacts">
            <Artifact
              compact
              origin={
                condition === "normal" ? "Stock response" : "Retry response"
              }
            />
            {drafts === 2 && <Artifact compact duplicate />}
          </div>
          <p className="source-note">
            <Icon name="trace" />
            Source: fixture/po-204.json · {condition} · simulation only
          </p>
        </div>
      </div>
      <div className="review-area">
        <div>
          <Eyebrow>Human adjudication / mock state</Eyebrow>
          <h3>
            {review
              ? drafts === 2
                ? "Mock gate blocked."
                : "Mock gate eligible."
              : "Keep the decision reviewable."}
          </h3>
          <p>
            {review
              ? "Your rationale is attached to this local fixture. No real CI gate changed."
              : "An engineer reviews the artifact and records why the criterion is met or failed."}
          </p>
        </div>
        <div>
          <label htmlFor="rationale">Reviewer rationale</label>
          <textarea
            id="rationale"
            ref={noteRef}
            rows="2"
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
              setReview(false);
            }}
            placeholder="Explain the artifact and the acceptance criterion…"
            aria-describedby="review-error"
          />
          {error && (
            <p id="review-error" role="alert" className="error">
              {error}
            </p>
          )}
          <div className="review-actions">
            <button
              className="button"
              onClick={() => {
                if (!note.trim()) {
                  setError("Add a rationale before recording the mock review.");
                  noteRef.current.focus();
                  return;
                }
                setError("");
                setReview(true);
                setReport(null);
              }}
            >
              Record mock review <span>→</span>
            </button>
            <button className="button secondary" onClick={exportReport}>
              Prepare mock report <span>↗</span>
            </button>
          </div>
        </div>
      </div>
      {report && (
        <div className="report-panel" role="status">
          <Eyebrow>DEMO · Synthetic sample report</Eyebrow>
          <h3>Mock report ready.</h3>
          <p>
            Synthetic fixture evidence only; no CI write or external submission.
          </p>
          <a
            className="button secondary"
            download="flakemap-mock-gate.json"
            href={reportUrl}
          >
            Download mock JSON ↗
          </a>
          <details>
            <summary>Inspect report contents</summary>
            <pre>{JSON.stringify(report, null, 2)}</pre>
          </details>
        </div>
      )}
      <details className="data-dictionary">
        <summary>Data dictionary & simulation boundary</summary>
        <p>
          PO-204 is fictional. Seeds 101–108 select fixed stub artifacts.
          Candidate timeout fails on 104 and 108; delay fails on 108; normal
          meets 8/8. Baseline meets 8/8. Drafts A and B denote artifact origins,
          not real purchase orders. Owner and review entries are local mock
          state. All external sends, billing, tool writes, and CI actions are
          absent.
        </p>
      </details>
    </div>
  );
}
export function StudyForm({ contact = false }) {
  const [stage, setStage] = useState("form"),
    [errors, setErrors] = useState([]),
    [values, setValues] = useState({
      email: "",
      company: "",
      role: "",
      cadence: "",
      module: "Full platform / scope together",
      workflow: "",
      stack: "",
      traces: "",
      consent: false,
      interview: false,
    });
  const errorRef = useRef(),
    stageRef = useRef();
  const update = (k, v) => {
    setValues((s) => ({ ...s, [k]: v }));
    track("form_start", { key: "study" });
  };
  const focusStage = () => setTimeout(() => stageRef.current?.focus(), 0);
  function submit(e) {
    e.preventDefault();
    const errs = [];
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      errs.push("Enter a valid work email.");
    for (const [k, l] of [
      ["company", "company"],
      ["role", "role"],
      ["cadence", "release cadence"],
      ["workflow", "workflow"],
      ["traces", "trace approval state"],
    ])
      if (!values[k].trim()) errs.push(`Complete ${l}.`);
    if (!values.consent) errs.push("Acknowledge the preview privacy notice.");
    setErrors(errs);
    if (errs.length) {
      setTimeout(() => errorRef.current?.focus(), 0);
      return;
    }
    setStage("review");
    focusStage();
  }
  if (stage !== "form")
    return (
      <div className="form-card completion" ref={stageRef} tabIndex="-1">
        <Eyebrow>
          {stage === "review"
            ? "Review your preview"
            : "Preview complete / not sent"}
        </Eyebrow>
        <h2>
          {stage === "review"
            ? "One workflow, clearly scoped."
            : "Your request flow is complete."}
        </h2>
        {stage === "review" ? (
          <>
            <dl className="review-fields">
              {Object.entries(values)
                .filter(([k]) => !["consent", "interview"].includes(k))
                .map(([k, v]) => (
                  <React.Fragment key={k}>
                    <dt>
                      {{
                        cadence: "Release cadence",
                        module: "Proposed module",
                        traces: "Trace approval",
                      }[k] || k}
                    </dt>
                    <dd>{v || "Not provided"}</dd>
                  </React.Fragment>
                ))}
            </dl>
            <p>
              Nothing has been sent. This demonstrates intake and review only.
            </p>
            <Button
              onClick={() => {
                setStage("success");
                track("form_submit", { synthetic: true, key: "local-preview" });
                focusStage();
              }}
            >
              Complete local preview
            </Button>
            <button className="text-button" onClick={() => setStage("form")}>
              Edit details
            </button>
          </>
        ) : (
          <>
            <p>
              No request was delivered, meeting booked, or lead stored. This
              prototype keeps form entries only in page memory.
            </p>
            <Button to="/demo">Explore the synthetic workspace</Button>
            <button
              className="text-button"
              onClick={() => {
                setValues({
                  email: "",
                  company: "",
                  role: "",
                  cadence: "",
                  module: "Full platform / scope together",
                  workflow: "",
                  stack: "",
                  traces: "",
                  consent: false,
                  interview: false,
                });
                setStage("form");
              }}
            >
              Reset preview and clear entries
            </button>
          </>
        )}
      </div>
    );
  return (
    <form className="form-card" onSubmit={submit} noValidate>
      <Eyebrow>
        {contact ? "Contact / local preview" : "Replay study / qualification"}
      </Eyebrow>
      <h2>{contact ? "Start a conversation." : "Tell us about the task."}</h2>
      <p>
        Preview intake for an agreed replay study. Use fictional details here;
        nothing is submitted.
      </p>
      {errors.length > 0 && (
        <div
          className="error-summary"
          role="alert"
          ref={errorRef}
          tabIndex="-1"
        >
          {errors.map((x) => (
            <p key={x}>{x}</p>
          ))}
        </div>
      )}
      <div className="form-grid">
        <label>
          Work email
          <input
            type="email"
            autoComplete="off"
            required
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="qa@harbor.example"
          />
        </label>
        <label>
          Company
          <input
            required
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="Fictional organization"
          />
        </label>
        <label>
          Your role
          <select
            required
            value={values.role}
            onChange={(e) => update("role", e.target.value)}
          >
            <option value="">Choose a role</option>
            <option>AI engineering lead</option>
            <option>Evaluation / QA engineer</option>
            <option>Engineering VP</option>
            <option>Other engineering role</option>
          </select>
        </label>
        <label>
          Release cadence
          <select
            required
            value={values.cadence}
            onChange={(e) => update("cadence", e.target.value)}
          >
            <option value="">Choose cadence</option>
            <option>Weekly or more often</option>
            <option>Monthly</option>
            <option>Exploring agents</option>
          </select>
        </label>
      </div>
      <label>
        Proposed module
        <select
          value={values.module}
          onChange={(e) => update("module", e.target.value)}
        >
          <option>Full platform / scope together</option>
          {modules.map((m) => (
            <option key={m.slug}>{m.name}</option>
          ))}
        </select>
      </label>
      <label>
        Which workflow fails between tool steps?
        <textarea
          rows="3"
          required
          value={values.workflow}
          onChange={(e) => update("workflow", e.target.value)}
          placeholder="Task, failure condition, and expected artifact. No sensitive details."
        />
      </label>
      <label>
        Existing eval stack <small>(optional)</small>
        <input
          value={values.stack}
          onChange={(e) => update("stack", e.target.value)}
          placeholder="LangSmith, Braintrust, internal harness…"
        />
      </label>
      <label>
        Is trace sharing approved?
        <select
          required
          value={values.traces}
          onChange={(e) => update("traces", e.target.value)}
        >
          <option value="">Select approval state</option>
          <option>Approved redacted fixtures available</option>
          <option>Approval needed</option>
          <option>No trace corpus yet</option>
        </select>
      </label>
      <label className="checkbox">
        <input
          type="checkbox"
          checked={values.interview}
          onChange={(e) => update("interview", e.target.checked)}
        />
        <span>
          I’m interested in a workflow interview.{" "}
          <small>Optional; no meeting will be booked.</small>
        </span>
      </label>
      <label className="checkbox">
        <input
          type="checkbox"
          required
          checked={values.consent}
          onChange={(e) => update("consent", e.target.checked)}
        />
        <span>
          I understand this is a local preview and have read the{" "}
          <Link to="/legal/privacy">privacy & scope notice</Link>.
        </span>
      </label>
      <Button type="submit">Review preview request</Button>
      <small>
        No raw traces, secrets, or attachments. Entries clear on route exit or
        reload.
      </small>
    </form>
  );
}

export function EvidenceFlip() {
  const [open, setOpen] = useState(false),
    [pinned, setPinned] = useState(false);
  return (
    <div
      className={`evidence-flip ${open ? "flipped" : ""}`}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") setOpen(true);
      }}
      onPointerLeave={() => {
        if (!pinned) setOpen(false);
      }}
    >
      <button
        className="flip-trigger"
        aria-pressed={pinned}
        aria-label="Flip failure evidence"
        onClick={() => {
          setPinned(!pinned);
          setOpen(!pinned);
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setPinned(false);
            setOpen(false);
          }
        }}
      >
        <span>
          {open ? "Return to event order" : "Inspect the artifact criterion"}
        </span>
        <span>↶</span>
      </button>
      <div className="flip-canvas">
        <div className="flip-inner">
          <div className="flip-face flip-front" aria-hidden={open}>
            <ModuleGraphic module={modules[2]} />
          </div>
          <div className="flip-face flip-back" aria-hidden={!open}>
            <Eyebrow>Same event. Task-level consequence.</Eyebrow>
            <h3>
              Expected: one draft.
              <br />
              Observed: two.
            </h3>
            <p>
              Retry creates PO-204-A. The late original response creates
              PO-204-B. The candidate fails the task criterion.
            </p>
            <span className="badge fail">Mock gate blocked</span>
            <small>DEMO — SYNTHETIC DATA / Seed 104</small>
          </div>
        </div>
      </div>
      <p className="caption">
        Hover to preview. Click or tap to hold. Escape to return.
      </p>
    </div>
  );
}

export function DiagramAsset({ src, alt }) {
  return (
    <figure className="diagram-figure">
      <div
        className="diagram-scroll"
        tabIndex="0"
        role="region"
        aria-label="Scrollable diagram"
      >
        <img className="diagram-asset" src={src} alt={alt} loading="lazy" />
      </div>
      <figcaption>
        <span>Illustrative workflow</span>
        <details>
          <summary>Read diagram description</summary>
          <p>{alt}</p>
        </details>
      </figcaption>
    </figure>
  );
}
