import React from "react";
import TypeIt from "typeit-react";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import Button from "../components/Button";
import Card from "../components/Card";
import HeroImg2 from "../assets/images/landing2.png";
import Foto from "../assets/images/foto.jpeg";
import webDev from "../assets/images/webDev.png";
import editing from "../assets/images/editing.png";
import writing from "../assets/images/writing.png";
import { Link } from "react-router-dom";

export const Index = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <DotLoader color={"#38bdf8"} loading={loading} size={150} />
        </div>
      ) : (
        <div className="space-y-20 tablet:space-y-24">
          {/* Hero Content */}
          <section className="relative grid grid-cols-1 tablet:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-10 tablet:gap-16 items-center">
            {/* Dekorasi background di belakang hero */}
            <div className="pointer-events-none absolute -z-10 inset-0">
              <div className="hidden tablet:block absolute -top-10 -left-10 w-40 h-40 rounded-full bg-sky-200/60 blur-3xl" />
              <div className="hidden tablet:block absolute bottom-0 right-0 w-52 h-52 rounded-full bg-indigo-200/60 blur-3xl" />
            </div>

            <div className="order-2 tablet:order-1 text-center tablet:text-left space-y-5 tablet:space-y-6">
              <h1
                className="text-3xl tablet:text-4xl laptop:text-5xl font-semibold leading-tight"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                <span className="block text-slate-900 dark:text-slate-100 text-base tablet:text-lg font-light mb-1">
                  Hi, I&apos;m
                </span>
                <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                  Ilham Dika Permana
                </span>
              </h1>
              <TypeIt
                className="text-base tablet:text-xl font-medium text-slate-700 dark:text-slate-100"
                options={{ speed: 50, loop: false }}
              >
                Building clean, modern experiences for the web.
              </TypeIt>
              <p
                className="text-sm tablet:text-base text-slate-600 dark:text-white/80 max-w-xl mx-auto tablet:mx-0"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                I craft digital products that are fast, responsive, and delightful to use from landing pages to full-stack web applications for real businesses.
              </p>
              <div
                className="flex flex-col tablet:flex-row gap-4 tablet:gap-5 justify-center tablet:justify-start pt-2"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="180"
              >
                <Button className="w-full tablet:w-44 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white border-none">
                  <Link to="/portfolio">View Portfolio</Link>
                </Button>
                <Button className="w-full tablet:w-44 bg-transparent border border-sky-400/60 text-sky-600 dark:text-sky-200 hover:bg-sky-500/10">
                  <Link to="/about">About Me</Link>
                </Button>
              </div>
            </div>

            <div className="order-1 tablet:order-2 flex justify-center" data-aos="zoom-in" data-aos-duration="900">
              <div className="relative w-56 h-56 tablet:w-64 tablet:h-64">
                <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-sky-500/60 via-cyan-400/50 to-indigo-500/60 blur-2xl opacity-80 animate-float-slow" />
                <div className="relative w-full h-full glass-panel rounded-full flex items-center justify-center">
                  <img
                    src={Foto}
                    alt="Ilham Dika Permana"
                    className="rounded-full w-40 h-40 tablet:w-48 tablet:h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Services cards */}
          <section className="space-y-8">
            <h2 className="text-slate-900 dark:text-white text-center text-2xl tablet:text-3xl font-semibold">
              What I love to build
            </h2>
            {/* layout agak abstrak di layar besar */}
            <div className="grid grid-cols-1 tablet:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] tablet:auto-rows-[minmax(0,1fr)] gap-5 tablet:gap-7 laptop:gap-8">
              <Card
                thumbnail={webDev}
                title={"Web Applications"}
                description={
                  "I design and build responsive web applications starting from clean UI layouts to reusable components, API integration, and optimization so they feel fast on any device."
                }
                href={"/portfolio"}
                compact
                className="tablet:row-span-2"
              />
              <Card
                thumbnail={editing}
                title={"Creative Editing"}
                description={`I enjoy editing photos and short videos to support digital content from simple color grading to arranging visuals that match the story and brand.`}
                href={"https://www.instagram.com/kittencutee_/"}
                target={"_blank"}
                compact
              />
              <Card
                thumbnail={writing}
                title={"Thoughtful Writing"}
                description={`I like to write ideas, notes, and short reflections that help me document my learning journey and turn complex topics into something easier to understand.`}
                href={"https://www.instagram.com/kittencutee_/"}
                target={"_blank"}
                compact
              />
            </div>
          </section>

          {/* About teaser */}
          <section className="flex justify-center">
            <div
              className="glass-panel px-6 py-6 tablet:px-8 tablet:py-10 max-w-2xl text-left"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-delay="150"
            >
              <p className="dark:text-white/90 text-sm tablet:text-base leading-relaxed">
                I am a fullstack web developer who is always motivated and able to work
                together in a team or individually. I enjoy turning ideas into functional,
                maintainable, and visually pleasing web experiences.
              </p>
              <p className="dark:text-white/80 text-sm tablet:text-base leading-relaxed mt-3">
                I&apos;m ambitious to keep learning modern technologies, improve my
                problem-solving skills, and grow from every project I work on.
              </p>
            </div>
          </section>

          {/* Writing section */}
          <section className="justify-center items-center py-16 tablet:py-24" id="writing">
            <h1
              className="dark:text-white text-center text-2xl tablet:text-3xl font-semibold"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              something I want to write about
            </h1>
            <p
              className="dark:text-white/80 text-center mt-7 max-w-3xl mx-auto text-sm tablet:text-base leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              “ I also want to continue learning and growing in technical skills related to
              my work, such as web programming. Web technologies continue to evolve rapidly,
              and by staying up-to-date and learning, I can take on new challenges in this
              field. I want to continue to improve my understanding of programming
              languages, frameworks, and related tools so that I can create innovative and
              efficient web solutions. Overall, the drive to grow and continually learn is
              important in achieving success in any field. By maintaining a passion for
              learning and identifying areas in which I would like to develop, I can
              improve my skills, gain new knowledge, and reach higher personal and
              professional goals. “
            </p>
          </section>
        </div>
      )}
    </>
  );
};

export default Index;
