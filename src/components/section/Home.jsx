import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Button from "../common/Button.jsx";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#DAD7CD]">
      {/* {Container} */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#333333]">
          <span className="font-semibold">Hi, my name is</span>
        </p>
        <h1 className="text-3xl sm:text-6xl font-bold text-[#3A5A40]">
          Ilma Khoiruzzidan
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#3a5a40d5]">
          I'm a Front-end Developer.
        </h2>
        <p className="text-[#3a5a40d5] py-4 max-w-[700px]">
          I am interested in web development. I have experience of doing a
          wordpress development from my past internship. I will be seeking a new
          opportunity and be able to adapt to learn new skills and technology.
        </p>
        <div>
          <Button>
            View Work
            <HiArrowNarrowRight className="ml-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
