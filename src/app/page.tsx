"use client";
import { getServerSession } from "next-auth";
import Image from "next/image";

// import arab from "";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CountryCard from "@/components/CountryCard";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { isHeroScrolled } from "@/atom/basic";

export default function Home() {
  // const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolled, setIsScrolled] = useAtom(isHeroScrolled);
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 180; // You can adjust this value
      if (isScrolled !== show) {
        setIsScrolled(show);
      }
    };

    // Attach the scroll listener to window
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up - remove the listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  console.log(isScrolled);
  return (
    <main className=" container-fluid font-basier flex-col gap-24 bg-white antialiased ">
      <section className="bg-primarybg relative w-full px-5 pb-6 pt-4 md:px-12 md:pb-20">
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-3 text-center text-lg font-semibold text-[#4EFF22]">
            99.2% visas on time
          </p>
          <h1 className="text-center text-3xl font-bold text-white md:text-5xl">
            Get Your Visa
            <br className="md:hidden" />
            on Time or On Us.
          </h1>
        </div>
      </section>
      <div className="sticky top-14 z-[9999] -mt-px-50 md:static">
        <div className="bg-primarybg mb-3 px-3 py-2 transition-all md:mb-0 md:py-0 rounded-b-2xl">
          <div className="sticky flex items-center overflow-hidden rounded-2xl border border-[#BDC6E7] bg-white md:hidden">
            <svg
              className="absolute left-3.5"
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L17.364 17.364M17.364 17.364C18.9926 15.7353 20 13.4853 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.4853 20 15.7353 18.9926 17.364 17.364Z"
                stroke="#2F384C"
                strokeLinecap="round"
                strokeWidth="2"
              ></path>
            </svg>
            <input
              className="w-full py-3 pl-12 pr-3.5 placeholder:text-black focus:outline-none"
              placeholder="Enter destination"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="md:-mt-16">
          <section>
            <div className="mt-8 flex hidden justify-center md:block">
              <div className="relative flex justify-center">
                <form className="relative">
                  <span className="absolute inset-y-0 left-3.5 flex items-center">
                    <svg
                      className="text-primarybg h-6 w-6 flex-shrink-0"
                      fill="none"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 21L17.364 17.364M17.364 17.364C18.9926 15.7353 20 13.4853 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.4853 20 15.7353 18.9926 17.364 17.364Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </span>
                  <input
                    className="border-primarybg focus:border-primarybg w-[500px] max-w-full rounded-2xl border-4 bg-white px-4 py-3 pl-12 font-medium shadow-2xl transition-all placeholder:text-gray-600 focus:shadow-none focus:outline-none focus:ring-0"
                    placeholder="Where to?"
                    type="text"
                  />
                </form>
              </div>
            </div>
            <div className="mt-6 flex justify-center text-sm font-medium md:mt-12">
              <div className="flex items-center gap-2 rounded-xl border bg-white p-1 shadow-sm">
                <span className="border-r px-4">
                  <svg
                    className="h-5 w-5 md:h-6 md:w-6"
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.993 12.7334C11.0929 10.4427 11.4926 9.84507 11.8922 9.74547C12.9913 9.34708 14.49 12.5342 15.7888 12.1358C16.5881 11.9366 16.3883 10.5422 17.5873 8.84909C18.2866 7.85311 19.0859 7.25553 19.6854 6.85714M19.2858 15.3229L16.2884 16.7173L12.5916 18.3109C11.0929 19.008 9.39441 18.3109 8.69502 16.8169L5.69764 10.1439C5.39791 9.34708 5.39791 8.5503 5.69764 7.85311C5.99738 7.15593 6.49694 6.55834 7.19633 6.25955L13.8905 3.27162C15.3892 2.57444 17.0877 3.27162 17.7871 4.76559L20.7845 11.4386C21.3839 12.9326 20.6845 14.7253 19.2858 15.3229ZM12.5916 18.3109C11.0929 19.008 9.39441 18.3109 8.69502 16.8169L5.69764 10.1439C5.39791 9.34708 5.39791 8.5503 5.69764 7.85311C4.19895 7.95271 3 9.24748 3 10.7414V18.0121C3 19.7052 4.29887 21 5.89747 21H13.1911C14.7897 21 16.0886 19.7052 16.0886 18.1117V16.7173L12.5916 18.3109Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </span>
                <div className="flex items-center">
                  <button className="rounded-md px-2.5 py-2.5 transition-all md:px-4 bg-primarybg text-white">
                    All
                  </button>
                  <button className="rounded-md px-2.5 py-2.5 transition-all md:px-4 hover:bg-primarybg/10">
                    Instant
                  </button>
                  <button className="rounded-md px-2.5 py-2.5 transition-all md:px-4 hover:bg-primarybg/10">
                    In a week
                  </button>
                  <button className="rounded-md px-2.5 py-2.5 transition-all md:px-4 hover:bg-primarybg/10">
                    In a month
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="px-5 pt-9">
        <div className="max-w-8xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
        </div>
      </section>
      <div className="hidden md:block">
        <div className="container-fluid my-12 flex h-80 flex-col place-items-center justify-center gap-6 bg-black">
          <p className="text-md font-basier font-extrabold text-white md:text-3xl">
            Partners We Love to Work With
          </p>
          <div className="flex flex-row gap-6 ">
            <div className=" rounded-full flex items-center justify-center ">
              <Image
                src={"/tripadvisor.png"}
                alt="trip"
                width={80}
                height={80}
              />
            </div>
            <div className="flex items-center justify-center rounded-full ">
              <Image src={"/iata.png"} alt="trip" width={80} height={80} />
            </div>
            <div className="flex items-center justify-center rounded-full ">
              <Image
                src={"/startupindia.png"}
                alt="trip"
                width={200}
                height={200}
              />
            </div>
            <div className="flex items-center justify-center rounded-full  ">
              <Image
                src={"/mof-korea.png"}
                alt="trip"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
        <div className="font-basier flex w-full flex-col place-items-center justify-center gap-6 py-5 pb-8 md:container md:gap-12 md:py-4">
          <div className="flex w-full flex-col place-items-center justify-center gap-2">
            <p className="text-center text-lg font-extrabold text-black md:text-3xl">
              Meet Fellow Indians <br />
              Who Are Visa Ready with Us
            </p>
            <p className="md:text-md px-5 text-center text-base font-normal text-black md:px-0 md:text-left">
              Check these videos from existing Atlys members to know how we
              helped them get a Visa
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3 px-4 sm:grid-cols-2 md:grid md:grid-cols-3 md:justify-center md:gap-10 md:px-0 xl:grid-cols-4">
            <div className="flex h-fit w-full flex-1 flex-col place-items-center">
              <div className="border-1 rounded-brand relative flex h-80 w-full place-items-center  justify-center border-slate-200">
                <Image
                  alt="Priya Shah's experience with Atlys"
                  src="/gourav_testimonial_thumbnail.png"
                  width="866"
                  height="863"
                  decoding="async"
                  data-nImage="future"
                  className="h-[280px] w-[280px] object-contain"
                  loading="lazy"
                />
                <button className="absolute flex h-14 w-14 cursor-pointer place-items-center justify-center rounded-full bg-white transition duration-300 hover:scale-75 focus:outline-none focus:ring-0">
                  <svg
                    className="text-blue-500"
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M10.1186 2.63788C8.5271 1.66527 7.73133 1.17897 7.07571 1.23632C6.50412 1.28632 5.98153 1.57941 5.64081 2.04106C5.25 2.57059 5.25 3.50319 5.25 5.36838V18.6314C5.25 20.4966 5.25 21.4292 5.64081 21.9587C5.98153 22.4204 6.50412 22.7135 7.07571 22.7635C7.73133 22.8208 8.5271 22.3345 10.1186 21.3619L20.9702 14.7304C22.4475 13.8276 23.1861 13.3762 23.438 12.7951C23.6578 12.2877 23.6578 11.712 23.438 11.2047C23.1861 10.6236 22.4475 10.1722 20.9702 9.26939L10.1186 2.63788Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="-mt-4 flex w-[280px] flex-col p-2">
                <p className="text-xl font-bold text-black">Saloni &amp; Dev</p>
                <p className="text-base font-normal text-black">
                  Vietnam Visa in 2 hours
                </p>
              </div>
            </div>
            <div className="flex h-fit w-full flex-1 flex-col place-items-center">
              <div className="border-1 rounded-brand relative flex h-80 w-full place-items-center justify-center border-slate-200">
                <Image
                  alt="Priya Shah's experience with Atlys"
                  src="/gourav_testimonial_thumbnail.png"
                  width="866"
                  height="863"
                  decoding="async"
                  data-nImage="future"
                  className="h-[280px] w-[280px] object-contain"
                  loading="lazy"
                />
                <button className="absolute flex h-14 w-14 cursor-pointer place-items-center justify-center rounded-full bg-white transition duration-300 hover:scale-75 focus:outline-none focus:ring-0">
                  <svg
                    className="text-blue-500"
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M10.1186 2.63788C8.5271 1.66527 7.73133 1.17897 7.07571 1.23632C6.50412 1.28632 5.98153 1.57941 5.64081 2.04106C5.25 2.57059 5.25 3.50319 5.25 5.36838V18.6314C5.25 20.4966 5.25 21.4292 5.64081 21.9587C5.98153 22.4204 6.50412 22.7135 7.07571 22.7635C7.73133 22.8208 8.5271 22.3345 10.1186 21.3619L20.9702 14.7304C22.4475 13.8276 23.1861 13.3762 23.438 12.7951C23.6578 12.2877 23.6578 11.712 23.438 11.2047C23.1861 10.6236 22.4475 10.1722 20.9702 9.26939L10.1186 2.63788Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="-mt-4 flex w-[280px] flex-col p-2">
                <p className="text-xl font-bold text-black">Priya Shah</p>
                <p className="text-base font-normal text-black">
                  Dubai E-Visa in 24 hours
                </p>
              </div>
            </div>
            <div className="flex h-fit w-full flex-1 flex-col place-items-center">
              <div className="border-1 rounded-brand relative flex h-80 w-full place-items-center justify-center border-slate-200">
                <Image
                  alt="Revati Gandhi's experience with Atlys"
                  src="/gourav_testimonial_thumbnail.png"
                  width="864"
                  height="861"
                  decoding="async"
                  data-nImage="future"
                  className="h-[280px] w-[280px] object-contain"
                  loading="lazy"
                />
                <button className="absolute flex h-14 w-14 cursor-pointer place-items-center justify-center rounded-full bg-white transition duration-300 hover:scale-75 focus:outline-none focus:ring-0">
                  <svg
                    className="text-blue-500"
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M10.1186 2.63788C8.5271 1.66527 7.73133 1.17897 7.07571 1.23632C6.50412 1.28632 5.98153 1.57941 5.64081 2.04106C5.25 2.57059 5.25 3.50319 5.25 5.36838V18.6314C5.25 20.4966 5.25 21.4292 5.64081 21.9587C5.98153 22.4204 6.50412 22.7135 7.07571 22.7635C7.73133 22.8208 8.5271 22.3345 10.1186 21.3619L20.9702 14.7304C22.4475 13.8276 23.1861 13.3762 23.438 12.7951C23.6578 12.2877 23.6578 11.712 23.438 11.2047C23.1861 10.6236 22.4475 10.1722 20.9702 9.26939L10.1186 2.63788Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="-mt-4 flex w-[280px] flex-col p-2">
                <p className="text-xl font-bold text-black">Revati Gandhi</p>
                <p className="text-base font-normal text-black">
                  Schengen Visa in 5 days
                </p>
              </div>
            </div>
            <div className="flex h-fit w-full flex-1 flex-col place-items-center">
              <div className="border-1 rounded-brand relative flex h-80 w-full place-items-center justify-center border-slate-200">
                <Image
                  alt="Revati Gandhi's experience with Atlys"
                  src="/gourav_testimonial_thumbnail.png"
                  width="864"
                  height="861"
                  decoding="async"
                  data-nImage="future"
                  className="h-[280px] w-[280px] object-contain"
                  loading="lazy"
                />
                <button className="absolute flex h-14 w-14 cursor-pointer place-items-center justify-center rounded-full bg-white transition duration-300 hover:scale-75 focus:outline-none focus:ring-0">
                  <svg
                    className="text-blue-500"
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M10.1186 2.63788C8.5271 1.66527 7.73133 1.17897 7.07571 1.23632C6.50412 1.28632 5.98153 1.57941 5.64081 2.04106C5.25 2.57059 5.25 3.50319 5.25 5.36838V18.6314C5.25 20.4966 5.25 21.4292 5.64081 21.9587C5.98153 22.4204 6.50412 22.7135 7.07571 22.7635C7.73133 22.8208 8.5271 22.3345 10.1186 21.3619L20.9702 14.7304C22.4475 13.8276 23.1861 13.3762 23.438 12.7951C23.6578 12.2877 23.6578 11.712 23.438 11.2047C23.1861 10.6236 22.4475 10.1722 20.9702 9.26939L10.1186 2.63788Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="-mt-4 flex w-[280px] flex-col p-2">
                <p className="text-xl font-bold text-black">Revati Gandhi</p>
                <p className="text-base font-normal text-black">
                  Schengen Visa in 5 days
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto flex items-center gap-12 lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Visas On Time
              </h2>
              <div className="h-px flex-1 bg-gray-400"></div>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">
                  99.7%
                </p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-gray-900">
                    On-Time
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    You will never miss your trip. Visas on Atlys come 2x
                    faster.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                <p className="flex-none text-3xl font-bold tracking-tight text-white">
                  2 Lakhs+
                </p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-white">
                    Visas Processed
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-400">
                    In just over a year, we are India&rsquo;s second largest
                    visa processing platform.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                <p className="flex-none text-3xl font-bold tracking-tight text-white">
                  4.8 Star
                </p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-white">
                    Rating
                  </p>
                  <p className="mt-2 text-base leading-7 text-indigo-200">
                    Across Trustpilot, app stores and expert reviews, we&apos;ve
                    scored highest-in-class reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-basier flex w-full flex-col place-items-center justify-center gap-6 pb-8 md:container md:gap-12 md:py-24">
          <p className="text-center text-xl font-extrabold text-black md:text-4xl">
            Atlys In The News
          </p>
          <div className="flex flex-col justify-center gap-10 px-4 sm:grid-cols-2 md:grid md:grid-cols-3 md:justify-center md:px-24 xl:grid-cols-5">
            <div className="rounded-brand relative flex flex-col items-center justify-center gap-4 py-4">
              <Image
                alt="Atlys Streamlines Visa Process as Borders Reopen"
                width="4137"
                height="966"
                decoding="async"
                src="/featuredFortune.png"
                data-nImage="future"
                className="h-12 w-40 object-contain"
              />
              <p className="text-center">
                Atlys Streamlines Visa Process as Borders Reopen
              </p>
              <a
                className="absolute inset-0"
                href="#"
                rel="noreferrer"
                target="_blank"
              ></a>
            </div>
            <div className="rounded-brand relative flex flex-col items-center justify-center gap-4 py-4">
              <Image
                alt="How Governments Can Streamline Visas"
                src="/featuredForbes.png"
                width="391"
                height="104"
                decoding="async"
                data-nImage="future"
                className="h-12 w-40 object-contain"
              />
              <p className="text-center">
                How Governments Can Streamline Visas
              </p>
              <a
                className="absolute inset-0"
                href="https://www.forbes.com/sites/forbestechcouncil/2022/07/19/how-governments-can-streamline-visas/?sh=72731f116cb7"
                rel="noreferrer"
                target="_blank"
              ></a>
            </div>
            <div className="rounded-brand relative flex flex-col items-center justify-center gap-4 py-4">
              <Image
                alt="The 10 most innovative travel companies of 2022"
                src="/featuredFastCompany.png"
                width="437"
                height="77"
                decoding="async"
                data-nImage="future"
                className="h-12 w-40 object-contain"
              />
              <p className="text-center">
                The 10 most innovative travel companies of 2022
              </p>
              <a
                className="absolute inset-0"
                href="https://www.fastcompany.com/90724488/most-innovative-companies-travel-2022"
                rel="noreferrer"
                target="_blank"
              ></a>
            </div>
            <div className="rounded-brand relative flex flex-col items-center justify-center gap-4 py-4">
              <Image
                alt="Gamechangers: atlys as Winner in Technology sector"
                src="/featuredWashingtonPost.png"
                width="463"
                height="72"
                decoding="async"
                data-nImage="future"
                className="h-12 w-40 object-contain"
              />
              <p className="text-center">
                Gamechangers: atlys as Winner in Technology sector
              </p>
              <a
                className="absolute inset-0"
                href="https://www.washingtonpost.com/travel/tips/travel-adviser-international/"
                rel="noreferrer"
                target="_blank"
              ></a>
            </div>
            <div className="rounded-brand relative flex flex-col items-center justify-center gap-4 py-4">
              <Image
                alt="Atlys raises $4.25M to make visas faster and easier"
                src="/featuredTechCrunch.png"
                width="518"
                height="79"
                decoding="async"
                data-nImage="future"
                className="h-12 w-40 object-contain"
              />
              <p className="text-center">
                Atlys raises $4.25M to make visas faster and easier
              </p>
              <a
                className="absolute inset-0"
                href="https://techcrunch.com/2021/10/28/atlys-raises-4-25m-to-make-visa-applications-faster-and-easier/"
                rel="noreferrer"
                target="_blank"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
