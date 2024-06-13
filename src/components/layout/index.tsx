import { Outlet } from "react-router-dom";
import MaxWidthWrapper from "./max-width-wrapper";
import Navbar from "./navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export { Layout, MaxWidthWrapper }; 