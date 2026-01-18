"use client";
import { fetchCurrentListFromStorage } from "@/app/utils/storageUtils";
import AddItemComponent from "../../components/home/AddItemComponent";
import BottomSectionComponent from "../../components/home/BottomSectionComponent";
import DisplayBudgentStatusComponent from "../../components/home/DisplayBudgentStatusComponent";
import ShoppingItems from "../../components/home/ShoppingItems";
import { useNavigateToWelcomePage } from "@/app/utils/utils";
import { useEffect, useState } from "react";
import { ShoppingItemProps } from "@/app/types/shopping";

export default function HomePage() {
  const [isItemAdded, setIsItemAdded] = useState<boolean>(false);
  const [shoppingList, setShoppingList] = useState<ShoppingItemProps[]>([]);
  const navigateToWelcome = useNavigateToWelcomePage();

  useEffect(() => {
    if (fetchCurrentListFromStorage() === null) {
      navigateToWelcome();
    }
  });

  useEffect(() => {
    async function fetchList() {
      const list = await fetchCurrentListFromStorage();
      if (list) {
        setShoppingList(list.items);
      }
    }
    fetchList();
  }, [isItemAdded]);

  return (
    <div className="flex flex-col justify-between gap-6">
      <h1 className="text-2xl text-center font-bold">Shopping List</h1>
      <DisplayBudgentStatusComponent />
      <AddItemComponent
        isItemAdded={isItemAdded}
        setIsItemAdded={setIsItemAdded}
      />
      <ShoppingItems />
      <BottomSectionComponent />
    </div>
  );
}
