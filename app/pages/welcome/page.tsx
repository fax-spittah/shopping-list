import AppQualitiesComponent from "@/app/components/welcome/AppQualitiesComponent";
import CreateNewListComponent from "@/app/components/welcome/CreateNewListComponent";
import WelcomeUserComponent from "@/app/components/welcome/WelcomeUserComponent";

export default function WelcomePage() {
  return (
    <>
      <WelcomeUserComponent />
      <CreateNewListComponent />
      <AppQualitiesComponent />
    </>
  );
}
