import { AiFillMedicineBox } from "react-icons/ai";
import { GoHomeFill } from "react-icons/go";
import { NavLink } from "./types";

const navLinks: NavLink[] = [
    {
        label: "Home",
        path: "/",
        Icon: GoHomeFill,
    },
    {
        label: "Medications",
        path: "/medications",
        Icon: AiFillMedicineBox,
    },
]

export { navLinks };