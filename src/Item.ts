import { A } from "./A";
import { B } from "./B";
import { C } from "./C";
import { D } from "./D";

export interface Item {
  getPrice(): number;
}

export function itemFactory(itemChar: string): Item {
  if (itemChar === "A") return new A();
  if (itemChar === "B") return new B();
  if (itemChar === "C") return new C();
  if (itemChar === "D") return new D();
  throw new Error("Unknown item");
}
