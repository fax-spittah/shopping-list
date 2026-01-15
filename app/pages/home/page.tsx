"use client";
import { fetchCurrentListFromStorage } from "@/app/utils/storageUtils";
import AddItemComponent from "../../components/home/AddItemComponent";
import BottomSectionComponent from "../../components/home/BottomSectionComponent";
import DisplayBudgentStatusComponent from "../../components/home/DisplayBudgentStatusComponent";
import ShoppingItems from "../../components/home/ShoppingItems";
import { useNavigateToWelcomePage } from "@/app/utils/utils";
import { useEffect } from "react";
import { ShoppingItemProps } from "@/app/types/shopping";

export default function HomePage() {
  const navigateToWelcome = useNavigateToWelcomePage();

  useEffect(() => {
    if (fetchCurrentListFromStorage() === null) {
      navigateToWelcome();
    }
  });

  const shoppingList: ShoppingItemProps[] = [
    { id: "1", name: "Item 1", price: 10, quantity: 2 },
    { id: "2", name: "Item 2", price: 5, quantity: 1 },
    { id: "3", name: "Item 3", price: 15, quantity: 3 },
  ];

  return (
    <div className="flex flex-col justify-between gap-6">
      <h1 className="text-2xl text-center font-bold">Shopping List</h1>
      <DisplayBudgentStatusComponent />
      <AddItemComponent />
      <ShoppingItems shoppingList={shoppingList} />
      <BottomSectionComponent />
    </div>
  );
}
