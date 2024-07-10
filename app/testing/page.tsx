"use client";
import HeaderBar from "@/components/common/HeaderBar";
import PcbAssemblyTab from "@/components/services/PcbAssemblyTab";
import TestingTab from "@/components/services/TestingTab";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  return (
    <section className="pt-[120px] lg:pt-[200px]">
      <div className="w-11/12 mx-auto">
        <div className="text-center pt-6">
          <p className="lg:text-[56px] text-3xl font-bold text-[#000000] lg:w-1/2 w-full mx-auto leading-[56px] mb-5">
            Testing
          </p>
          <p className="lg:text-2xl text-lg font-normal">
            Discover our expertise in PCB Design.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="w-11/12 mx-auto">
          <div className="my-10 w-3/4 mx-auto border-b"></div>
          <div className="my-20">
            <TestingTab />
          </div>
          <div className="my-10 w-3/4 mx-auto border-b"></div>
        </div>
      </div>
    </section>
  );
};

export default Page;
