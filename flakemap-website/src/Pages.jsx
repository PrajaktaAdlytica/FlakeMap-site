import React, { useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import HeroVisual from "./HeroVisual";
import { modules, articles, runSeeds, outcome, durations } from "./data";
import {
  Button,
  Eyebrow,
  Icon,
  ModuleGraphic,
  TraceDiagram,
  Artifact,
  FAQ,
  FinalCTA,
  Dashboard,
  StudyForm,
  Boundary,
  DiagramAsset,
} from "./components";
import {
  setAnalyticsConsent,
  getEvents,
  getAnalyticsConsent,
} from "./telemetry";
export function PageHero({ tag, title, copy, children, env = "", visual }) {
  return (
    <section
      className={`page-hero ${env} ${visual ? `rich-hero rich-${visual}` : ""}`}
    >
      <div className={`container ${visual ? "rich-hero-grid" : ""}`}>
        <div className="page-hero-copy">
          <Eyebrow>{tag}</Eyebrow>
          <h1>{title}</h1>
          <p>{copy}</p>
          {children}
          {visual && (
            <a className="hero-explore-link" href="#page-content">
              Explore{" "}
              {visual === "company"
                ? "our approach"
                : visual === "resources"
                  ? "the field guide"
                  : visual === "pricing"
                    ? "the study model"
                    : `the ${visual}`}
              <span>↓</span>
            </a>
          )}
        </div>
        {visual && <HeroVisual type={visual} />}
      </div>
    </section>
  );
}
export function Products() {
  return (
    <>
      <PageHero
        tag="The FlakeMap portfolio / proposed modules"
        title={
          <>
            Five questions.
            <br />
            <em>One evidence chain.</em>
          </>
        }
        copy="Keep source, variation, fault, acceptance, and review connected. All five modules are proposed directions; select one for the first pilot."
      />
      <section className="section">
        <div className="container product-list">
          {modules.map((m) => (
            <article key={m.slug} className={`product-row ${m.env} reveal`}>
              <div>
                <Eyebrow>{m.number} / Proposed module</Eyebrow>
                <h2>{m.name}</h2>
                <h3>{m.verb}</h3>
                <p>{m.description}</p>
                <Button to={`/products/${m.slug}`}>Explore {m.name}</Button>
              </div>
              <div className="product-row-visual">
                <ModuleGraphic module={m} />
              </div>
            </article>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
export function Product() {
  const { slug } = useParams();
  const m = modules.find((m) => m.slug === slug);
  const [stage, setStage] = useState(0);
  if (!m) return <NotFound />;
  return (
    <>
      <section className={`product-hero ${m.env}`}>
        <div className="container split">
          <div>
            <Eyebrow>
              FlakeMap {m.name} / Proposed module {m.number}
            </Eyebrow>
            <h1>
              {m.verb.split(" ").slice(0, -1).join(" ")}
              <br />
              <em>{m.verb.split(" ").slice(-1)}</em>
            </h1>
            <p>{m.description}</p>
            <div className="hero-actions">
              <Button to="/request-demo">Scope a {m.name} study</Button>
              <Button secondary to="/demo">
                Explore synthetic demo
              </Button>
            </div>
          </div>
          <div className="product-hero-visual">
            <ModuleGraphic module={m} />
            <p className="visual-caption">DEMO — SYNTHETIC DATA</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div className="reveal">
            <Eyebrow>The question this module answers</Eyebrow>
            <h2>{m.question}</h2>
            <dl className="input-output">
              <dt>Input</dt>
              <dd>{m.input}</dd>
              <dt>Output</dt>
              <dd>{m.output}</dd>
            </dl>
          </div>
          <div className="feature-list">
            {m.features.map(([t, c], i) => (
              <article className="reveal" key={t}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{c}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className={`section module-walk ${m.env}`}>
        <div className="container">
          <Eyebrow>Follow the proposed workflow</Eyebrow>
          <h2>
            A visible path from
            <br />
            <em>input to decision.</em>
          </h2>
          <div
            className="walk-controls"
            aria-label={`${m.name} workflow stages`}
          >
            {m.steps.map((s, i) => (
              <button
                key={s}
                onClick={() => setStage(i)}
                aria-pressed={stage === i}
              >
                <span>0{i + 1}</span>
                {s}
              </button>
            ))}
          </div>
          <div className="walk-result" aria-live="polite">
            <span className="walk-number">0{stage + 1}</span>
            <div>
              <h3>{m.steps[stage]}</h3>
              <p>
                {
                  [
                    m.input,
                    "Make the fixture, criterion, and selected condition explicit.",
                    "Inspect the source and resulting artifacts. Keep unresolved evidence visible.",
                    m.output,
                  ][stage]
                }
              </p>
              <span className="badge info">
                Proposed process / synthetic example
              </span>
            </div>
            <Icon name={m.icon} size={48} />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <Eyebrow>Module boundaries</Eyebrow>
            <h2>
              Useful evidence.
              <br />
              <em>Honest limits.</em>
            </h2>
          </div>
          <FAQ
            items={[
              [
                `Is ${m.name} live?`,
                "This module is available to explore in the synthetic demo. A first pilot would test one scoped module with approved fixtures.",
              ],
              [
                "What does the demo execute?",
                "It selects deterministic stub fixtures and changes local mock states. It does not call models, write to tools, import customer traces, or modify CI.",
              ],
              [
                "How is value validated?",
                "Compare with the existing eval gate and confirm a meaningful missed regression independently. A named engineering owner must commit a gate or fund a trial before expansion.",
              ],
            ]}
          />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
export function Problem() {
  const [version, setVersion] = useState("candidate");
  return (
    <>
      <PageHero
        env="ice"
        tag="Why change / workflow-level reliability"
        title={
          <>
            The steps can pass.
            <br />
            <em>The task can still fail.</em>
          </>
        }
        copy="Retries, late responses, and changing inputs can alter the final artifact. A single passing run may leave that transition untested."
      />
      <section className="section">
        <div className="container split">
          <div>
            <Eyebrow>PO-204 / Controlled timeout example</Eyebrow>
            <h2>
              Same order.
              <br />
              <em>Different artifact.</em>
            </h2>
            <p>
              The baseline suppresses the late duplicate. The candidate’s two
              response paths each produce a draft.
            </p>
            <div className="segmented">
              {["baseline", "candidate"].map((v) => (
                <button
                  key={v}
                  onClick={() => setVersion(v)}
                  aria-pressed={version === v}
                >
                  {v === "baseline" ? "Baseline v0.8" : "Candidate v0.9"}
                </button>
              ))}
            </div>
            <p aria-live="polite">
              {version === "candidate"
                ? "Observed: 2 drafts. Exactly-one-draft criterion fails."
                : "Observed: 1 draft. Exactly-one-draft criterion is met."}
            </p>
          </div>
          <div className="problem-artifacts">
            <Boundary />
            <TraceDiagram fault />
            <div className="branch-artifacts">
              <Artifact />
              {version === "candidate" && <Artifact duplicate />}
            </div>
          </div>
        </div>
      </section>
      <section className="section diagnostic">
        <div className="container">
          <Eyebrow>Find the mechanism</Eyebrow>
          <h2>
            The timing changed.
            <br />
            <em>The criterion didn’t.</em>
          </h2>
          <div className="three-columns">
            {[
              ["Retry", "The timeout triggers a second request."],
              [
                "Late response",
                "The original response arrives after the retry.",
              ],
              [
                "Duplicate artifact",
                "Both paths reach drafting without a shared guard.",
              ],
            ].map(([t, p], i) => (
              <article className="reveal" key={t}>
                <span className="large-index">0{i + 1}</span>
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
export function Solutions() {
  const [persona, setPersona] = useState(0);
  const personas = [
    [
      "AI engineering lead",
      "Keep a weekly release tied to task outcomes.",
      "Own the workflow criterion, compare candidate with baseline, and investigate transitions that change artifacts.",
      ["trust-review", "trust-proof"],
    ],
    [
      "Evaluation / QA engineer",
      "Build a reviewable test set.",
      "Scope the fixture, control conditions, inspect each seed, and preserve human adjudication.",
      ["trust-desk", "trust-report"],
    ],
    [
      "Engineering VP",
      "Fund a falsifiable study.",
      "Agree on the success criterion and budget owner. Continue only with independently confirmed incremental evidence.",
      ["trust-signal"],
    ],
  ];
  let p = personas[persona];
  return (
    <>
      <PageHero
        visual="solutions"
        tag="Solutions / Release-team responsibilities"
        title={
          <>
            Different owners.
            <br />
            <em>A shared decision.</em>
          </>
        }
        copy="The engineering lead owns release outcomes. QA makes evidence inspectable. The VP owns trial budget. Each needs a clear next step."
      />
      <section id="page-content" className="section">
        <div className="container">
          <div className="walk-controls">
            {personas.map((p, i) => (
              <button
                key={p[0]}
                aria-pressed={i === persona}
                onClick={() => setPersona(i)}
              >
                {p[0]}
              </button>
            ))}
          </div>
          <div className="persona-panel split">
            <div>
              <Eyebrow>{p[0]}</Eyebrow>
              <h2>{p[1]}</h2>
              <p>{p[2]}</p>
              <Button to="/request-demo">Scope your study</Button>
            </div>
            <div>
              {p[3].map((slug) => {
                let m = modules.find((m) => m.slug === slug);
                return (
                  <Link
                    className="responsibility-row"
                    to={`/products/${slug}`}
                    key={slug}
                  >
                    <Icon name={m.icon} />
                    <div>
                      <h3>{m.name}</h3>
                      <p>{m.short}</p>
                    </div>
                    <span>↗</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="section warm">
        <div className="container split">
          <div>
            <Eyebrow>First workflow</Eyebrow>
            <h2>
              A purchase order,
              <br />
              <em>with an exact criterion.</em>
            </h2>
            <p>
              The demo centers on one fictional task. Ticket resolution is
              another possible workflow, subject to approved traces and a
              separately agreed acceptance rubric.
            </p>
          </div>
          <DiagramAsset
            src="/brand/diagrams/timeout-branch.svg"
            alt="Timeout causes retry and late response branches that each create a PO draft"
            loading="lazy"
          />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
export function Platform() {
  return (
    <>
      <PageHero
        visual="platform"
        tag="The proposed platform / Evidence travels together"
        title={
          <>
            From source
            <br />
            to <em>release context.</em>
          </>
        }
        copy="A proposed fixture-only lab layered onto the existing evaluation process. The platform connects the evidence chain; it does not imply a live integration."
        env="ice"
      />
      <section id="page-content" className="section">
        <div className="container">
          <div className="architecture">
            {modules.map((m) => (
              <Link
                className={`architecture-node ${m.env} reveal`}
                key={m.slug}
                to={`/products/${m.slug}`}
              >
                <Icon name={m.icon} />
                <b>{m.name}</b>
                <span>{m.label}</span>
                <small>Proposed module ↗</small>
              </Link>
            ))}
          </div>
          <div className="platform-ledger">
            <span>Shared record</span>
            <b>
              Fixture + version + condition + seed + artifact + human criterion
            </b>
            <span>Retained in each mock report</span>
          </div>
        </div>
      </section>
      <section className="section sage">
        <div className="container split">
          <div>
            <Eyebrow>Named boundaries</Eyebrow>
            <h2>
              Model the response.
              <br />
              <em>Keep production outside.</em>
            </h2>
            <p>
              Stub tools make the concept demo deterministic. An eventual pilot
              would need approved trace access, controlled replay, explicit data
              handling, and named ownership.
            </p>
            <Button to="/trust" secondary>
              Inspect trust & scope
            </Button>
          </div>
          <DiagramAsset
            src="/brand/diagrams/study-boundary.svg"
            alt="Fixture-only study boundary excludes production calls, secrets, billing, and external writes"
            loading="lazy"
          />
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <Eyebrow>Existing-stack fit</Eyebrow>
            <h2>
              Test what the
              <br />
              <em>current gate misses.</em>
            </h2>
            <p>
              Generic evaluation dashboards overlap with established tools. The
              proposed wedge is independent failure analysis for costly,
              long-horizon workflows, evaluated against an agreed task
              criterion.
            </p>
          </div>
          <div className="stack-comparison">
            <article>
              <h3>LangSmith</h3>
              <p>Existing datasets, evaluation, and tracing workflows.</p>
              <a
                href="https://docs.langchain.com/langsmith/evaluation"
                target="_blank"
                rel="noreferrer"
              >
                Official evaluation documentation ↗
              </a>
            </article>
            <article>
              <h3>Braintrust</h3>
              <p>Existing online scoring for production traces.</p>
              <a
                href="https://www.braintrust.dev/docs/evaluate/score-online"
                target="_blank"
                rel="noreferrer"
              >
                Official scoring documentation ↗
              </a>
            </article>
            <p className="caption">
              Factual comparators, not partners or endorsements.
            </p>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
export function Evaluation() {
  const [condition, setCondition] = useState("timeout");
  const count = runSeeds.filter((s) => outcome(s, condition) === 1).length;
  return (
    <>
      <PageHero
        tag="Evaluation example / methodology, not customer proof"
        title={
          <>
            Keep the denominator.
            <br />
            <em>Keep the uncertainty.</em>
          </>
        }
        copy="Eight seeded fixture runs show a controlled example of task variation. They do not establish production reliability or customer impact."
      />
      <section className="section">
        <div className="container split">
          <div>
            <Eyebrow>Exactly-one-draft criterion</Eyebrow>
            <h2>
              Change the condition.
              <br />
              <em>Inspect the run set.</em>
            </h2>
            <div className="segmented">
              {["normal", "timeout", "delay"].map((x) => (
                <button
                  key={x}
                  aria-pressed={condition === x}
                  onClick={() => setCondition(x)}
                >
                  {x}
                </button>
              ))}
            </div>
            <div className="run-counts">
              <span>
                <b>8 / 8</b>Baseline met
              </span>
              <span>
                <b>{count} / 8</b>Candidate met
              </span>
            </div>
            <p>
              No sampled confidence interval is claimed for these deliberately
              constructed fixtures.
            </p>
          </div>
          <div className="evaluation-matrix">
            <Boundary />
            <div className="dot-grid">
              {runSeeds.map((s) => (
                <div key={s}>
                  <span
                    className={outcome(s, condition) === 2 ? "fail" : "pass"}
                  >
                    {outcome(s, condition) === 2 ? "×" : "✓"}
                  </span>
                  <b>{s}</b>
                  <small>
                    {outcome(s, condition)} draft
                    {outcome(s, condition) === 2 ? "s" : ""}
                  </small>
                </div>
              ))}
            </div>
            <p className="caption">
              Candidate v0.9 / fixed synthetic seeds / {condition}
            </p>
          </div>
        </div>
      </section>
      <section className="section grid">
        <div className="container split">
          <div>
            <Eyebrow>Duration ≠ task success</Eyebrow>
            <h2>
              One measure
              <br />
              <em>cannot tell the whole story.</em>
            </h2>
            <p>
              The dot plot reports illustrative duration while color and text
              identify duplicate artifacts. The task criterion remains
              independent.
            </p>
            <details>
              <summary>Read duration data</summary>
              <table>
                <thead>
                  <tr>
                    <th>Seed</th>
                    <th>Seconds</th>
                    <th>Drafts / timeout</th>
                  </tr>
                </thead>
                <tbody>
                  {runSeeds.map((s, i) => (
                    <tr key={s}>
                      <th>{s}</th>
                      <td>{durations[i]}</td>
                      <td>{outcome(s, "timeout")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </details>
          </div>
          <DiagramAsset
            src="/brand/charts/run-duration.svg"
            alt="8 synthetic durations, 82–132 seconds; seeds 104 and 108 create duplicates"
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Eyebrow>Proposed buyer experiment</Eyebrow>
          <h2>
            Evidence that earns
            <br />
            <em>the next step.</em>
          </h2>
          <div className="three-columns">
            {[
              [
                "01",
                "Agree",
                "Take approved, anonymized traces from three teams. Build a small jointly approved test set.",
              ],
              [
                "02",
                "Compare",
                "Blind-compare the readout against each team’s existing LangSmith, Braintrust, or internal gate.",
              ],
              [
                "03",
                "Commit",
                "Advance with an independently confirmed missed regression and an engineering lead’s funded trial or real gate commitment.",
              ],
            ].map(([n, t, c]) => (
              <article className="reveal" key={n}>
                <span className="large-index">{n}</span>
                <h3>{t}</h3>
                <p>{c}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
export function Pricing() {
  return (
    <>
      <PageHero
        visual="pricing"
        tag="Commercial model / Test hypotheses"
        title={
          <>
            Start small.
            <br />
            <em>Measure what matters.</em>
          </>
        }
        copy="These amounts are research hypotheses, not accepted prices or current offers. No payment, subscription, or active checkout is available."
        env="sage"
      />
      <section id="page-content" className="section">
        <div className="container pricing-grid">
          <article className="pricing-card study">
            <Eyebrow>Proposed initial engagement</Eyebrow>
            <h2>Replay study</h2>
            <div className="price">
              $3,000<span>/ four weeks</span>
            </div>
            <span className="badge info">Pricing test hypothesis</span>
            <p>
              A bounded investigation around one agreed workflow, a task-level
              criterion, and an engineering owner.
            </p>
            <ul>
              <li>Approved, redacted fixture set</li>
              <li>Baseline and candidate comparison</li>
              <li>Controlled failure conditions</li>
              <li>Human-reviewed evidence readout</li>
              <li>Recommendation on next gate experiment</li>
            </ul>
            <Button to="/request-demo">Scope a replay study</Button>
          </article>
          <article className="pricing-card">
            <Eyebrow>Possible expansion</Eyebrow>
            <h2>Recurring lab</h2>
            <div className="price">
              $1,200<span>/ month + metered runs</span>
            </div>
            <span className="badge info">Pricing test hypothesis</span>
            <p>
              Recurring team QA, CI governance, and production sampling are
              possible directions after meaningful demand is confirmed.
            </p>
            <ul>
              <li>Unit of value still to be interviewed</li>
              <li>Runs, workload, or seats not settled</li>
              <li>Evaluation costs need scoping</li>
              <li>No usage limits or SLA established</li>
            </ul>
            <Button secondary to="/evaluation">
              See the validation threshold
            </Button>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <h2>
            Price follows
            <br />
            <em>an owned question.</em>
          </h2>
          <FAQ
            items={[
              [
                "What is included in the $3,000 hypothesis?",
                "A proposed four-week, bounded replay study. Exact workload, run count, data handling, and deliverables need agreement; it is not an active offer.",
              ],
              [
                "Who owns the trial?",
                "The AI engineering lead owns the release criterion; QA/evaluation champions the evidence; the engineering VP owns the trial budget.",
              ],
              [
                "When would recurring usage make sense?",
                "After the study confirms incremental value beyond existing tools and a team commits a real gate or funds a trial. Recurring value and frequency remain unverified.",
              ],
            ]}
          />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
export function Request({ contact = false }) {
  return (
    <section className="section request-page">
      <div className="container request-layout">
        <div className="request-copy">
          <Eyebrow>
            {contact
              ? "Contact / Start a conversation"
              : "Start with one workflow"}
          </Eyebrow>
          <h1>
            {contact ? (
              <>
                Let’s make the
                <br />
                <em>question concrete.</em>
              </>
            ) : (
              <>
                Bring a question.
                <br />
                <em>Leave with a test.</em>
              </>
            )}
          </h1>
          <p>
            Proposed replay studies for teams shipping multi-step agents with an
            existing trace corpus and release cadence.
          </p>
          <ol className="study-steps">
            <li>
              <b>Agree on the criterion.</b>
              <span>One expected task artifact. One named reviewer.</span>
            </li>
            <li>
              <b>Choose controlled conditions.</b>
              <span>Approved fixtures, aligned versions, and fixed seeds.</span>
            </li>
            <li>
              <b>Compare with your current gate.</b>
              <span>
                Look for independently confirmed incremental evidence.
              </span>
            </li>
          </ol>
          <div className="scope-note">
            <Icon name="evidence" />
            <div>
              <b>Keep sensitive data out.</b>
              <p>
                No traces, contracts, credentials, or customer records in the
                public form. Sharing approved fixtures needs a separate process.
              </p>
            </div>
          </div>
          <p className="caption">
            No delivery service or contact mailbox connected in this preview.
          </p>
        </div>
        <StudyForm contact={contact} />
      </div>
    </section>
  );
}
export function SignIn() {
  const [email, setEmail] = useState(""),
    [error, setError] = useState(""),
    [complete, setComplete] = useState(false);
  const ref = useRef();
  return (
    <section className="section auth-page">
      <div className="container split">
        <div>
          <Eyebrow>The reliability workbench</Eyebrow>
          <h1>
            Back to
            <br />
            the <em>evidence.</em>
          </h1>
          <p>
            Follow the failing transition. Compare the artifact. Make the
            release decision explicit.
          </p>
          <TraceDiagram fault />
          <span className="caption">DEMO — SYNTHETIC DATA / PO-204</span>
        </div>
        <div className="form-card">
          <Eyebrow>Access / Interface preview</Eyebrow>
          <h2>Sign in to FlakeMap</h2>
          <p>
            Preview the secure-link flow. No account is created and no email is
            sent.
          </p>
          {!complete ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                  setError("Enter a valid email, such as qa@harbor.example.");
                  ref.current.focus();
                  return;
                }
                setError("");
                setComplete(true);
              }}
              noValidate
            >
              <label>
                Work email
                <input
                  ref={ref}
                  type="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="qa@harbor.example"
                  aria-invalid={!!error}
                  aria-describedby="access-error"
                />
              </label>
              <small>Use a fictional address for this local preview.</small>
              {error && (
                <p className="error" id="access-error" role="alert">
                  {error}
                </p>
              )}
              <Button type="submit">Preview access link</Button>
            </form>
          ) : (
            <div className="success" role="status">
              <h3>Your access-link preview is ready.</h3>
              <p>
                No email was sent. Continue without authentication to the
                synthetic workspace.
              </p>
              <Button to="/demo">Open demo workspace</Button>
              <button
                className="text-button"
                onClick={() => {
                  setComplete(false);
                  setEmail("");
                }}
              >
                Use a different email
              </button>
            </div>
          )}
          <details>
            <summary>Need access?</summary>
            <p>
              The access form is not connected to an identity service. Explore
              the demo freely or scope a proposed study.
            </p>
            <Link to="/request-demo">Request a replay study ↗</Link>
          </details>
          <p className="caption">
            No passwords or SSO connected.{" "}
            <Link to="/legal/privacy">Privacy & scope ↗</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
export function Demo() {
  return (
    <section className="section demo-page">
      <div className="container wide">
        <Eyebrow>Demo workspace / Synthetic fixtures only</Eyebrow>
        <div className="section-heading">
          <h1>
            Inspect the run.
            <br />
            <em>Keep the evidence.</em>
          </h1>
          <p>
            Choose a condition and seed, review the resulting artifacts, and
            prepare a mock gate report. This workspace never calls external
            models, tools, or CI.
          </p>
        </div>
        <Dashboard />
        <div className="demo-help">
          <article>
            <Icon name="seed" />
            <h3>Begin with seed 104.</h3>
            <p>Candidate v0.9 under a stock timeout creates two drafts.</p>
          </article>
          <article>
            <Icon name="compare" />
            <h3>Switch to baseline.</h3>
            <p>
              Baseline v0.8 suppresses the duplicate under the same fixture.
            </p>
          </article>
          <article>
            <Icon name="review" />
            <h3>Record a rationale.</h3>
            <p>
              Review changes a local mock state; the report labels it
              explicitly.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
export function Company() {
  return (
    <>
      <PageHero
        visual="company"
        tag="Company / The FlakeMap approach"
        title={
          <>
            Clearer evidence.
            <br />
            <em>More deliberate releases.</em>
          </>
        }
        copy="FlakeMap explores whether repeated task completion under controlled failure conditions can add value beyond existing evaluation tooling."
      />
      <section id="page-content" className="section warm">
        <div className="container split">
          <DiagramAsset
            src="/brand/diagrams/reviewer-journey.svg"
            alt="Reviewer journey from failure queue to evidence, a rubric decision, and a mock gate report"
          />
          <div>
            <Eyebrow>Our working thesis</Eyebrow>
            <h2>
              Release decisions
              <br />
              <em>deserve a traceable why.</em>
            </h2>
            <p>
              The mission is to make trace-derived scenarios, injected faults,
              and human adjudication actionable in release review.
            </p>
            <p>
              Our starting point is one workflow, one acceptance criterion, and
              a named reviewer. Work outward from the evidence each team can
              inspect and reproduce.
            </p>
            <Eyebrow>Company address</Eyebrow>
            <address className="company-address">
              2No. 47 Hoang Van Thu, Pleiku<br />
              Pleiku<br />
              Gia Lai<br />
              Vietnam
            </address>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Eyebrow>How the work is framed</Eyebrow>
          <div className="three-columns">
            {[
              [
                "Specific over aggregate",
                "Start with the exact task artifact and inspect the transition that changed it.",
              ],
              [
                "Reviewable over opaque",
                "Keep the condition, seed, source, and reviewer rationale together.",
              ],
              [
                "Evidence before expansion",
                "Confirm incremental value and a named buyer commitment before growing scope.",
              ],
            ].map(([t, p]) => (
              <article key={t} className="reveal">
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
export function Trust() {
  return (
    <>
      <PageHero
        tag="Trust & scope / Clear concept boundaries"
        title={
          <>
            A useful test starts
            <br />
            with <em>a visible boundary.</em>
          </>
        }
        copy="The local demo runs synthetic, deterministic fixtures. Production traces, tools, credentials, payments, and release systems remain outside it."
        env="sage"
      />
      <section className="section">
        <div className="container split">
          <div>
            <Eyebrow>Fixture-only preview</Eyebrow>
            <h2>
              Consent belongs
              <br />
              <em>before the source.</em>
            </h2>
            <p>
              An eventual study requires authorized, redacted fixtures. The
              public form asks whether trace sharing is approved and never
              accepts uploads.
            </p>
            <Button secondary to="/legal/privacy">
              Read privacy & scope
            </Button>
          </div>
          <DiagramAsset
            src="/brand/diagrams/study-boundary.svg"
            alt="Inside proposed study: approved fixture, stub replay, human review. Outside: production calls, secrets, billing, external writes."
          />
        </div>
      </section>
      <section className="section grid">
        <div className="container">
          <div className="trust-table">
            <table>
              <caption>Current implementation / boundaries</caption>
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Preview behavior</th>
                  <th>Before real operation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Data",
                    "Synthetic fixtures only",
                    "Approved sharing, redaction, and retention process",
                  ],
                  [
                    "Forms",
                    "Page-memory validation and review",
                    "Confirmed delivery and consent records",
                  ],
                  [
                    "Authentication",
                    "Secure-link interface preview",
                    "Identity provider and account recovery",
                  ],
                  [
                    "CI",
                    "Mock JSON report only",
                    "Explicitly authorized gate connection",
                  ],
                  [
                    "Analytics",
                    "Optional in-memory events only",
                    "Consent-aware service and server-side dedupe",
                  ],
                  [
                    "Security claims",
                    "No certifications claimed",
                    "Verified controls and accurate documentation",
                  ],
                ].map((r) => (
                  <tr key={r[0]}>
                    {r.map((c) => (
                      <td key={c}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
export function Resources() {
  return (
    <>
      <PageHero
        visual="resources"
        tag="Resources / Practical reliability notes"
        title={
          <>
            The details
            <br />
            <em>that change the decision.</em>
          </>
        }
        copy="Short explainers on task artifacts, repeatable fixtures, and human-owned release criteria. All examples here are synthetic."
      />
      <section id="page-content" className="section">
        <div className="container resource-grid">
          {articles.map((a, i) => (
            <Link
              key={a.slug}
              to={`/resources/${a.slug}`}
              className="resource-card reveal"
            >
              <div className={`resource-art art-${i}`}>
                <Icon name={["evidence", "seed", "gate"][i]} size={64} />
                <span>0{i + 1}</span>
              </div>
              <Eyebrow>
                {a.tag} / {a.read}
              </Eyebrow>
              <h2>{a.title}</h2>
              <p>{a.intro}</p>
              <span className="text-link">Read the note ↗</span>
            </Link>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
export function Article() {
  const { slug } = useParams(),
    a = articles.find((a) => a.slug === slug);
  if (!a) return <NotFound />;
  return (
    <article className="article-page">
      <div className="container reading">
        <Link className="text-link" to="/resources">
          ← All resources
        </Link>
        <Eyebrow>
          {a.tag} / {a.read}
        </Eyebrow>
        <h1>{a.title}</h1>
        <p className="article-lead">{a.intro}</p>
        <div className="article-boundary">
          FlakeMap research note / Synthetic example / 8 October 2026
        </div>
        {a.paragraphs.map(([h, p]) => (
          <section key={h} className="reveal">
            <h2>{h}</h2>
            <p>{p}</p>
          </section>
        ))}
        <TraceDiagram fault />
        <Button to="/demo">Inspect the example</Button>
      </div>
    </article>
  );
}
export function Legal({ terms = false }) {
  const [consent, setConsent] = useState(getAnalyticsConsent),
    [events, setEvents] = useState([]);
  return (
    <section className="section legal-page">
      <div className="container reading">
        <Eyebrow>Draft prototype notice / 8 October 2026</Eyebrow>
        <h1>
          {terms ? (
            <>
              Preview <em>terms.</em>
            </>
          ) : (
            <>
              A clear <em>data boundary.</em>
            </>
          )}
        </h1>
        <p>
          This notice describes the FlakeMap website and synthetic demo. It is
          not a final operating-company policy or a legal agreement.
        </p>
        {(terms
          ? [
              [
                "Concept status",
                "All five modules, prices, workflows, and integration directions are research hypotheses. No purchase, subscription, account, or service contract is formed by this site.",
              ],
              [
                "Demo use",
                "The demo uses fictional records and deterministic stub artifacts. It is provided to inspect a product concept and does not approve real releases or operate external systems.",
              ],
              [
                "Launch requirements",
                "The legal operator, approved terms, liability provisions, privacy process, support details, and service boundaries need review before any operating product launch.",
              ],
            ]
          : [
              [
                "What the forms do",
                "Entries stay in page memory for validation and review. No request is sent, no lead is stored, and no authentication occurs. Reset, route exit, or reload discards entries. Do not enter sensitive records.",
              ],
              [
                "What the demo contains",
                "All artifacts, names, counts, and timestamps are fictional fixtures. Reports are mock JSON. There are no external model calls, billing actions, tool writes, or CI changes.",
              ],
              [
                "Optional preview instrumentation",
                "Analytics is off by default. You can opt into an in-memory event demonstration below. It stores event names, timestamps, and limited UTMs only; no form entries or personal identifiers. There is no analytics endpoint, browser storage, or server dedupe. Revoking consent clears these events.",
              ],
              [
                "Before launch",
                "Approve the legal operator, privacy contact, processor list, retention period, deletion route, consent records, and analytics implementation before collecting real leads. No contact address or certification is invented here.",
              ],
            ]
        ).map(([h, p]) => (
          <section key={h}>
            <h2>{h}</h2>
            <p>{p}</p>
          </section>
        ))}
        {!terms && (
          <div className="scope-note analytics-preview">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  setAnalyticsConsent(e.target.checked);
                  setEvents([]);
                }}
              />
              <span>Allow in-memory preview events for this tab session.</span>
            </label>
            <button
              className="button secondary"
              onClick={() => setEvents(getEvents())}
            >
              Inspect preview events ↗
            </button>
            <pre aria-live="polite">
              {events.length
                ? JSON.stringify(events, null, 2)
                : "No consented events in this preview."}
            </pre>
          </div>
        )}
        <Button to="/request-demo">Return to study preview</Button>
      </div>
    </section>
  );
}
export function NotFound() {
  return (
    <section className="section">
      <div className="container reading">
        <Eyebrow>404 / Path not mapped</Eyebrow>
        <h1>
          A different
          <br />
          <em>way forward.</em>
        </h1>
        <p>
          This route is not available. Return to the workflow story or open the
          synthetic workspace.
        </p>
        <div className="hero-actions">
          <Button to="/">Back to FlakeMap</Button>
          <Button to="/demo" secondary>
            Explore the demo
          </Button>
        </div>
      </div>
    </section>
  );
}
