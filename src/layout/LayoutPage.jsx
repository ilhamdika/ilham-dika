import NavigationBar from "./NavigationBar";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import InfoBottom from "./InfoBottom";

export default function LayoutPage({ children }) {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <div className="min-h-screen premium-gradient dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-black">
        {/* Navbar fixed di paling atas */}
        <div className="fixed top-0 left-0 w-full z-50">
          <div className="w-full mx-auto px-3 tablet:px-6 laptop:px-10">
            <NavigationBar text={dark ? <FiMoon /> : <FiSun />} click={toggleTheme} />
          </div>
        </div>

        {/* Wrapper konten */}
        <div className="w-full mx-auto px-3 tablet:px-6 laptop:px-10">
          <main className="pt-24 tablet:pt-28 pb-24">
            {children}
          </main>

          <InfoBottom />
        </div>
      </div>
    </>
  );
}