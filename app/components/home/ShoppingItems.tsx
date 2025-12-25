import { ShoppingItemProps } from "@/app/types/shopping";
import ShoppingItem from "./ShoppingItem";

const ShoppingList: ShoppingItemProps[] = [
  { name: "Item 1", price: 10, quantity: 2 },
  { name: "Item 2", price: 5, quantity: 1 },
  { name: "Item 3", price: 15, quantity: 3 },
];

export default function ShoppingItems() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6 max-w-md w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Shopping Items</h2>
      <ul className="space-y-3">
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
