import Image from "next/image";
import React from "react";

const CountryCard = () => {
  return (
    <div className="rounded-t-brand font-basier group relative w-full grow cursor-pointer place-items-center overflow-hidden rounded-2xl border transition-all md:max-w-xl md:hover:shadow-lg">
      <div className="rounded-t-brand relative overflow-hidden">
        <Image
          alt="white metal bridge under blue sky during daytime"
          src={"/arab.jpeg"}
          width={150}
          height={150}
          decoding="async"
          data-nimg="future"
          className="rounded-t-brand h-[300px] w-full object-cover md:h-[280px] md:transition-all md:ease-in-out 2xl:h-[270px]"
        />
        <div className="absolute bottom-4 left-0 rounded-r-md bg-primarybg px-2.5 py-2 text-sm">
          <div className="mr-2 flex w-fit items-center gap-2 font-medium text-white">
            <svg
              className="hidden h-5 w-5 text-[#00f700]"
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 6V12M22 6H16M22 6L15 13C14.4548 13.5452 14.1821 13.8179 13.888 13.9636C13.3285 14.2409 12.6715 14.2409 12.112 13.9636C11.8179 13.8179 11.5452 13.5452 11 13V13C10.4547 12.4547 10.1821 12.1821 9.88799 12.0364C9.32844 11.7591 8.6715 11.7591 8.11195 12.0364C7.81785 12.1821 7.54522 12.4547 6.99995 13L2 17.9999"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
            <span className="text-white">53K+ Visas</span>
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-col px-2.5 pb-4 pt-2">
        <div className="flex flex-row items-center justify-between gap-2">
          <h3 className="font-basier text-lg font-semibold text-black">
            United Arab Emirates
          </h3>
          <span className="text-center text-base font-medium text-black">
            ₹7,450
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p>
            Get on{" "}
            <span className="text-primarybg font-bold">17 Nov, 3:59 PM</span>
          </p>
        </div>
      </div>
      <a
        className="absolute inset-0"
        href="/en-IN/apply-dubai-visa"
        aria-label="Apply for United Arab Emirates Visa"
      ></a>
    </div>
  );
};

export default CountryCard;
