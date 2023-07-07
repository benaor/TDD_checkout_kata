import { itemType } from "./Item";

export class Discount {
  constructor(
    private itemType: itemType,
    private quantity: number,
    private discount: number
  ) {}

  calculateDiscount(itemsList: string): number {
    const itemCounter = itemsList
      .split("")
      .filter((item) => item === this.itemType).length;

    return Math.trunc(itemCounter / this.quantity) * this.discount;
  }
}
