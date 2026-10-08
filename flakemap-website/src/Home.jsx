import React, { useState } from "react";
import { Link } from "react-router-dom";
import { modules } from "./data";
import { DemoStats, CustomerStories } from "./ProofSections";
import {
  Eyebrow,
  Button,
  Icon,
  Artifact,
  TraceDiagram,
  ModuleGraphic,
  Dashboard,
  FAQ,
  FinalCTA,
  Boundary,
  EvidenceFlip,
} from "./components";
export default function Home({ onReplayIntro }) {
  const [step, setStep] = useState(0),
    [stack, setStack] = useState("langsmith");
  return (
    <>
      <section className="hero">
        <div className="hero-art" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-topline">
            <span className="concept-pill">
              <i />
              Agent workflow reliability
            </span>
            <span className="micro-note">
              SAME WORKFLOWS.
              <br />
              CLEARER OUTCOMES.
            </span>
          </div>
          <h1>
            Every path has
            <br />
            <em>a breaking point.</em>
          </h1>
          <p className="hero-description">
            Find the failing step in long-horizon agent workflows before
            release. Seeded replay, controlled tool faults, and human-reviewed
            evidence.
          </p>
          <div className="hero-actions">
            <Button to="/demo">Explore the demo</Button>
            <a className="button secondary" href="#story">
              Follow the workflow <span>↓</span>
            </a>
          </div>
          <button className="entry-replay" onClick={onReplayIntro}>
            Replay the introduction
          </button>
          <div className="hero-path" aria-label="Workflow steps">
            {["Order lookup", "Stock check", "PO draft"].map((x, i) => (
              <button
                key={x}
                onClick={() => setStep(i)}
                className={`path-stop stop-${i} ${step === i ? "active" : ""}`}
                aria-pressed={step === i}
              >
                <span className="pin-point" />
                <span>{x}</span>
                <small>
                  {
                    [
                      "01 / Input",
                      "02 / Tool transition",
                      "03 / Task artifact",
                    ][i]
                  }
                </small>
              </button>
            ))}
          </div>
          <div className="hero-bottom">
            <span>01 / FOLLOW ONE WORKFLOW</span>
            <div className="hero-rule" />
            <p aria-live="polite">
              {
                [
                  "Begin with a fictional order, PO-204.",
                  "A stock timeout changes the retry path.",
                  "The criterion: exactly one draft.",
                ][step]
              }
            </p>
            <a href="#story" aria-label="Scroll to workflow story">
              ↓
            </a>
          </div>
        </div>
      </section>
      <div className="context-band container">
        <span className="eyebrow">Designed around the release decision</span>
        <p>
          For AI engineering leads and evaluation teams shipping multi-step
          agents.
        </p>
        <Link to="/problem">
          Why single-run passes can miss it <span>↗</span>
        </Link>
      </div>
      <section className="story" id="story">
        <div className="story-navigation">
          <span className="eyebrow">PO-204 / A synthetic replay</span>
          <div>
            {[
              "One passing run",
              "The interruption",
              "Repeat the test",
              "Review the gate",
            ].map((x, i) => (
              <button
                key={x}
                data-story-jump={i}
                aria-label={`Story chapter ${i + 1}: ${x}`}
              >
                <span>0{i + 1}</span>
                {x}
              </button>
            ))}
          </div>
          <a href="#product-suite" className="skip-story">
            Skip story ↓
          </a>
        </div>
        <div className="story-viewport">
          <div className="story-track">
            <article className="story-slide baseline">
              <div className="container story-layout">
                <div>
                  <Eyebrow>01 / One passing run</Eyebrow>
                  <h2>
                    The run passed.
                    <br />
                    <em>The task did, too.</em>
                  </h2>
                  <p>
                    A fictional purchase order travels through lookup, stock
                    check, and drafting. The baseline produces exactly one
                    draft.
                  </p>
                  <div className="criterion">
                    <Icon name="check" />
                    <span>
                      Acceptance criterion
                      <br />
                      <b>Exactly one draft per order.</b>
                    </span>
                  </div>
                </div>
                <div className="story-visual">
                  <span className="ghost-word" aria-hidden="true">
                    PASS
                  </span>
                  <TraceDiagram />
                  <Artifact origin="Stock response" />
                  <p className="visual-caption">
                    DEMO — SYNTHETIC DATA / Baseline v0.8
                  </p>
                </div>
              </div>
            </article>
            <article className="story-slide fault-slide">
              <div className="container story-layout">
                <div>
                  <Eyebrow>02 / Change one condition</Eyebrow>
                  <h2>
                    A timeout.
                    <br />A retry.
                    <br />
                    <em>Two drafts.</em>
                  </h2>
                  <p>
                    The retry completes. Then the late original response
                    completes, too. In the candidate, both paths create a draft.
                  </p>
                  <span className="badge fail">
                    Failing transition / duplicate artifact
                  </span>
                </div>
                <div className="story-visual">
                  <span className="ghost-word" aria-hidden="true">
                    RETRY
                  </span>
                  <div className="fault-callout">
                    <Icon name="timeout" />
                    <b>Injected stock timeout</b>
                    <span>Seed 104 / candidate v0.9</span>
                  </div>
                  <div className="branch-artifacts">
                    <Artifact />
                    <Artifact duplicate />
                  </div>
                  <p className="visual-caption">
                    DEMO — SYNTHETIC DATA / Candidate misses shared
                    deduplication
                  </p>
                </div>
              </div>
            </article>
            <article className="story-slide repeated">
              <div className="container story-layout">
                <div>
                  <Eyebrow>03 / Show the distribution</Eyebrow>
                  <h2>
                    One seed fails.
                    <br />
                    <em>What about the others?</em>
                  </h2>
                  <p>
                    Keep baseline, candidate, tool condition, and seed set
                    aligned. Under the timeout fixture, two of eight candidate
                    runs create duplicates.
                  </p>
                  <div className="run-counts">
                    <span>
                      <b>8 / 8</b>Baseline met
                    </span>
                    <span>
                      <b>6 / 8</b>Candidate met
                    </span>
                  </div>
                  <small>
                    Fixed synthetic fixtures; no production reliability
                    estimate.
                  </small>
                </div>
                <div className="story-visual">
                  <span className="ghost-word" aria-hidden="true">
                    REPLAY
                  </span>
                  <ModuleGraphic module={modules[1]} />
                  <p className="visual-caption">
                    DEMO — SYNTHETIC DATA / Seeds 101–108
                  </p>
                </div>
              </div>
            </article>
            <article className="story-slide gate-slide">
              <div className="container story-layout">
                <div>
                  <Eyebrow>04 / Keep human judgment in view</Eyebrow>
                  <h2>
                    Evidence first.
                    <br />
                    <em>Then the decision.</em>
                  </h2>
                  <p>
                    The reviewer links the two artifacts to the
                    exactly-one-draft criterion. A proposed gate carries that
                    rationale forward.
                  </p>
                  <Button to="/demo">Inspect and annotate</Button>
                </div>
                <div className="story-visual">
                  <span className="ghost-word" aria-hidden="true">
                    REVIEW
                  </span>
                  <ModuleGraphic module={modules[3]} />
                  <div className="review-note">
                    <b>Mira Chen / fictional reviewer</b>
                    <p>
                      “Both paths create an artifact. The task criterion fails.
                      Block the mock candidate gate.”
                    </p>
                  </div>
                  <p className="visual-caption">
                    DEMO — SYNTHETIC DATA / No real CI gate changed
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="suite section" id="product-suite">
        <div className="container">
          <div className="section-heading reveal">
            <div>
              <Eyebrow>02 / Five proposed modules. One evidence chain.</Eyebrow>
              <h2>
                Give each question
                <br />
                <em>its own instrument.</em>
              </h2>
            </div>
            <p>
              From a consented fixture to a reviewed release decision. Each
              module is a separate product direction to test, with the first
              pilot scoped to one.
            </p>
          </div>
          <div className="suite-grid">
            {modules.map((m) => (
              <Link
                to={`/products/${m.slug}`}
                className={`module-card ${m.env} reveal`}
                key={m.slug}
              >
                <div className="module-card-top">
                  <span>{m.number} / PROPOSED MODULE</span>
                  <Icon name={m.icon} />
                </div>
                <div className="module-media">
                  <ModuleGraphic module={m} />
                </div>
                <h3>FlakeMap {m.name}</h3>
                <p>{m.short}</p>
                <div className="module-card-bottom">
                  <span>{m.label}</span>
                  <span className="card-arrow">↗</span>
                </div>
              </Link>
            ))}
          </div>
          <Link className="text-link" to="/products">
            Explore the complete portfolio <span>→</span>
          </Link>
        </div>
      </section>
      <section className="diagnostic section">
        <div className="container diagnostic-layout">
          <div className="reveal">
            <Eyebrow>03 / Isolate the transition</Eyebrow>
            <h2>
              The error hides
              <br />
              <em>between the steps.</em>
            </h2>
            <p>
              Follow the tool interruption through event order and artifact
              creation. A passing response does not explain a failed task.
            </p>
            <Button to="/products/trust-proof" light>
              Explore Trust Proof
            </Button>
          </div>
          <div className="reveal">
            <EvidenceFlip />
            <p className="visual-caption">DEMO — SYNTHETIC DATA</p>
          </div>
        </div>
      </section>
      <section className="section evidence-section">
        <div className="container">
          <div className="section-heading reveal">
            <div>
              <Eyebrow>04 / The evidence workbench</Eyebrow>
              <h2>
                Now inspect
                <br />
                <em>what actually changed.</em>
              </h2>
            </div>
            <p>
              Choose a version, condition, and seed. Compare artifacts, record a
              mock review, and prepare a synthetic gate report.
            </p>
          </div>
          <Dashboard compact />
          <div className="below-workbench">
            <span>
              Explore this fixture without accounts, tool writes, or production
              calls.
            </span>
            <Link to="/demo">Open full workspace ↗</Link>
          </div>
        </div>
      </section>
      <section className="stack-fit section">
        <div className="container split">
          <div className="reveal">
            <Eyebrow>05 / Existing-stack fit</Eyebrow>
            <h2>
              Your eval stack.
              <br />
              <em>A more specific question.</em>
            </h2>
            <p>
              LangSmith and Braintrust already support evaluation workflows.
              FlakeMap’s proposed study tests incremental value in long-horizon
              failure analysis.
            </p>
            <Link className="text-link" to="/platform">
              See the proposed architecture →
            </Link>
          </div>
          <div className="stack-panel reveal">
            <div className="segmented" aria-label="Existing eval stack">
              {[
                ["langsmith", "LangSmith"],
                ["braintrust", "Braintrust"],
                ["internal", "Internal harness"],
              ].map(([v, l]) => (
                <button
                  key={v}
                  aria-pressed={stack === v}
                  onClick={() => setStack(v)}
                >
                  {l}
                </button>
              ))}
            </div>
            <div className="stack-path">
              <div>
                <Icon name="trace" />
                <b>
                  {stack === "langsmith"
                    ? "LangSmith"
                    : stack === "braintrust"
                      ? "Braintrust"
                      : "Your harness"}
                </b>
                <small>
                  {stack === "langsmith"
                    ? "Datasets, evaluators, trace context"
                    : stack === "braintrust"
                      ? "Production trace scoring and evals"
                      : "Existing fixtures and release checks"}
                </small>
              </div>
              <span>↓ approved, redacted fixture</span>
              <div>
                <Icon name="fault" />
                <b>FlakeMap study</b>
                <small>Fault condition → artifact → reviewer</small>
              </div>
            </div>
            <p className="caption">
              Proposed relationship; no live integration or endorsement.
            </p>
          </div>
        </div>
      </section>
      <section className="section study-summary">
        <div className="container split">
          <div className="reveal">
            <Eyebrow>06 / Validation before expansion</Eyebrow>
            <h2>
              Test the case.
              <br />
              <em>Then build the commitment.</em>
            </h2>
            <p>
              Start with a small, jointly approved replay set. Compare the
              findings with your current gate. Advance when a missed regression
              is independently confirmed and an engineering lead commits.
            </p>
            <Button to="/pricing">Explore the study model</Button>
          </div>
          <div className="study-card reveal">
            <span className="eyebrow">PROPOSED FOUR-WEEK STUDY</span>
            <div className="study-price">
              $3,000 <small>Test hypothesis</small>
            </div>
            <ul>
              <li>One agreed workflow and task criterion</li>
              <li>Approved fixture and controlled conditions</li>
              <li>Baseline / candidate evidence readout</li>
              <li>Named engineering owner and next decision</li>
            </ul>
            <p>
              Scope and pricing are agreed before a study. No active checkout.
            </p>
            <Link to="/request-demo">
              Request a replay study <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
      <DemoStats />
      <CustomerStories />
      <section className="section faq-section">
        <div className="container split">
          <div>
            <Eyebrow>Before you take the next step</Eyebrow>
            <h2>
              A few <em>clear answers.</em>
            </h2>
          </div>
          <FAQ
            items={[
              [
                "What can I try in the demo?",
                "The public workspace is an isolated synthetic demo. It replays fixed fixtures without connecting to production tools or CI. Contact us to discuss a scoped study.",
              ],
              [
                "How does this relate to existing eval tools?",
                "The proposed study layers a specific failure-analysis question onto your current process: does a controlled tool interruption change the final task artifact across repeated runs? Incremental value remains to be validated.",
              ],
              [
                "Can I upload traces here?",
                "No. Public forms do not accept traces or sensitive records. Any eventual fixture sharing needs explicit approval and a separate scoped process.",
              ],
              [
                "What makes a study worth continuing?",
                "A meaningful regression missed by the current gate is independently confirmed, and an engineering lead funds a trial or commits a release gate with owned success criteria.",
              ],
            ]}
          />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
