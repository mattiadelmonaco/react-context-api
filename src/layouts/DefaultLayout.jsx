import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { AlertProvider } from "../context/AlertContext";

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
          <Outlet />
        </main>
      </AlertProvider>
      <Footer />
    </>
  );
}
