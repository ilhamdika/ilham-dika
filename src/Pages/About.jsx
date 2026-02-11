import React from "react";
import { useState, useEffect } from "react";
import TypeIt from "typeit-react";
import { Link } from "react-router-dom";
import { DotLoader } from "react-spinners";
import HeroImg from "../assets/images/profile.jpeg";
import HeroImg2 from "../assets/images/landing2.png";
import GitHub from "../assets/images/github.png";
import Instagram from "../assets/images/instagram.png";
import Mail from "../assets/images/mail.png";
import Education from "../assets/images/graduate.png";
import LinkedIn from "../assets/images/linkedin.png";
import Css from "../assets/images/skills/css.png";
import Html from "../assets/images/skills/html.png";
import JavaScript from "../assets/images/skills/js.png";
import Laravel from "../assets/images/skills/laravel.png";
import ReactJs from "../assets/images/skills/react.png";
import Tailwind from "../assets/images/skills/tailwind.png";
import Bootstrap from "../assets/images/skills/bootstrap.png";
import Php from "../assets/images/skills/php.png";
import AOS from "aos";

export const About = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    AOS.init(); // Inisialisasi AOS
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <DotLoader color={"#38bdf8"} loading={loading} size={150} />
        </div>
      ) : (
        <div className="space-y-16 tablet:space-y-20">
          {/* Hero about */}
          <section className="glass-panel px-6 tablet:px-10 py-10 tablet:py-12 grid grid-cols-1 tablet:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] gap-10 items-center">
            <div className="flex justify-center">
              <div className="relative w-52 h-52 tablet:w-60 tablet:h-60">
                <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-sky-500/50 via-cyan-400/40 to-indigo-500/60 blur-2xl opacity-80 animate-float-slow" />
                <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-slate-900/80 border border-white/10">
                  <img
                    src={HeroImg}
                    alt="Profile Ilham Dika Permana"
                    className="rounded-full w-40 h-40 tablet:w-44 tablet:h-44 object-cover"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <TypeIt className="dark:text-white text-3xl tablet:text-4xl font-semibold">
                About me
              </TypeIt>
              <p className="dark:text-sky-200 text-sm uppercase tracking-[0.25em]">
                Fullstack Web Developer
              </p>
              <p
                className="dark:text-white/85 text-sm tablet:text-base leading-relaxed text-justify"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                I am a fullstack developer who is always motivated and able to work together
                in a team or individually. I enjoy turning briefs into digital products that
                feel modern, clean, and intuitive to use.
              </p>
              <p
                className="dark:text-white/80 text-sm tablet:text-base leading-relaxed text-justify"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                I&apos;m currently looking for opportunities as a web developer, and I&apos;m
                ambitious to keep learning and growing from every experience I have.
              </p>

              <div className="flex flex-wrap gap-3 pt-3">
                <Link to="https://www.github.com/ilhamdika" target="_blank">
                  <img
                    src={GitHub}
                    className="w-9 h-9 p-1.5 rounded-full bg-slate-900/80 border border-white/10 hover:bg-slate-800 transition"
                  />
                </Link>
                <Link to="https://www.instagram.com/ilham_dika/" target="_blank">
                  <img
                    src={Instagram}
                    className="w-9 h-9 p-1.5 rounded-full bg-slate-900/80 border border-white/10 hover:bg-slate-800 transition"
                  />
                </Link>
                <Link to={`mailto:ilham27dika@gmail.com`}>
                  <img
                    src={Mail}
                    className="w-9 h-9 p-1.5 rounded-full bg-slate-900/80 border border-white/10 hover:bg-slate-800 transition"
                  />
                </Link>
                <Link to={"https://www.linkedin.com/in/ilham-dika-permana/"} target="_blank">
                  <img
                    src={LinkedIn}
                    className="w-9 h-9 p-1.5 rounded-full bg-slate-900/80 border border-white/10 hover:bg-slate-800 transition"
                  />
                </Link>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="space-y-8">
            <h1 className="dark:text-white text-2xl tablet:text-3xl font-semibold text-center">
              My Skills
            </h1>

            <div className="flex flex-wrap justify-center gap-4 tablet:gap-6">
              <div
                className="glass-panel px-5 py-4 rounded-2xl flex flex-col items-center w-24 h-24 tablet:w-28 tablet:h-28"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img src={Html} className="w-10 h-10 tablet:w-12 tablet:h-12" />
                <span className="dark:text-white text-xs mt-2 font-light">HTML</span>
              </div>
              <div
                className="glass-panel px-5 py-4 rounded-2xl flex flex-col items-center w-24 h-24 tablet:w-28 tablet:h-28"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img src={Css} className="w-10 h-10 tablet:w-12 tablet:h-12" />
                <span className="dark:text-white text-xs mt-2 font-light">CSS</span>
              </div>
              <div
                className="glass-panel px-5 py-4 rounded-2xl flex flex-col items-center w-24 h-24 tablet:w-28 tablet:h-28"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img src={JavaScript} className="w-10 h-10 tablet:w-12 tablet:h-12" />
                <span className="dark:text-white text-xs mt-2 font-light">JavaScript</span>
              </div>
              <div
                className="glass-panel px-5 py-4 rounded-2xl flex flex-col items-center w-24 h-24 tablet:w-28 tablet:h-28"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img src={Php} className="w-10 h-10 tablet:w-12 tablet:h-12" />
                <span className="dark:text-white text-xs mt-2 font-light">PHP</span>
              </div>
              <div
                className="glass-panel px-5 py-4 rounded-2xl flex flex-col items-center w-24 h-24 tablet:w-28 tablet:h-28"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img src={ReactJs} className="w-10 h-10 tablet:w-12 tablet:h-12" />
                <span className="dark:text-white text-xs mt-2 font-light">React</span>
              </div>
              <div
                className="glass-panel px-5 py-4 rounded-2xl flex flex-col items-center w-24 h-24 tablet:w-28 tablet:h-28"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img src={Laravel} className="w-10 h-10 tablet:w-12 tablet:h-12" />
                <span className="dark:text-white text-xs mt-2 font-light">Laravel</span>
              </div>
              <div
                className="glass-panel px-5 py-4 rounded-2xl flex flex-col items-center w-24 h-24 tablet:w-28 tablet:h-28"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img src={Bootstrap} className="w-10 h-10 tablet:w-12 tablet:h-12" />
                <span className="dark:text-white text-xs mt-2 font-light">Bootstrap</span>
              </div>
              <div
                className="glass-panel px-5 py-4 rounded-2xl flex flex-col items-center w-24 h-24 tablet:w-28 tablet:h-28"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img src={Tailwind} className="w-10 h-10 tablet:w-12 tablet:h-12" />
                <span className="dark:text-white text-xs mt-2 font-light">Tailwind</span>
              </div>
            </div>
          </section>

          {/* <div className="mt-3">
            <h1 className="dark:text-white text-3xl font-bold text-center">Education</h1>
            <div className="flex justify-center items-center py-2">
                <div className="" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
                    <img src={Education} alt="IMG-20211017-123751" border="0" className='w-32 h-32 mx-auto bg-black rounded-3xl dark:bg-none'/>
                
                    <h1 className="dark:text-white justify-center text-center items-center flex text-3xl font-thin mt-2">
                        2018 - 2022
                    </h1>
                    <h1 className="dark:text-white justify-center text-center items-center flex text-3xl font-thin mt-2">
                        Bachelor of Computer Science
                    </h1>
                    <h1 className="dark:text-white justify-center text-center items-center flex text-3xl font-thin mt-2">
                        Muria Kudus University
                    </h1>
                    
                    
                </div>
            </div>
        </div> */}
        </div>
      )}
    </>
  );
};

export default About;
