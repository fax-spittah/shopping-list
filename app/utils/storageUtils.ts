import { ShoppingItemProps, ShoppingListProps } from "../types/shopping";
import { generateUniqueId } from "./utils";

export function createList(initialBudget: number, listName?: string) {
  const newList: ShoppingListProps = {
    id: generateUniqueId(),
    listName: listName ? listName : "My Shopping List",
    budget: initialBudget,
    items: [],
  };
  saveListToStorage(newList);
  return newList;
}

export function addItemToList(item: ShoppingItemProps) {
  const currentList = fetchCurrentListFromStorage();
  if (currentList) {
    currentList.items.push(item);
    saveListToStorage(currentList);
  }
}

function saveListToStorage(list: ShoppingListProps) {
  if (typeof window !== "undefined") {
    localStorage.setItem("shoppingLists", JSON.stringify([list]));
  }
}

export function fetchCurrentListFromStorage(): ShoppingListProps | null {
  if (typeof window !== "undefined") {
    const list = localStorage.getItem("shoppingLists");
    return list ? JSON.parse(list)[0] : null;
  }
  return null;
}
