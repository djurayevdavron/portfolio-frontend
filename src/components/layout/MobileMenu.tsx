import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileMenu = () => {
  const { t } = useTranslation();

  const navItems = [
    { name: t("home"), path: "/" },
    { name: t("about"), path: "/about" },
    { name: t("skills"), path: "/skills" },
    { name: t("projects"), path: "/projects" },
    { name: t("contact"), path: "/contact" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="md:hidden text-[var(--portfolio-text)] hover:text-violet-400 transition-colors">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="
          w-[280px]
          border-l border-[var(--portfolio-border)]
          bg-[var(--portfolio-bg)]
          text-[var(--portfolio-text)]
          backdrop-blur-xl
        "
      >
        <nav className="mt-16 flex flex-col gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                  text-lg
                  font-semibold
                  transition-colors
                  ${
                    isActive
                      ? "text-violet-400"
                      : "text-[var(--portfolio-text)] hover:text-cyan-400"
                  }
                `
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;