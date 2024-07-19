import moment from "moment";
import React from "react";
import calendarTick from "../../../assets/Icons/calendar-tick.svg";
import facebook from "../../../assets/Icons/facebook.svg";
import whatsapp from "../../../assets/Icons/whatsapp.svg";
import share from "../../../assets/Icons/share.svg";
import Image from "next/image";
import parse from "html-react-parser";

const EventCard = ({ item }) => {
  return (
    <div className="card rounded-2xl h-96 w-full overflow-hidden image-full">
      {item?.thumbnail?.file_path ? (
        <img
          src={item?.thumbnail?.file_path}
          alt="img"
          className="absolute inset-0 object-cover w-full h-full"
        />
      ) : (
        <div className="absolute inset-0 object-cover w-full h-full skeleton" />
      )}

      <div className="card-body relative z-10 p-5">
        <div className="card-actions justify-start">
          <a
            href={`https://${item.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg text-center color-yellow booknow-btn-text py-3 px-6"
          >
            Book Now
          </a>
        </div>
        <div className="text-white absolute bottom-0 p-5 flex flex-col gap-4 w-full left-0">
          <div className="body-med">{item.name}</div>
          <div className="h6-med">
            {item.description && parse(item.description)}
          </div>
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
  );
};

export default EventCard;
