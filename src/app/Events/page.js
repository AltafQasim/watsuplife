"use client";
import eventHero from "../../assets/images/eventHero.svg";
import Image from "next/image";
import CalendarCheck from "../../assets/Icons/CalendarCheckBlack.svg";
import Clock from "../../assets/Icons/Clock.svg";
import MapPinBlack from "../../assets/Icons/MapPinBlack.svg";
import InstaFeed from "../../components/common/InstaFeed";
import Resources from "../../components/Resources/Resources";
import EventList from "../../components/EventList/EventList";
import HorizontalOneAdv from "../../components/Advertise/HorizontalOneAdv";
import { useEffect, useState } from "react";
import { GetListOfAds } from "@/api/ads";
import { GetListOfEvents } from "@/api/events";
import moment from "moment";
import Link from "next/link";

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
  const lists = () => {
    GetListOfAds("{}").then((res) => setAdsList(res.data));
    GetListOfEvents("{}").then((res) => setEventList(res.data));
  };
  useEffect(() => {
    lists();
  }, []);
  return (
    <div className="2xl:container mx-auto">
      <section className="w-full color-yellow px-5 py-10 sm:p-10 md:p-5 xl:p-20">
        <div className="carousel">
          {eventList?.slice(0, 3)?.map((item, index) => (
            <div
              id={`item${index}`}
              className="carousel-item grid grid-cols-12 items-center gap-y-5 w-full h-full"
            >
              <div className="col-span-12 md:col-span-7 flex flex-col gap-8 sm:p-5 w-full">
                <div className="h1-bold">{item?.name}</div>
                <div className="body-reg">{item?.description}</div>
                <div className="flex flex-col md:flex-row items-center gap-5">
                  <div className="flex flex-col items-center gap-y-2 backdrop-blur-sm bg-white/10 p-5 border-y border-y-zink-500 rounded-xl w-full md:w-auto">
                    <div
                      style={{
                        fontSize: "24px",
                        fontWeight: "600",
                        lineHeight: "28px",
                      }}
                      className="text-nowrap"
                    >
                      {moment(item?.event_date_time).format("DD MMM")}
                    </div>

                    <div className="flex items-center gap-2">
                      <Image
                        src={CalendarCheck}
                        alt="calendar check icon"
                        // className="size-4"
                      />
                      <div className="text-14-400">Date</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-y-2 backdrop-blur-sm bg-white/10 p-5 border-y border-y-zink-500 rounded-xl w-full md:w-auto">
                    <div
                      style={{
                        fontSize: "24px",
                        fontWeight: "600",
                        lineHeight: "28px",
                      }}
                      className="text-nowrap"
                    >
                      {moment(item?.event_date_time).format("hh:mm A")}
                    </div>

                    <div className="flex items-center gap-2">
                      <Image
                        src={Clock}
                        alt="Clock icon"
                        // className="size-4"
                      />
                      <div className="text-14-400">Time</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-y-2 backdrop-blur-sm bg-white/10 p-5 border-y border-y-zink-500 rounded-xl w-full md:w-auto">
                    <div
                      style={{
                        fontSize: "24px",
                        fontWeight: "600",
                        lineHeight: "28px",
                      }}
                    >
                      Venue
                    </div>

                    <div className="flex items-center gap-2">
                      <Image
                        src={MapPinBlack}
                        alt="location icon"
                        // className="size-4"
                      />
                      <div className="text-14-400">{item?.address}</div>
                    </div>
                  </div>
                </div>
                <div className="md:block hidden md:text-start text-center">
                  <Link
                    href={item?.url}
                    className="text-btn btn w-44 rounded-none color-secondary text-white"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 sm:p-5 md:row-start-auto row-start-1 flex justify-center">
                <div className="w-full md:w-10/12 h-[548px] rounded-tl-[143.33px] rounded-br-[143.33px] overflow-hidden">
                  <img
                    src={item?.thumbnail?.file_path}
                    alt="event img"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:flex hidden justify-center w-full mt-5 py-2 gap-2">
          <Link href="#item0" className="h-1 w-12 my-2 bg-black" />
          <Link href="#item1" className="h-1 w-5 my-2 bg-black opacity-50" />
          <Link href="#item2" className="h-1 w-5 my-2 bg-black opacity-50" />
        </div>
      </section>
      <HorizontalOneAdv
        ads={adsList?.find((item) => item.position.code === "EVENT-UP")}
      />
      <EventList enableFilter={true} />
      <HorizontalOneAdv
        ads={adsList?.find((item) => item.position.code === "EVENT-DOWN")}
      />
      <Resources />
      <InstaFeed />
    </div>
  );
};

export default Events;
