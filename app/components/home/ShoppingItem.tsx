import { ShoppingItemProps } from "@/app/types/shopping";

export default function ShoppingItem({
  name,
  price,
  quantity,
}: ShoppingItemProps) {
  return (
    <ul className="space-y-3">
      <li className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition">
        <div className="flex items-center gap-3">
          <input type="checkbox" className="w-5 h-5 accent-blue-600" />
          <span className="text-gray-700 font-medium">
            {name} - ${price} - Qty: {quantity} = ${price * quantity}
          </span>
        </div>
        <button className="text-red-500 font-bold hover:text-red-700 transition">
          X
        </button>
      </li>
    </ul>
  );
}
