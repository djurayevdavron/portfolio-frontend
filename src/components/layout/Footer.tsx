import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-6 text-center text-sm text-[var(--portfolio-text-muted)]">
      © {new Date().getFullYear()} Davron Jurayev. {t("footer")}
    </footer>
  );
};
export default Footer;
