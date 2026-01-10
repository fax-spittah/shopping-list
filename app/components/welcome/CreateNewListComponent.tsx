import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function CreateNewListComponent() {
  const [form, setForm] = useState({
    listName: "",
    initialBudget: "",
  });

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="bg-white rounded-xl p-6 mt-6 shadow-md max-w-md w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">
        Start a New Shopping List
      </h2>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <div>
          <Label htmlFor="listName">List Name (optional):</Label>
          <Input
            type="text"
            id="listName"
            className="mt-1 w-full"
            value={form.listName}
            onChange={(e) => setForm({ ...form, listName: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="initialBudget">Budget (required):</Label>
          <Input
            type="number"
            value={form.initialBudget}
            onChange={(e) =>
              setForm({ ...form, initialBudget: e.target.value })
            }
            id="initialBudget"
            placeholder="Initial Budget"
            className="mt-1 w-full"
          />
        </div>
        <a href="/pages/home">
          <Button
            variant="outline"
            className="mt-2 w-full border-blue-600 text-blue-600 hover:bg-blue-100"
            type="submit"
          >
            Start budgeting
          </Button>
        </a>
      </form>
    </div>
  );
}
