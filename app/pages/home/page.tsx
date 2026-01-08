import AddItemComponent from "../../components/home/AddItemComponent";
import BottomSectionComponent from "../../components/home/BottomSectionComponent";
import DisplayBudgentStatusComponent from "../../components/home/DisplayBudgentStatusComponent";
import SetBudgetComponent from "../../components/home/SetBudgetComponent";
import ShoppingItems from "../../components/home/ShoppingItems";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-between gap-6">
      <h1 className="text-2xl text-center font-bold">Shopping List</h1>
      <SetBudgetComponent />
      <DisplayBudgentStatusComponent />
      <AddItemComponent />
      <ShoppingItems />
      <BottomSectionComponent />
    </div>
  );
}
