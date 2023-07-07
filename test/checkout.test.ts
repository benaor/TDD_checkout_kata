import { checkout } from "../src/checkout";

describe("checkout test", () => {
  it.each`
    checkoutValue | result
    ${""}         | ${0}
    ${"A"}        | ${50}
    ${"B"}        | ${30}
    ${"C"}        | ${20}
    ${"D"}        | ${15}
    ${"DD"}       | ${30}
    ${"ABCD"}     | ${115}
  `(
    `Should return $result when sending $checkoutValue`,
    ({ checkoutValue, result }) => {
      expect(checkout(checkoutValue)).toBe(result);
    }
  );

  it("Should throw an error when sending an invalid item", () => {
    expect(() => checkout("Z")).toThrow("Unknown item");
  });
});
