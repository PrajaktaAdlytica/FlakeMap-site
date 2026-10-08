export const modules = [
  {
    slug: "trust-desk",
    name: "Trust Desk",
    verb: "Shape the scenario.",
    short: "From approved traces to explicit test fixtures.",
    icon: "scenario",
    env: "sage",
    number: "01",
    label: "Source → scenario",
    question: "What are we actually testing?",
    description:
      "Turn an approved, redacted workflow fixture into a scenario with a named input, an expected artifact, and a human-readable criterion.",
    input: "Approved, redacted trace JSON",
    output: "A scoped scenario and source record",
    features: [
      [
        "Keep the source attached",
        "Retain fixture IDs, redaction notes, and source references alongside the scenario.",
      ],
      [
        "Define the artifact",
        "Write the task-level criterion before running variants: exactly one purchase-order draft, with the original order reference.",
      ],
      [
        "Set the boundary",
        "Separate allowed stub responses from excluded production calls. Trace access must be approved.",
      ],
    ],
    steps: [
      "Approve a redacted fixture",
      "Identify the expected artifact",
      "Write the task rubric",
      "Prepare a replay scenario",
    ],
    asset: "diagrams/scenario-provenance.svg",
  },
  {
    slug: "trust-review",
    name: "Trust Review",
    verb: "Repeat with intention.",
    short: "Seeded runs with a visible denominator.",
    icon: "seed",
    env: "grid",
    number: "02",
    label: "Scenario → run set",
    question: "Does the task survive repeated runs?",
    description:
      "Compare baseline and candidate against the same small, seeded run set. Keep the condition, seed, criterion, and artifact together.",
    input: "A scenario, two versions, and fixed seeds",
    output: "A run matrix with explicit outcomes",
    features: [
      [
        "See the denominator",
        "Show 6 of 8 criterion passes rather than an unqualified quality score.",
      ],
      [
        "Inspect each seed",
        "Open a run to see the tool condition and the exact resulting artifact.",
      ],
      [
        "Compare like with like",
        "Keep seeds and conditions aligned between the two versions. Fixture determinism does not promise deterministic external models.",
      ],
    ],
    steps: [
      "Choose baseline and candidate",
      "Fix the seed set",
      "Replay controlled variants",
      "Inspect each artifact",
    ],
    asset: "charts/seed-condition-map.svg",
  },
  {
    slug: "trust-proof",
    name: "Trust Proof",
    verb: "Test the interruption.",
    short: "Timeouts, delays, and stale tool responses.",
    icon: "fault",
    env: "night",
    number: "03",
    label: "Run → failure transition",
    question: "Which transition changes the outcome?",
    description:
      "Change one tool condition and follow its consequence across retries and delayed responses. Isolate the point at which the candidate diverges.",
    input: "A stubbed tool call and selected fault",
    output: "An event timeline and failing transition",
    features: [
      [
        "Inject one condition",
        "Model a timeout, a delayed response, a 429, or a stale payload within an agreed fixture.",
      ],
      [
        "Follow event order",
        "Distinguish a retry from the late original response; both can reach artifact creation.",
      ],
      [
        "Explain the failure",
        "Link the changed transition to the duplicate draft instead of showing an unexplained red score.",
      ],
    ],
    steps: [
      "Select the tool transition",
      "Choose an injected condition",
      "Follow retry and late response",
      "Link the outcome to evidence",
    ],
    asset: "diagrams/timeout-branch.svg",
  },
  {
    slug: "trust-signal",
    name: "Trust Signal",
    verb: "Make the gate explicit.",
    short: "Acceptance criteria connected to human review.",
    icon: "gate",
    env: "ice",
    number: "04",
    label: "Criterion → decision",
    question: "What is allowed to reach release?",
    description:
      "Translate task-level acceptance criteria and reviewer decisions into a proposed gate report. Keep the decision owner and the blocking evidence visible.",
    input: "Artifact criteria and reviewed exceptions",
    output: "A proposed, exportable gate report",
    features: [
      [
        "Use task criteria",
        "A successful tool response does not substitute for the correct task artifact.",
      ],
      [
        "Record the decision",
        "A reviewer supplies the rationale. Scroll position never approves a release.",
      ],
      [
        "Prepare a report",
        "Export a mock report with version, condition, seeds, denominator, and review. No real CI connection is implied.",
      ],
    ],
    steps: [
      "Define the release criterion",
      "Review the exception",
      "Record the rationale",
      "Export a mock gate report",
    ],
    asset: "diagrams/reviewer-journey.svg",
  },
  {
    slug: "trust-report",
    name: "Trust Report",
    verb: "Keep the why.",
    short: "Failure clusters, evidence, and adjudication.",
    icon: "evidence",
    env: "warm",
    number: "05",
    label: "Exception → evidence",
    question: "Can another engineer understand the decision?",
    description:
      "Group related failures and keep the artifact, source, reviewer, and explanation together. Make disagreement and unresolved evidence visible.",
    input: "Failing runs and their source artifacts",
    output: "A human-reviewed failure record",
    features: [
      [
        "Cluster by mechanism",
        "Relate duplicate-draft cases to the same retry transition, while retaining individual run evidence.",
      ],
      [
        "Preserve the context",
        "Keep timestamps, ownership, criterion, and source references legible.",
      ],
      [
        "Leave a review trail",
        "Separate pending, blocked, reviewed, and resolved mock states rather than silently marking every item complete.",
      ],
    ],
    steps: [
      "Open a failure cluster",
      "Compare linked artifacts",
      "Add human adjudication",
      "Carry evidence into the report",
    ],
    asset: "illustrations/evidence-archive.webp",
  },
];
export const runSeeds = [101, 102, 103, 104, 105, 106, 107, 108];
export function outcome(seed, condition, version = "candidate") {
  return version === "candidate" &&
    ((condition === "timeout" && [104, 108].includes(seed)) ||
      (condition === "delay" && seed === 108))
    ? 2
    : 1;
}
export const durations = [82, 91, 87, 118, 96, 103, 89, 132];
export const articles = [
  {
    slug: "the-artifact-is-the-test",
    title: "The artifact is the test.",
    tag: "Acceptance criteria",
    read: "4 min read",
    intro:
      "A tool call can succeed while the workflow produces the wrong result.",
    paragraphs: [
      [
        "Start at the end",
        "For the PO-204 fixture, the expected outcome is exactly one purchase-order draft preserving the order reference. That is more useful than asking whether each tool returned successfully.",
      ],
      [
        "Make the failure observable",
        "The timeout example creates PO-204-A from the retry and PO-204-B from the late original response. Each tool path can look locally successful while the task fails.",
      ],
      [
        "Keep the rubric reviewable",
        "Write the criterion in language an engineer and reviewer can both inspect. Attach the artifacts and retain the source fixture. This article describes a synthetic example, not a measured customer outcome.",
      ],
    ],
  },
  {
    slug: "a-seed-is-not-a-guarantee",
    title: "A seed is not a guarantee.",
    tag: "Replay methodology",
    read: "3 min read",
    intro:
      "Repeatable fixtures and deterministic live agents are different promises.",
    paragraphs: [
      [
        "Control what the lab controls",
        "The local preview selects fixed stub responses using an explicit seed. Repeating seed 104 under the timeout condition reproduces the same two-draft fixture.",
      ],
      [
        "Name what remains variable",
        "Live model versions, tool responses, changing data, and timing can introduce variation outside a fixture. A seed by itself does not remove those sources.",
      ],
      [
        "Report the denominator",
        "Show the run set and condition. Eight fixed illustrative runs are not a production reliability estimate, and they do not justify a confidence claim.",
      ],
    ],
  },
  {
    slug: "designing-a-release-gate",
    title: "A gate needs an owner.",
    tag: "Human review",
    read: "4 min read",
    intro:
      "A release decision needs a criterion, evidence, and someone responsible for the call.",
    paragraphs: [
      [
        "Agree before you test",
        "The engineering owner defines the task artifact and the acceptable failure condition with the QA champion. Define what a meaningful regression would look like.",
      ],
      [
        "Review the exception",
        "A reviewer compares the observed artifact with the criterion, records a rationale, and keeps unresolved evidence visible. The prototype only changes a mock state.",
      ],
      [
        "Validate incremental value",
        "Compare the readout with the existing eval stack. Advance the study only when a meaningful missed regression is independently confirmed and an engineering lead commits a real gate or funded trial.",
      ],
    ],
  },
];
