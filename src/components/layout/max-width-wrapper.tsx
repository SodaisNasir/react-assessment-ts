import { cn } from "@/lib/utils";

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
};

export default function MaxWidthWrapper({ children, className, as }: Props) {
  const Element = as || "div";
  return (
    <Element className={cn("w-full max-w-7xl mx-auto", className)}>
      {children}
    </Element>
  );
}
