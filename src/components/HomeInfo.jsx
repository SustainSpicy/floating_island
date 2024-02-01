import React from "react";
import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="max-w-md bg-gray-800 shadow-2xl rounded-3xl py-4 px-8 text-white">
      <p className="font-medium sm:text-xl text-center mb-4">{text}</p>
      <Link
        to={link}
        className="p-2 ml-3 bg-gray-600 rounded-md hover:bg-gray-700"
      >
        {btnText}
        {/* <img src= alt="" /> */}
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center py-4 px-8 text-white mx-5 max-w-md bg-gray-800 shadow-2xl rounded-3xl p-4">
      Hi, I am <span className="font-semibold">Timi</span>
      👋 <br />A software engineer from Nigeria
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple project over the years, curious about the projects"
      link="/projects"
      btnText="Visit my porfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few ketstrokes away"
      link="/contact"
      btnText="Lets talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
