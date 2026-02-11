import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function InfoBottom (){
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="text-white bg-slate-600 h-10 w-10 dark:bg-white dark:text-black fixed bottom-5 right-5 rounded-full"
      >
        {dark ? <FiMoon size="32" /> : <FiSun size="32" />}
      </button>
    </div>
  );
}