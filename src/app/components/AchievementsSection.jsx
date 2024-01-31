"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "25",
    postfix: "+",
  },
  {
    metric: "Users",
    value: "100",
    postfix: "~",
  },
  {
    metric: "Solved DSA Problem",
    value: "400",
    postfix: "+",
  },
  {
    metric: "Years",
    value: "2",
  },
];

const AchievementsSection = () => {
  return (
    <div className="md:relative">
      <div className="py-5  px-4 xl:gap-16 sm:py-12 xl:px-16  ">
        <div className="sm:border-[#33353F] sm:border  rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
          {achievementsList.map((achievement, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
              >
                <h2 className="text-white text-4xl font-bold flex flex-row">
                  {achievement.prefix}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-white text-4xl font-bold"
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                  {achievement.postfix}
                </h2>
                <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-gray-700  h-16 items-center text-center flex text-white md:absolute -bottom-3 md:left-52 md:w-2/3 rounded-md">
        <p className="md:w-64 md:font-bold md:text-xl pl-4  font-serif">
          Coding Profile <ArrowRightIcon />
        </p>

        <div className="flex justify-evenly space-x-2 px-2   w-full">
          <Link
            href="https://auth.geeksforgeeks.org/user/abhishekbxr203"
            className="w-10 h-8  "
          >
            <Image width={50} height={50} src="/icons8-geeksforgeeks.svg" />
          </Link>
          <Link
            href="https://leetcode.com/abhishekbxr203/"
            className="w-10 h-8 "
          >
            <Image
              width={30}
              height={30}
              src="/icons8-level-up-your-coding-skills-and-quickly-land-a-job-48.png"
            />
          </Link>
          <Link
            href="https://www.codingninjas.com/studio/profile/abhishekbxr203"
            className="w-10 h-8  "
          >
            <Image
              width={50}
              height={50}
              src="/code_development_icon_194574.svg"
            />
          </Link>
          <Link href="https://github.com/abhishekkbxr" className="w-10 h-8 ">
            <Image width={50} height={50} src="/github-icon.svg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
