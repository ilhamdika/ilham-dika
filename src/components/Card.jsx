import React from "react";
import { Link } from "react-router-dom";

export const Card = ({
  className = "",
  thumbnail,
  title,
  description,
  href,
  target,
  compact = false,
}) => {
  return (
    <div
      className={`glass-panel soft-hover-lift mr-0 ml-0 mobile:w-full mobile:my-4 px-4 py-6 tablet:px-6 tablet:py-8 rounded-3xl tablet:rounded-[2rem] ${className}`}
    >
      <Link to={href} target={target}>
        <img
          src={thumbnail}
          alt="Gambar"
          className={`mb-4 rounded-2xl transition-transform duration-500 ease-out hover:scale-105 ${
            compact
              ? "w-20 h-20 tablet:w-24 tablet:h-24 mx-auto object-contain"
              : "w-full mobile:h-58 mobile:w-72 mobile:mx-auto object-cover"
          }`}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        />
      </Link>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Link to={href} target={target}>
          <h3 className="text-xl tablet:text-2xl mb-2 dark:text-white font-semibold text-center tracking-wide transition duration-300 ease-in-out hover:text-sky-300">
            {title}
          </h3>
        </Link>
        <p className="dark:text-white/80 font-light text-center text-sm tablet:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;