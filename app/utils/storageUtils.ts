import { ShoppingListProps } from "../types/shopping";

export default function createList(initialBudget: number, listName?: string) {
  const newList: ShoppingListProps = {
    id: generateUniqueId(),
    listName: listName ? listName : "My Shopping List",
    budget: initialBudget,
    items: [],
  };
  saveListToStorage(newList);
  return newList;
}

function generateUniqueId(): string {
  return "_" + Math.random().toString(36);
}

function saveListToStorage(list: ShoppingListProps) {
  localStorage.setItem("shoppingLists", JSON.stringify([list]));
}
