import { createList } from "../utils/storageUtils";

test("createList creates a new shopping list with given budget and name", () => {
  const initialBudget = 100;
  const listName = "Weekly Groceries";

  const newList = createList(initialBudget, listName);
  expect(newList).toHaveProperty("id");
  expect(newList.listName).toBe(listName);
  expect(newList.budget).toBe(initialBudget);
  expect(newList.items).toEqual([]);
});
