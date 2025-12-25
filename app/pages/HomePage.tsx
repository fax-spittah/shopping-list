import AddItemComponent from "../components/home/AddItemComponent";
import BottomSectionComponent from "../components/home/BottomSectionComponent";
import DisplayBudgentStatusComponent from "../components/home/DisplayBudgentStatusComponent";
import SetBudgetComponent from "../components/home/SetBudgetComponent";
import ShoppingItems from "../components/home/ShoppingItems";

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
