import { useMemo } from "react";
import { type Location, useLocation } from "react-router-dom";
import { navLinks } from "@/constants";

export default function usePageTitle(): { title: string; location: Location } {
    const location = useLocation();
    const title = useMemo(
        () =>
            navLinks.find((e) => e.path === location.pathname)?.label ||
            "React Assessment",
        [location.pathname]
    );

    return { title, location };
}