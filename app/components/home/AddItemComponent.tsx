"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Minimize2 } from "lucide-react";
import { ShoppingItemProps } from "@/app/types/shopping";
import { addItemToList } from "@/app/utils/storageUtils";
import { generateUniqueId } from "@/app/utils/utils";

export default function AddItemComponent() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [toggleAddItemForm, setToggleAddItemForm] = useState<boolean>(false);
  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    checkFormFields();
    createAndAddListItem();
  }

  function checkFormFields() {
    if (!form.name || !form.price || !form.quantity) {
      setErrorMessage("Please fill in all fields");
      setShowErrorMessage(true);
    } else {
      setErrorMessage("");
      setShowErrorMessage(false);
    }
  }

  function clearForm() {
    setForm({
      name: "",
      price: "",
      quantity: "",
    });
    setErrorMessage("");
    setShowErrorMessage(false);
  }

  function toggleForm() {
    setToggleAddItemForm(!toggleAddItemForm);
  }

  function createAndAddListItem() {
    const newItem: ShoppingItemProps = {
      id: generateUniqueId(),
      name: form.name,
      price: Number(form.price),
      quantity: Number(form.quantity),
    };
    addItemToList(newItem);
  }

  return (
    <>
      <Button
        variant="outline"
        onClick={toggleForm}
        className={"w-[25%] ml-2 " + (toggleAddItemForm ? "hidden" : "block")}
      >
        Add Item
      </Button>

      <form
        className={
          "bg-white border-rounded w-[95%] mx-auto p-4 flex flex-col gap-3 shadow-md " +
          (toggleAddItemForm ? "block" : "hidden")
        }
        onSubmit={onSubmit}
      >
        <div className="flex justify-between items-center mb-2">
          <div className="flex-1 text-center">
            <h2 className="font-bold text-lg">Add New Item</h2>
          </div>
          <Minimize2 size={20} className="text-gray-500" onClick={toggleForm} />
        </div>
        <div className="flex flex-row justify-between items-center gap-2">
          <Label htmlFor="itemName" className="font-medium flex-1">
            Item Name:
          </Label>
          <Input
            id="itemName"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            type="text"
            placeholder="Item name"
            className="flex-2"
          />
        </div>
        <div className="flex flex-row justify-between items-center gap-2">
          <Label htmlFor="itemPrice" className="font-medium flex-1">
            Price:
          </Label>
          <Input
            id="itemPrice"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            type="number"
            placeholder="Price"
            className="flex-2"
          />
        </div>
        <div className="flex flex-row justify-between items-center gap-2">
          <Label htmlFor="itemQuantity" className="font-medium flex-1">
            Quantity:
          </Label>
          <Input
            id="itemQuantity"
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
            type="number"
            placeholder="Quantity"
            className="flex-2"
          />
        </div>
        {showErrorMessage && (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        )}
        <div className="flex flex-row justify-around">
          <Button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-[40%]"
          >
            Add Item
          </Button>

          <Button
            type="button"
            onClick={clearForm}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-[40%]"
          >
            Clear
          </Button>
        </div>
      </form>
    </>
  );
}
