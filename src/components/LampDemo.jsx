"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 bg-gradient-to-br from-red-200 to-red-400 py-2 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-6xl"
      >
        العمل معكم شرف لنا
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden bg-red-900 w-full rounded-md z-0",
        "min-h-[350px]", // shorter height
        className
      )}
    >
      <div className="relative flex w-full items-center justify-center isolate z-0">
        {/* Left glow */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "26rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-44 overflow-visible w-[26rem] bg-gradient-conic from-red-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-red-900 h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-32 h-[100%] left-0 bg-red-900 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right glow */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "26rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-44 w-[26rem] bg-gradient-conic from-transparent via-transparent to-red-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-32 h-[100%] right-0 bg-red-900 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-red-900 h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Background blur layers */}
        <div className="absolute top-1/2 h-40 w-full translate-y-10 scale-x-150 bg-red-900 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-40 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-28 w-[24rem] -translate-y-1/2 rounded-full bg-red-500 opacity-50 blur-3xl"></div>

        {/* Inner glow */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-28 w-56 -translate-y-[5rem] rounded-full bg-red-400 blur-2xl"
        ></motion.div>

        {/* Horizontal line */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "26rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[26rem] -translate-y-[6rem] bg-red-400"
        ></motion.div>

        {/* Top background mask */}
        <div className="absolute inset-auto z-40 h-36 w-full -translate-y-[11rem] bg-red-900"></div>
      </div>

      {/* Text container - moved up slightly to reveal lamp */}
      <div className="relative z-50 flex -translate-y-10 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
