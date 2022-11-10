import React from "react";

const AboutCard = ({ divProps, quotes, percentage, year, img }) => {
  

  return (
    <div
      class={`absolute ${divProps} w-72 h-72 rounded-3xl max-[1070px]:relative max-[1070px]:translate-x-0  max-[1200px]:-translate-x-14  bg-white shadow-cards  max-[1070px]:left-0 flex justify-center items-center`}
    >
      <img
        src={`${img}`}
        className={`absolute rotate-12 ${
          year != "" ? "w-48 h-48 -right-16 -top-24" : "w-36 h-36 -right-10 -top-14"
        } 
        `}
      />
      {year != "" ? (
        <p class="relative p-5  translate-y-6 font-bold font-leaguespartan text-xl">
          {quotes} <br />
          <br />
          {year} <br />
          <span class="text-purple font-pacifico">{percentage}</span>
        </p>
      ) : (
        <p class="relative p-5  translate-y-8 font-bold font-leaguespartan text-xl">
          {quotes}
          <span class="text-purple">{percentage}</span>
        </p>
      )}
      <span class="absolute w-32 h-1 rounded-lg bg-purple top-10 left-5 animate-scaleLine"></span>
    </div>
  );
};

export default AboutCard;
