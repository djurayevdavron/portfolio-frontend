import { Moon, Sun } from "lucide-react";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleTheme } from "@/features/theme/themeSlice";

const ThemeToggle = () => {
  const dispatch = useAppDispatch();

  const mode = useAppSelector((state) => state.theme.mode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="
        cursor-pointer
        text-zinc-300
        transition-colors
        hover:text-violet-400
      "
    >
      {mode === "dark" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
