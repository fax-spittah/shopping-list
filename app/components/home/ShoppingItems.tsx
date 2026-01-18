import { ShoppingItemProps } from "@/app/types/shopping";
import ShoppingItem from "./ShoppingItem";

interface ShoppingItemsProps {
  shoppingList: ShoppingItemProps[];
}

export default function ShoppingItems({ shoppingList }: ShoppingItemsProps) {
  return (
    <div>
      <h2>Shopping Items</h2>
      <ul>
        {shoppingList.map((item, index) => (
          <ShoppingItem
            key={index}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </ul>
    </div>
  );
}
