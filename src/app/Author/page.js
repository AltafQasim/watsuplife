"use client";
import eventHero from "../../assets/images/eventHero.svg";
import member4 from "../../assets/images/member4.svg";
import Image from "next/image";
import InstaFeed from "../../components/common/InstaFeed";
import EventList from "../../components/EventList/EventList";
import HorizontalOneAdv from "../../components/Advertise/HorizontalOneAdv";
import { useEffect, useState } from "react";
import { GetListOfAds } from "@/api/ads";
import { GetListOfEvents } from "@/api/events";
import CustomSvgIcon from "@/assets/svg/CustomSvgIcon";

const EventsData = [
  {
    id: 1,
    title: "Reasearch and Goal Setting Event",
    body: "Revolutionize your global digital strategy with the #1 Worldwide Digital Solution Agency, pioneering innovative solutions for unparalleled success.",
    photo: eventHero,
  },
  {
    id: 2,
    title: "Reasearch and Goal Setting Event",
    body: "Revolutionize your global digital strategy with the #1 Worldwide Digital Solution Agency, pioneering innovative solutions for unparalleled success.",
    photo: eventHero,
  },
  {
    id: 3,
    title: "Reasearch and Goal Setting Event",
    body: "Revolutionize your global digital strategy with the #1 Worldwide Digital Solution Agency, pioneering innovative solutions for unparalleled success.",
    photo: eventHero,
  },
];

const Events = () => {
  const [adsList, setAdsList] = useState([]);
  const [eventList, setEventList] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const lists = () => {
    GetListOfAds("{}").then((res) => setAdsList(res.data));
    GetListOfEvents("{}").then((res) => setEventList(res.data));
  };
  useEffect(() => {
    lists();
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="2xl:container mx-auto">
      <section
        className=" w-full px-5 pt-[50px] pb-[50px] md:pb-0 sm:p-10 md:p-5 xl:px-20 xl:pt-20"
        style={{
          background:
            windowSize.width >= 768
              ? `linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 23%, rgba(37,179,245,1) 23%, rgba(37,179,245,1) 79%)`
              : "rgba(37,179,245,1)",
        }}
      >
        <div className="flex flex-col items-center md:items-start md:flex-row gap-x-[18px] gap-y-[36px]">
          <div
            className="min-w-[300px] min-h-[300px] max-w-[300px] max-h-[300px] rounded-tr-[70px] rounded-bl-[70px] overflow-hidden"
            style={{ boxShadow: "-10px 10px 0px 0px #E77944" }}
          >
            <Image
              src={member4}
              alt="Author img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:bg-white bg-transparent h-full md:h-[307px] w-full">
            <div className="flex flex-col gap-y-4 m-auto text-white text-center md:text-black md:text-start items-center md:items-start md:px-[25px] md:py-[18px] lg:px-[50px] lg:py-[36px]">
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "20px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                }}
              >
                Dev Tyagi
              </div>
              <div className="Sen-bold h-5/12 xl:w-[730px]  ">
                We Love to have varied Opinions & Articles from people of
                different Interest and occupations in Life. So this is a section
                where our Guest Bloggers can Contribute and express themselves
                in front o...
              </div>
              <div className="flex items-center gap-3">
                <a href="javascript:void(0)">
                  <CustomSvgIcon
                    iconName={"facebook"}
                    color={windowSize.width >= 768 ? "#0FABF5" : "#fff"}
                    size={24}
                  />
                </a>
                <a href="javascript:void(0)">
                  <CustomSvgIcon
                    iconName={"instagram"}
                    color={windowSize.width >= 768 ? "#000" : "#fff"}
                    size={24}
                  />
                </a>
                <a href="javascript:void(0)">
                  <CustomSvgIcon
                    iconName={"x"}
                    color={windowSize.width >= 768 ? "#000" : "#fff"}
                    size={24}
                  />
                </a>
                <a href="javascript:void(0)">
                  <CustomSvgIcon
                    iconName={"google"}
                    color={windowSize.width >= 768 ? "#000" : "#fff"}
                    size={24}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EventList enableFilter={false} />
      <div className="xl:p-20 sm:p-10 p-2 flex flex-col gap-y-[30px]">
        <div className="skeleton w-full h-64 flex items-center justify-center">
          <img
            src={
              adsList?.find((item) => item.position.code === "EVENT-DOWN")
                ?.document?.file_path
            }
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
      {/* <HorizontalOneAdv
        ads={adsList?.find((item) => item.position.code === "EVENT-DOWN")}
      /> */}
      <InstaFeed />
    </div>
  );
};

export default Events;
