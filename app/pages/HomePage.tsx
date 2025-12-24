import AddItemComponent from "../components/AddItemComponent";
import BottomSectionComponent from "../components/BottomSectionComponent";
import DisplayBudgentStatusComponent from "../components/DisplayBudgentStatusComponent";
import SetBudgetComponent from "../components/SetBudgetComponent";
import ShoppingItems from "../components/ShoppingItems";

export default function HomePage() {
  return (
    <div>
      <h1>Shopping List</h1>
      <hr />
      <SetBudgetComponent />
      <hr />
      <DisplayBudgentStatusComponent />
      <hr />
      <AddItemComponent />
      <hr />
      <ShoppingItems />
      <hr />
      <BottomSectionComponent />
      <hr />
    </div>
  );
}
