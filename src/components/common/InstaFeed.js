"use client";
import React, { useEffect, useState } from "react";
import instabackground from "../../assets/images/instabackground.svg";
import Image from "next/image";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const stopScroll = () => {
  let st = 0;
  if (window.scrollY !== undefined) {
    st = window.scrollY;
  } else if (document.body.scrollTop !== undefined) {
    st = document.body.scrollTop;
  } else {
    st = document.documentElement.scrollTop;
  }
  setTimeout(() => {
    window.scroll(0, st);
  }, 0);
};

const InstaFeed = () => {
  const [instaFeed, setInstaFeed] = useState([]);
  const InstagramToken =
    "IGQWRPeVg4cWJ3SUVEWXpSUWNjeUtpcFFCSk5BYUJZAaklidnhrZA3lmXzNNMnFOYnlpdXhCQVV5MFhyY0w4c3dhR0x4ZAmJWMVJPV1ZArRzFpQXFYN1oyUnJGNGxTQVB6RmNVSldRajhZAWkVJRUc1YmNDcjYyLWJCMEkZD";

  const getstaticProps = async () => {
    let url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type&access_token=${InstagramToken}`;
    const data = await fetch(url);
    const Feed = await data.json();
    setInstaFeed(Feed.data?.reverse());
  };

  useEffect(() => {
    getstaticProps();
  }, []);

  return (
    <section className="" id="instafeed">
      <div className="lg:py-20 md:py-10 py-5 flex items-center relative">
        <div
          className="absolute left-0 h-full w-full md:w-3/4 z-0"
          style={{ backgroundColor: "#EEE9ED" }}
        ></div>
        <Image
          className="absolute hidden md:block right-0 h-full w-1/4 z-0 object-cover"
          src={instabackground}
        />

        <div className="grid grid-cols-12">
          <div className="md:col-span-4 col-span-12 z-10 flex flex-col items-start ps-5 justify-center text-pretty">
            <div className="text-start flex flex-col md:gap-y-[33px] md:ms-20">
              <div className="text-center md:text-start">
                <div className="h5-reg">Instagram</div>
                <div className="flex md:justify-start justify-center">
                  <div className="py-1 flex flex-col justify-start items-center">
                    <div className="h2-bold z-10">Get Ready</div>
                    <div
                      className="h-[12px] relative -top-[10px] z-10 w-60 sm:w-full"
                      style={{
                        background: "#0FABF5",
                        filter: "blur(7px)",
                        borderRadius: "10px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="md:w-3/4 body-reg" style={{ color: "#6d6e76" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </div>
              <div className="md:flex items-center gap-5 hidden">
                <a
                  href={`#instafeeditem0`}
                  className="btn h-12 w-12 color-white border-none rounded-full"
                  onClick={() => stopScroll()}
                >
                  <FaArrowLeftLong size={22} />
                </a>
                <a
                  href={`#instafeeditem${instaFeed?.length - 1}`}
                  className="btn h-16 w-16 rounded-full"
                  onClick={() => stopScroll()}
                >
                  <FaArrowRightLong size={22} />
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 z-10 col-span-12">
            <div className="carousel w-full carousel-center p-4 gap-x-8 bg-transparent rounded-box snap-none">
              {instaFeed?.map((item, index) => (
                <div className="carousel-item" id={`instafeeditem${index}`}>
                  <figure
                    className="rounded-[50px] w-64 bg-white flex"
                    style={{ height: "452px" }}
                  >
                    {item.media_type === "VIDEO" ? (
                      <video
                        controls
                        className="rounded-[50px] object-cover w-full h-full"
                      >
                        <source src={item.media_url} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={item.media_url}
                        className="rounded-[50px] object-cover w-full h-full"
                      />
                    )}
                  </figure>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center my-10 gap-5 md:hidden">
              <a
                href={`#instafeeditem0`}
                className="btn h-12 w-12 color-white border-none rounded-full"
              >
                <FaArrowLeftLong size={22} />
              </a>
              <a
                href={`#instafeeditem${instaFeed?.length - 1}`}
                className="btn color-secondary h-16 w-16 rounded-full"
              >
                <FaArrowRightLong size={22} color="white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstaFeed;
