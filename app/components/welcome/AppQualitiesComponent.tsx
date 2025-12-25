import { Button } from "@/components/ui/button";
import { Check, MoveUpRight } from "lucide-react";

export default function AppQualitiesComponent() {
  return (
    <div className="bg-green-50 rounded-xl p-6 mt-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Why BudgetBuddy?</h2>
      <ul className="space-y-2">
        <li className="flex items-center">
          <Check color="green" className="mr-2" />
          <span>Track your expenses effortlessly</span>
        </li>
        <li className="flex items-center">
          <Check color="green" className="mr-2" />
          <span>Get warned before you overspend</span>
        </li>
        <li className="flex items-center">
          <Check color="green" className="mr-2" />
          <span>Set and manage your budget effectively</span>
        </li>
      </ul>
      <Button variant="outline" className="mt-4 flex items-center gap-2">
        Learn More <MoveUpRight size={16} />
      </Button>
    </div>
  );
}
