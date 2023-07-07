import { Discount } from "./Discount";
import { itemFactory } from "./Item";

export class Store {
  constructor(private discountList: Discount[]) {}

  public checkout(itemsList: string): number {
    const total = this.calculateTotal(itemsList);
    const totalDiscount = this.calculateTotalDiscount(itemsList);

    return total - totalDiscount;
  }

  private calculateTotal = (itemsList: string): number =>
    itemsList
      .split("")
      .reduce((acc, itemChar) => acc + itemFactory(itemChar).getPrice(), 0);

  private calculateTotalDiscount = (itemsList: string): number =>
    this.discountList.reduce(
      (acc, discount) => acc + discount.calculateDiscount(itemsList),
      0
    );
}
