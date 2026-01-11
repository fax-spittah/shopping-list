"use client";
import { fetchCurrentListFromStorage } from "@/app/utils/storageUtils";
import AddItemComponent from "../../components/home/AddItemComponent";
import BottomSectionComponent from "../../components/home/BottomSectionComponent";
import DisplayBudgentStatusComponent from "../../components/home/DisplayBudgentStatusComponent";
import ShoppingItems from "../../components/home/ShoppingItems";
import { useNavigateToWelcomePage } from "@/app/utils/utils";
import { useEffect } from "react";

export default function HomePage() {
  const navigateToWelcome = useNavigateToWelcomePage();

  useEffect(() => {
    if (fetchCurrentListFromStorage() === null) {
      navigateToWelcome();
    }
  });

  return (
    <div className="flex flex-col justify-between gap-6">
      <h1 className="text-2xl text-center font-bold">Shopping List</h1>
      <DisplayBudgentStatusComponent />
      <AddItemComponent />
      <ShoppingItems />
      <BottomSectionComponent />
    </div>
  );
}
