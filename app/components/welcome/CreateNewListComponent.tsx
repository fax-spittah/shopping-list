import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CreateNewListComponent() {
  return (
    <>
      <div>
        <h2>Start a New Shopping List</h2>
        <Label htmlFor="listName">List Name (optional):</Label>
        <Input type="text" id="listName" />
        <br />
        <Label htmlFor="initialBudget">Budget (required):</Label>
        <Input
          type="number"
          id="initialBudget"
          placeholder="Initial Budget (optional)"
        />
        <br />
        <Button variant="outline">Start budgeting</Button>
      </div>
      <hr />
    </>
  );
}
