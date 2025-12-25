import CheckIcon from "@mui/icons-material/Check";

export default function AppQualitiesComponent() {
  return (
    <>
      <div>
        <h2>Why BudgetBuddy?</h2>
        <CheckIcon color="success" />
        <span>Track your expenses effortlessly</span>
        <br />
        <CheckIcon color="success" />{" "}
        <span>Get warned before you overspend</span>
        <br />
        <CheckIcon color="success" />
        <span>Set and manage your budget effectively</span>
      </div>
      <button>Learn More</button>
    </>
  );
}
