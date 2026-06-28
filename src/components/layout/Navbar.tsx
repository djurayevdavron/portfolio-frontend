import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const { t } = useTranslation();
  const navItems = [
    { name: t("home"), path: "/" },
    { name: t("about"), path: "/about" },
    { name: t("skills"), path: "/skills" },
    { name: t("projects"), path: "/projects" },
    { name: t("contact"), path: "/contact" },
  ];

  return (
    <header
      className="
fixed top-0 left-0 right-0 z-50
border-b border-[var(--portfolio-border)]
bg-[var(--portfolio-bg)]/80
backdrop-blur-xl
"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="
      flex h-12 w-12 items-center justify-center
      rounded-2xl
      border border-violet-500/30
      bg-gradient-to-br
      from-violet-600/20
      to-cyan-500/20
      text-2xl font-bold
      text-white
      shadow-[0_0_25px_rgba(147,51,234,0.35)]
      backdrop-blur-xl
    "
          >
            D
          </div>

          <div className="leading-none">
            <h1 className="text-2xl font-bold text-[var(--portfolio-text)]">
              JURAYEV
            </h1>

            <p className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-xs font-semibold tracking-[0.35em] text-transparent">
              DAVRON
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                text-lg font-semibold transition-all duration-300
                ${
                  isActive
                    ? "text-violet-400"
                    : "text-zinc-300 hover:text-cyan-400"
                }
              `
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <ThemeToggle />

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
