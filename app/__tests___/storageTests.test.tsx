import { createList } from "../utils/storageUtils";

describe("createList edge cases", () => {
  test("createList creates a new shopping list even if no list name is proveded", () => {
    // const initialBudget = 50;

    const newList = createList(initialBudget);
    expect(newList).toHaveProperty("id");
    expect(newList.listName).toBe("My Shopping List");
    expect(newList.budget).toBe(initialBudget);
    expect(newList.items).toEqual([]);
  });

  test("createList creates a new shopping list with given budget and name", () => {
    const initialBudget = 100;
    const listName = "Weekly Groceries";

    const newList = createList(initialBudget, listName);
    expect(newList).toHaveProperty("id");
    expect(newList.listName).toBe(listName);
    expect(newList.budget).toBe(initialBudget);
    expect(newList.items).toEqual([]);
  });
});
