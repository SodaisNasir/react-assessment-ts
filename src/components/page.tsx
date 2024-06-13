import { useEffect } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Page({ title, children }: Props): JSX.Element {
  useEffect(() => {
    document.title = title + " - React Assessment";

    return () => {
      document.title = "React Assessment";
    };
  }, []);

  return <>{children}</>;
}
