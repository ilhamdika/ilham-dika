import moment from "moment-timezone";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function InfoBottom (){
    const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

    const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(
      () => tick(),
      1000
    );

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDateTime(new Date());
  }

  const formatDate = (date) => {
    const userTimeZone = moment.tz.guess();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false, timeZone: userTimeZone};
    return date.toLocaleString('id-ID', options);
  };

  return(
    <div>
        <button onClick={toggleTheme}
                        className="text-white bg-slate-600 h-10 w-10 dark:bg-white dark:text-black fixed bottom-5 right-5 rounded-full"
                        >
        {dark ? <FiMoon size="32"/> : <FiSun size="32"/> }
        </button>
        <div className="fixed bottom-5 left-5 bg-blue-200 p-2 rounded-xl">
            <p className="">
            {formatDate(dateTime)}
            </p>
        </div>
    </div>
  )
}