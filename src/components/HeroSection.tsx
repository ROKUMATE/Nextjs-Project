"use client";
import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="p-4 relative z-10 w-full text-center">
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text bg-gradient-to-b text-transparent from-neutral-50 to-neutral-400 bg-opacity-50">
                    {" "}
                    Master the art of music{" "}
                </h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg text-center mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima alias delectus accusamus tempore nulla quasi ea
                    repudiandae. Error, praesentium placeat architecto
                    distinctio voluptatibus dignissimos nobis maxime quasi
                    dolores cum numquam?
                </p>
            </div>
            <div className="mt-4">
                <Link href={"/courses"} className="">
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                        Explore Courses
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;
