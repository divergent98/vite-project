import React from "react";
import styles from "../styles";
import { discount, firstImage } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
  
        <p className={`${styles.paragraph}`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
  
Welcome to <br className="sm:block hidden" />{" "}
          <span className="text-gradient">SynthAI</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Empowering Tomorrow's World with Intelligent Solutions that transcend conventional boundaries and propel humanity into a new era of innovation and progress.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={firstImage} alt="billing" className="relative z-[5] w-[80%] h-[80%]" />


    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
  );
};

export default Hero;
