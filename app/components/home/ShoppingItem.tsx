import { ShoppingItemProps } from "@/app/types/shopping";
import { X } from "lucide-react";

export default function ShoppingItem({
  name,
  price,
  quantity,
}: ShoppingItemProps) {
  return (
    <li className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition shadow-sm">
      <div className="flex items-center gap-3">
        <input type="checkbox" className="w-5 h-5 accent-blue-600" />
        <div className="flex flex-col">
          <span className="text-gray-700 font-medium">{name}</span>
          <span className="text-gray-500 text-sm">
            ${price} x {quantity} = ${price * quantity}
          </span>
        </div>
      </div>
      <button className="text-red-500 font-bold hover:text-red-700 transition">
        <X size={28} />
      </button>
    </li>
  );
}
