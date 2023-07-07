import { itemFactory } from "./Item";

export const checkout = (itemsList: string): number => {
  const reduction = itemsList
    .split("")
    .reduce((acc, itemChar) => acc + itemFactory(itemChar).getPrice(), 0);

  const A_counter = itemsList.split("").filter((item) => item === "A").length;
  const B_counter = itemsList.split("").filter((item) => item === "B").length;

  const total =
    reduction - Math.trunc(A_counter / 3) * 20 - Math.trunc(B_counter / 3) * 15;

  return total;
};
