import test from "node:test";
import assert from "node:assert/strict";
import { runSeeds, outcome } from "../src/data.js";
test("agreed timeout regression appears on seeds 104 and 108 only", () => {
  assert.deepEqual(
    runSeeds.filter((seed) => outcome(seed, "timeout") > 1),
    [104, 108],
  );
});
test("delay reproduces only the late seed, while normal never duplicates", () => {
  assert.equal(outcome(104, "delay"), 1);
  assert.equal(outcome(108, "delay"), 2);
  assert.ok(runSeeds.every((seed) => outcome(seed, "normal") === 1));
});
test("baseline suppresses duplicate artifacts across every demonstrated condition", () => {
  for (const condition of ["normal", "timeout", "delay"])
    assert.ok(
      runSeeds.every((seed) => outcome(seed, condition, "baseline") === 1),
    );
});
