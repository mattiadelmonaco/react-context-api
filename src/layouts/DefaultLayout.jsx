import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { AlertProvider } from "../context/AlertContext";
import { SearchBarProvider } from "../context/SearchBarContext";

export default function DefaultLayout() {
  const location = useLocation();
  return (
    <>
      <Header />
      <AlertProvider>
        <main
          className={
            location.pathname.startsWith("/posts-list") ? "bg-posts-list" : ""
          }
        >
          <SearchBarProvider>
            <Outlet />
          </SearchBarProvider>
        </main>
      </AlertProvider>
      <Footer />
    </>
  );
}
