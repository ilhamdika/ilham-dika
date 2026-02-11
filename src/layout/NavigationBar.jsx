import { useState, useEffect } from "react";
import { BsList } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

export default function NavigationBar({ text, click }) {
  const Menu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "About Me",
      link: "/about",
    },
  ];

  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`navbar ${visible ? "mobile:block mobile:relative" : "mobile:hidden"}`}>
      <div className="w-full mt-4">
        <div className="glass-panel border-slate-700/60 bg-slate-900/70 mobile:bg-slate-900/90 flex items-center justify-between py-3 tablet:py-3 px-4 tablet:px-8">
          <div className="text-2xl tablet:text-3xl cursor-pointer flex items-center">
            <Link
              to="/"
              className="bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent font-semibold tracking-wide"
            >
              MeIlham
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl tablet:hidden text-slate-100"
            aria-label="Toggle navigation"
          >
            {open ? <IoCloseSharp /> : <BsList />}
          </button>

          {/* Menu */}
          <ul
            className={`tablet:flex tablet:items-center tablet:pb-0 pb-4 absolute tablet:static tablet:z-auto z-[-1] left-0 w-full tablet:w-auto bg-slate-900/95 tablet:bg-transparent tablet:pl-0 pl-6 transition-all duration-500 ease-in rounded-3xl tablet:rounded-none ${
              open ? "top-14" : "top-[-400px]"
            }`}
          >
            {Menu.map((menu) => (
              <li
                key={menu.name}
                onClick={closeMenu}
                className="laptop:ml-8 text-base tablet:my-0 my-3 mr-6"
              >
                <NavLink
                  to={menu.link}
                  className={({ isActive }) =>
                    `nav-link-premium ${isActive ? "nav-link-premium--active" : ""}`
                  }
                  end={menu.link === "/"}
                >
                  {menu.name}
                </NavLink>
              </li>
            ))}

            {/* Theme toggle (desktop) */}
            <li className="tablet:ml-4 my-2 tablet:my-0">
              <button
                onClick={click}
                className="hidden tablet:inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-600 bg-slate-800/80 text-slate-100 shadow-md hover:bg-slate-700 transition"
                aria-label="Toggle theme"
              >
                {text}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}