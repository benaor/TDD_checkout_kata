import { checkout } from "../src/checkout";

describe("checkout test", () => {
  it("Should return 0 when no items are sent", () => {
    expect(checkout("")).toBe(0);
  });
});
