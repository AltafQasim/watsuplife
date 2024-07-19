import React from "react";
import CalendarCheck from "../../../assets/Icons/CalendarCheckBlack.svg";
import moment from "moment";
import Image from "next/image";
import parse from "html-react-parser";

const AllCard = ({ item }) => {
  return (
    <div className="w-full">
      {item?.image_url ? (
        <img
          alt="img"
          src={item?.image_url}
          className="w-full object-cover"
          style={{
            minHeight: "180px",
            maxHeight: "180px",
            height: "180px",
          }}
        />
      ) : (
        <div
          className="w-full object-cover skeleton rounded-none"
          style={{
            minHeight: "180px",
            maxHeight: "180px",
            height: "180px",
          }}
        />
      )}
      <div className="py-[22px]">
        <div className="flex justify-between items-center">
          <p className="text-E77944 text-14-700 uppercase">{item?.tag}</p>
          <div className="flex items-center gap-2">
            <Image
              src={CalendarCheck}
              alt="calendar check icon"
              // className="size-4"
            />
            <div className="text-14-400 text-nowrap">
              {moment(item?.datetime).format("DD MMM yyyy")}
            </div>
          </div>
        </div>
        <p className="h6-med py-[10px]">{item?.title}</p>
        <p
          className="text-14-400 text-6D6E76"
          style={{ lineHeight: "21.41px" }}
        >
          {item?.description && parse(item?.description)}
        </p>
        <a
          href={`https://${item.url}`}
          target="_blank"
          className="text-57C4F9 text-14-400"
          style={{ lineHeight: "24.96px" }}
        >
          READ MORE
        </a>
      </div>
    </div>
  );
};

export default AllCard;
