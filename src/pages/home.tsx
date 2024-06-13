import { Page } from "@/components";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const goToMedications = () => {
    navigate("/medications");
  };

  return (
    <Page title="Home">
      <main className="w-full min-h-[calc(100dvh-50px)] p-4 flex justify-center space-x-4">
        <Button onClick={goToMedications}>Yesterday</Button>
        <Button onClick={goToMedications}>Today</Button>
        <Button onClick={goToMedications}>Tomorrow</Button>
      </main>
    </Page>
  );
}
