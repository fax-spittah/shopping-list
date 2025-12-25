import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CreateNewListComponent() {
  return (
    <div className="bg-white rounded-xl p-6 mt-6 shadow-md max-w-md w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4">Start a New Shopping List</h2>
      <div className="flex flex-col gap-4">
        <div>
          <Label htmlFor="listName">List Name (optional):</Label>
          <Input type="text" id="listName" className="mt-1 w-full" />
        </div>
        <div>
          <Label htmlFor="initialBudget">Budget (required):</Label>
          <Input
            type="number"
            id="initialBudget"
            placeholder="Initial Budget"
            className="mt-1 w-full"
          />
        </div>
        <Button variant="outline" className="mt-2 w-full">
          Start budgeting
        </Button>
      </div>
    </div>
  );
}
