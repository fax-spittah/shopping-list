import { Button } from "@/components/ui/button";
import { Check, MoveUpRight } from "lucide-react";

export default function AppQualitiesComponent() {
  return (
    <>
      <div>
        <h2>Why BudgetBuddy?</h2>
        <Check color="green" style={{ display: "inline" }} />
        <span>Track your expenses effortlessly</span>
        <br />
        <Check color="green" style={{ display: "inline" }} />{" "}
        <span>Get warned before you overspend</span>
        <br />
        <Check color="green" style={{ display: "inline" }} />
        <span>Set and manage your budget effectively</span>
        <br />
      </div>
      <Button variant="outline">
        Learn More <MoveUpRight />
      </Button>
    </>
  );
}
