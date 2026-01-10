export interface ShoppingItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface ShoppingListProps {
  id: string;
  listName: string;
  budget: number;
  items: ShoppingItemProps[];
}
