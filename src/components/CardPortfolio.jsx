import React from "react";
import { Link } from "react-router-dom";

export const CardPortfolio = ({ className = "", thumbnail, title, description, href }) => {
  return (
    <div
      className={`glass-panel soft-hover-lift mr-0 ml-0 my-4 mobile:w-full mobile:mx-auto overflow-hidden rounded-3xl tablet:rounded-[2rem] ${className}`}
    >
      <Link target="_blank" to={href}>
        <img
          src={thumbnail}
          alt="Gambar"
          className="w-full mb-4 p-5 mt-6 mobile:w-full mobile:px-3 rounded-3xl object-cover transition-transform duration-500 ease-out hover:scale-105"
        />
      </Link>
      <Link target="_blank" to={href}>
        <h3 className="text-2xl mb-1 dark:text-white font-semibold text-center tracking-wide">
          {title}
        </h3>
      </Link>
      <p className="dark:text-white/80 font-light text-center px-4 pb-5 text-sm tablet:text-base">
        {description}
      </p>
    </div>
  );
};
