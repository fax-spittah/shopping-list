import { Minimize2 } from "lucide-react";

export default function AddItemComponent() {
  return (
    <div className="bg-white border-rounded w-[95%] mx-auto p-4 flex flex-col gap-3 shadow-md">
      <div className="flex justify-between items-center mb-2">
        <div className="flex-1 text-center">
          <h2 className="font-bold text-lg">Add New Item</h2>
        </div>
        <Minimize2 size={20} className="text-gray-500" />
      </div>
      <div className="flex flex-row justify-between">
        <label htmlFor="itemName" className="font-medium flex-1">
          Item Name:
        </label>
        <input
          id="itemName"
          type="text"
          placeholder="Item name"
          className="flex-2"
        />
      </div>
      <div className="flex flex-row justify-between">
        <label htmlFor="itemPrice" className="font-medium flex-1">
          Price:
        </label>
        <input
          id="itemPrice"
          type="number"
          placeholder="Price"
          className="flex-2"
        />
      </div>
      <div className="flex flex-row justify-between">
        <label htmlFor="itemQuantity" className="font-medium flex-1">
          Quantity:
        </label>
        <input
          id="itemQuantity"
          type="number"
          placeholder="Quantity"
          className="flex-2"
        />
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Add Item
      </button>
    </div>
  );
}
