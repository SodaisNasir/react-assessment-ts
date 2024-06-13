import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AlignJustifyIcon } from "lucide-react";
import { usePageTitle } from "@/hooks";
import { navLinks } from "@/constants";
import { ViteIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const { title, location } = usePageTitle();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname])
  

  return (
    <header className="border-b flex items-center">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="text-accent-700 hover:text-accent-800 text-sm border-r">
          <AlignJustifyIcon className="m-3" />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <img className="w-full max-w-10" src={ViteIcon} alt="vite logo" />
          </SheetHeader>

          <br />

          <Navlinks />
        </SheetContent>
      </Sheet>

      <h1 className="inline-block text-center mx-auto font-medium text-lg text-accent-700">
        {title}
      </h1>
    </header>
  );
}

function Navlinks() {
  return (
    <nav className="flex flex-col items-start space-y-3">
      {navLinks.map((link) => (
        <NavLink
          to={link.path}
          key={link.label}
          className={({ isActive }) =>
            cn(
              "flex items-center gap-2 text-base transition-colors duration-200",
              isActive
                ? "text-primary hover:text-primary-600 font-medium"
                : "text-accent hover:text-accent-600"
            )
          }
        >
          <link.Icon className="text-xl" />
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
