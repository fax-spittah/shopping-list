import { ShoppingItemProps } from "@/app/types/shopping";
import { X } from "lucide-react";

export default function ShoppingItem({
  name,
  price,
  quantity,
}: ShoppingItemProps) {
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <input type="checkbox" className="w-5 h-5" />
        <div className="flex flex-col">
          <span>{name}</span>
          <span>
            ${price} x {quantity} = ${price * quantity}
          </span>
        </div>
      </div>
      <button>
        <X size={28} />
      </button>
    </li>
  );
}
