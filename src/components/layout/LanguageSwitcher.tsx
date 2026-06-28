import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer text-zinc-300 transition-colors hover:text-cyan-400">
          <Globe size={20} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="
    w-44
    border border-[var(--portfolio-border)]
    bg-[var(--portfolio-surface)]
    text-[var(--portfolio-text)]
    backdrop-blur-xl
  "
      >
        <DropdownMenuItem
          onClick={() => i18n.changeLanguage("uz")}
          className="
    cursor-pointer
    rounded-lg
    text-[var(--portfolio-text)]
    hover:bg-violet-500/10
    hover:text-cyan-400
  "
        >
          🇺🇿 O'zbek
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => i18n.changeLanguage("en")}
          className="
    cursor-pointer
    rounded-lg
    text-[var(--portfolio-text)]
    hover:bg-violet-500/10
    hover:text-cyan-400
  "
        >
          🇺🇸 English
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => i18n.changeLanguage("ru")}
          className="
    cursor-pointer
    rounded-lg
    text-[var(--portfolio-text)]
    hover:bg-violet-500/10
    hover:text-cyan-400
  "
        >
          🇷🇺 Русский
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
