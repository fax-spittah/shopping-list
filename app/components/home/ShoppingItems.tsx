import { ShoppingItemProps } from "@/app/types/shopping";
import ShoppingItem from "./ShoppingItem";

const ShoppingList: ShoppingItemProps[] = [
  { name: "Item 1", price: 10, quantity: 2 },
  { name: "Item 2", price: 5, quantity: 1 },
  { name: "Item 3", price: 15, quantity: 3 },
];

export default function ShoppingItems() {
  return (
    <div>
      <h2>Shopping Items</h2>
      <ul>
        {ShoppingList.map((item, index) => (
          <ShoppingItem
            key={index}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </ul>
    </div>
  );
}
