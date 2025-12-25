import AppQualitiesComponent from "@/app/components/welcome/AppQualitiesComponent";
import CreateNewListComponent from "@/app/components/welcome/CreateNewListComponent";
import WelcomeUserComponent from "@/app/components/welcome/WelcomeUserComponent";

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-50">
      <WelcomeUserComponent />
      <CreateNewListComponent />
      <AppQualitiesComponent />
    </div>
  );
}
