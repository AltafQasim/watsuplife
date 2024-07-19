"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import event1 from "../../assets/images/event1.svg";
import calendarTick from "../../assets/Icons/calendar-tick.svg";
import facebook from "../../assets/Icons/facebook.svg";
import whatsapp from "../../assets/Icons/whatsapp.svg";
import share from "../../assets/Icons/share.svg";
import { GetListOfEvents } from "../../api/events";
import moment from "moment";
import { useSelector } from "react-redux";

const EventList = ({ enableFilter }) => {
  const [eventList, setEventList] = useState([]);
  const cityValue = useSelector((state) => state.city.value);
  const [filter, setFilter] = useState({
    day: true,
    week: false,
    month: false,
  });
  const lists = () => {
    GetListOfEvents(JSON.stringify(filter)).then((res) =>
      setEventList(res.data)
    );
  };
  useEffect(() => {
    lists();
  }, [filter]);
  useEffect(() => {
    setFilter((prev) => ({ ...prev, city_id: +cityValue }));
  }, [cityValue]);
  return (
    <section
      className="px-4 md:p-20 md:pb-10 lg:pb-20 mt-20 md:m-0"
      style={{
        background:
          !enableFilter &&
          `radial-gradient(circle at 51% 30%, #0FABF52B 14%, #FFFFFF 56%)`,
      }}
    >
      {enableFilter && (
        <div className="md:flex-row flex-col flex items-center justify-between py-4">
          <div className="md:mb-0 mb-10 md:text-start text-center">
            <div className="h5-reg">Enjoy with</div>
            <div className="flex ">
              <div className="py-1 flex flex-col justify-start">
                <div className="h2-bold z-10">Events</div>
                <div
                  className="h-[12px] z-10 relative -top-[10px]"
                  style={{
                    background: "#0FABF5",
                    filter: "blur(7px)",
                    borderRadius: "10px",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="join">
            <button
              className={`body-med btn  border ${
                filter.day ? "bg-sky-500 text-white" : "bg-white text-sky-500"
              } hover:bg-sky-500 hover:border-sky-500 hover:text-white px-6 rounded-sm border-sky-400 join-item`}
              onClick={() =>
                setFilter((prev) => ({
                  ...prev,
                  day: !prev.day,
                  week: false,
                  month: false,
                }))
              }
            >
              Day
            </button>
            <button
              className={`body-med btn  border ${
                filter.week ? "bg-sky-500 text-white" : "bg-white text-sky-500"
              } hover:bg-sky-500 hover:border-sky-500 hover:text-white px-6 rounded-sm border-sky-400 join-item`}
              onClick={() =>
                setFilter((prev) => ({
                  ...prev,
                  day: false,
                  week: !prev.week,
                  month: false,
                }))
              }
            >
              Week
            </button>
            <button
              className={`body-med btn  border ${
                filter.month ? "bg-sky-500 text-white" : "bg-white text-sky-500"
              } hover:bg-sky-500 hover:border-sky-500 hover:text-white px-6 rounded-sm border-sky-400 join-item`}
              onClick={() =>
                setFilter((prev) => ({
                  ...prev,
                  day: false,
                  week: false,
                  month: !prev.month,
                }))
              }
            >
              Month
            </button>
          </div>
        </div>
      )}

      {eventList.length ? (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {eventList?.map((item) => (
            <div className="card rounded-2xl h-96 w-full overflow-hidden image-full">
              {item?.thumbnail?.file_path ? (
                <img
                  src={item?.thumbnail?.file_path}
                  alt="img"
                  className="absolute inset-0 object-cover w-full h-full"
                />
              ) : (
                <Image
                  src={event1}
                  alt="img"
                  className="absolute inset-0 object-cover w-full h-full"
                />
              )}

              <div className="card-body relative z-10 p-5">
                <div className="card-actions justify-start">
                  <a
                    href={`https://${item.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[5px] hover:btn-outline text-center color-yellow booknow-btn-text p-[10px]"
                  >
                    Book Now
                  </a>
                </div>
                <div className="text-white absolute bottom-0 p-5 flex flex-col gap-4 w-full left-0">
                  <div className="body-med">{item.name}</div>
                  <div className="h6-med">{item.description}</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image src={calendarTick} alt="calendar-tic icon" />
                      <div className="text-14-400">
                        {moment(item.event_date_time).format("DD MMM yyyy")}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image src={facebook} alt="facebook icon" />
                      <Image src={whatsapp} alt="whatsapp icon" />
                      <Image src={share} alt="share icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center w-full py-10 h4-bold">No Data Found</div>
      )}

      <div
        className={`py-5 text-center md:hidden ${
          eventList.length < 4 && "hidden"
        }`}
      >
        <button className="text-btn rounded-none text-center color-yellow py-3 px-10">
          View All
        </button>
      </div>
    </section>
  );
};

export default EventList;
