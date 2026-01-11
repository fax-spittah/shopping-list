"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createList } from "@/app/utils/storageUtils";

export default function CreateNewListComponent() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [form, setForm] = useState({
    listName: "",
    initialBudget: "",
  });
  const router = useRouter();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    checkFormFields();
    event.preventDefault();
  }

  function checkFormFields() {
    if (!form.initialBudget) {
      setErrorMessage("Please enter an initial budget");
      setShowErrorMessage(true);
    } else {
      setErrorMessage("");
      setShowErrorMessage(false);
      createList(Number(form.initialBudget), form.listName);
      router.push("/pages/home");
    }
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
            placeholder="Shopping List Name"
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
        {showErrorMessage && (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        )}
        <Button
          variant="outline"
          className="mt-2 w-full border-blue-600 text-blue-600 hover:bg-blue-100"
          type="submit"
        >
          Start budgeting
        </Button>
      </form>
    </div>
  );
}
