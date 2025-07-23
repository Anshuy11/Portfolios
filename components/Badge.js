import { ThemeColor } from "@/context/ThemeContext";
import { useContext } from "react";

const Badge = ({ title }) => {
      const { theme, ToggleFunc } = useContext(ThemeColor);
  return (
    <span className={    theme === "Light" ? "py-2 px-3 text-xs text-white   bg-gradient-to-r from-gray-700  to-black  rounded-full" :"py-2 px-3 text-xs text-black   bg-gradient-to-r from-gray-200  to-gray-300  rounded-full"}>
      {title}
    </span>
  );
};

export default Badge;
