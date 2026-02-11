import React from "react";
import { CardPortfolio } from "../components/CardPortfolio";
import TypeIt from "typeit-react";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import Satpam from "../assets/images/portfolio/webSatpam.png";
import webMarketplace from "../assets/images/portfolio/webMarketplace.png";
import webFilm from "../assets/images/portfolio/webFilm.png";
import webTisera from "../assets/images/portfolio/webTisera.png";
import webYokulak from "../assets/images/portfolio/webYokulak.png";
import webTokokita from "../assets/images/portfolio/webTokokita.png";
import webPerpusKita from "../assets/images/portfolio/webPerpusKita.png";
import webTelemedicine from "../assets/images/portfolio/webTelemedicine.png";
import webQuran from "../assets/images/portfolio/webQuran.png";

export const Portfolio = () => {
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
        <div className="space-y-8 tablet:space-y-10">
          <div className="text-center space-y-3 pt-4">
            <TypeIt className="dark:text-white text-3xl tablet:text-4xl font-semibold">
              Portfolio
            </TypeIt>
            <h1 className="dark:text-white/80 text-sm tablet:text-base font-light">
              A curated collection of web products I&apos;ve helped design, build, or improve from government platforms to internal tools and personal projects.
            </h1>
          </div>
          <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 tablet:gap-8 my-4">
            {/* {[1,2,3,4,5,6,7].map(i=> (
                        <CardPortfolio className={'bg-slate-900 bg-opacity-50 rounded-xl'}
                        key={i}
                        thumbnail={'https://static.vecteezy.com/system/resources/previews/000/330/430/original/vector-pencil-line-black-icon.jpg'}
                        title={'Web Developer'}
                        description={'Create a website for information, business etc., which can be accessed digitally'}
                        />
                        ))} */}

            <CardPortfolio
              className="tablet:col-span-2 desktop:col-span-2 desktop:-mt-2"
              thumbnail={webTelemedicine}
              title={"KOMEN (konsultasi medis online)"}
              description={"National-scale telemedicine platform to support online medical consultations between patients and health facilities under the Indonesian Ministry of Health."}
              href={"https://komen.kemkes.go.id/"}
            />

            <CardPortfolio
              className="desktop:mt-6"
              thumbnail={webTisera}
              title={"Tisera"}
              description={"B2B marketplace that simplifies procurement and sales for government agencies and institutions, with structured catalogues and transaction flows."}
              href={"https://tisera.id/"}
            />

            <CardPortfolio
              className="desktop:-mt-4"
              thumbnail={webQuran}
              title={"Al-Qur'an"}
              description={"A modern web interface to read and explore the Al-Qur'an, designed with a clean layout for better focus and readability."}
              href={"https://quran-ivory-pi.vercel.app/"}
            />

            <CardPortfolio
              className="desktop:mt-4"
              thumbnail={webYokulak}
              title={"Yokulak"}
              description={"Wholesale e-commerce platform that helps small shop owners restock goods more easily and efficiently at competitive prices."}
              href={"https://yokulak.com/"}
            />

            <CardPortfolio
              className="desktop:-mt-2"
              thumbnail={webTokokita}
              title={"Tokokita"}
              description={"E-commerce experience for grocery shopping from home, connecting users with nearby stores and simplifying daily needs purchases."}
              href={"https://tokokita.co.id/"}
            />

            <CardPortfolio
              className="desktop:mt-6"
              thumbnail={webPerpusKita}
              title={"Perpus Kita"}
              description={"Library platform that brings book collections online, making it easier to discover, borrow, and manage digital and physical resources."}
              href={"https://web.perpuskita.id/"}
            />

            <CardPortfolio
              className="tablet:col-span-2 desktop:col-span-1"
              thumbnail={Satpam}
              title={"Web Satpam"}
              description={"Security management web application built with Laravel and React, using Tailwind CSS for a responsive UI to support guard scheduling and monitoring."}
              href={"https://dakaranusantara.com/"}
            />

            <CardPortfolio
              className={""}
              thumbnail={webFilm}
              title={"Web Film"}
              description={"Movie platform built with Laravel and React that integrates Midtrans payment gateway, allowing users to browse, purchase, and watch films online."}
              href={"https://github.com/ilhamdika/watch-film"}
            />

            <CardPortfolio
              className={""}
              thumbnail={webMarketplace}
              title={"Web Marketplace"}
              description={"Furniture marketplace developed with native PHP and Bootstrap, focusing on simple product listing, search, and transaction flows for small businesses."}
              href={"https://github.com/ilhamdika/marketplace-furniture"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
