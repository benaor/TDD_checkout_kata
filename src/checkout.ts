import { itemFactory } from "./Item";

export const checkout = (itemsList: string): number =>
  itemsList
    .split("")
    .reduce((acc, itemChar) => acc + itemFactory(itemChar).getPrice(), 0);
