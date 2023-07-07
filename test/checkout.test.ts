import { Discount } from "../src/Discount";
import { itemType } from "../src/Item";
import { Store } from "../src/checkout";

const discountA = new Discount(itemType.A, 3, 20);
const discountB = new Discount(itemType.B, 2, 15);

const store = new Store([discountA, discountB]);

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
      expect(store.checkout(checkoutValue)).toBe(result);
    }
  );

  it.each`
    checkoutValue | result
    ${"AAA"}      | ${130}
    ${"AAAAAAAA"} | ${360}
    ${"BBB"}      | ${75}
    ${"BBBBBBBB"} | ${180}
  `(
    "Should apply discount when we having $checkoutValue",
    ({ checkoutValue, result }) => {
      expect(store.checkout(checkoutValue)).toBe(result);
    }
  );

  it("Should throw an error when sending an invalid item", () => {
    expect(() => store.checkout("Z")).toThrow("Unknown item");
  });
});
