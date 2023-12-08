import NavigationBar from "./NavigationBar"
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";


export default function LayoutPage ({children}){
    
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

    
    return(
        <>
        <div className="dark:bg-dark">
            <div className="mr-10 ml-10">
                {/* Navbar */}
                <div className="mobile:fixed top-0 left-0 w-full z-50">
                <NavigationBar
                text={dark ? <FiMoon/> : <FiSun/> }
                click={toggleTheme}
                
                
                />
                </div>

                {/* Konten */}
                <div>
                    <main className="dark:bg-dark">
                        {children}
                    </main>
                </div>
                <button onClick={toggleTheme}
                className="text-white bg-slate-600 h-10 w-10 dark:bg-white dark:text-black fixed bottom-5 right-5 rounded-full"
                >
                {dark ? <FiMoon size="32"/> : <FiSun size="32"/> }
            </button>
            </div>
        </div>
        </>
    )
}