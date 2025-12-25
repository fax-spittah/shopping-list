import { Button } from "@/components/ui/button";
import { Check, MoveUpRight } from "lucide-react";

export default function AppQualitiesComponent() {
  return (
    <div className="bg-white rounded-xl p-6 mt-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">
        Why BudgetBuddy?
      </h2>
      <ul className="space-y-2">
        <li className="flex items-center">
          <Check color="#16A34A" className="mr-2" />
          <span className="text-gray-700">
            Track your expenses effortlessly
          </span>
        </li>
        <li className="flex items-center">
          <Check color="#16A34A" className="mr-2" />
          <span className="text-gray-700">Get warned before you overspend</span>
        </li>
        <li className="flex items-center">
          <Check color="#16A34A" className="mr-2" />
          <span className="text-gray-700">
            Set and manage your budget effectively
          </span>
        </li>
      </ul>
      <Button
        variant="outline"
        className="mt-4 flex items-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-100"
      >
        Learn More <MoveUpRight size={16} />
      </Button>
    </div>
  );
}
