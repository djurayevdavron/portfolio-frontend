import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import { useAppSelector } from "@/store/hooks";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const MainLayout = () => {
  const mode = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      mode === "dark"
    );
  }, [mode]);

  return (
    <div className="min-h-screen bg-[var(--portfolio-bg)] text-[var(--portfolio-text)]">
      <ScrollToTop />

      <Navbar />

      <main className="pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;