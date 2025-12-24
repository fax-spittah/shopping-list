import AddItemComponent from "../components/AddItemComponent";
import DisplayBudgentStatusComponent from "../components/DisplayBudgentStatusComponent";
import SetBudgetComponent from "../components/SetBudgetComponent";

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
    </div>
  );
}
