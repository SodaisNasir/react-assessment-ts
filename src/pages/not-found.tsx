import { Page } from "@/components";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Page title="404 Not found">
      <div className="w-full min-h-[calc(100dvh-50px)] flex flex-col items-center justify-center px-4 md:px-6 space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <FileIcon className="h-20 w-20 text-gray-400" />
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Page Not Found
          </h1>
          <p className="text-gray-500 max-w-[500px] text-center">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
        <Button onClick={() => navigate("/")}>Go to Homepage</Button>
      </div>
    </Page>
  );
}

function FileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}
