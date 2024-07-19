import React from "react";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import facebookblack from "../../assets/Icons/facebookblack.svg";
import whatsappblack from "../../assets/Icons/whatsappblack.svg";
import shareblack from "../../assets/Icons/shareblack.svg";
import specialPost from "../../assets/images/Specialpost.svg";
import Link from "next/link";
import calendarTickBlack from "../../assets/Icons/calendar-tick-black.svg";
import moment from "moment";

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

const FeaturedResources = ({ data }) => {
  return (
    <div className="relative">
      <Image
        src={specialPost}
        className="object-cover max-h-fit w-full"
        style={{ height: "468px" }}
      />

      <div className="bg-white lg:w-4/6 lg:h-10/12 w-full lg:absolute md:-right-10 md:top-10 lg:top-12 p-5 sm:p-10 md:p-5 xl:p-10 flex flex-col justify-between">
        <div className="carousel gap-x-5">
          {data?.map((item, index) => (
            <div
              className="carousel-item flex-col justify-between w-full"
              id={`feature${index}`}
              key={index}
            >
              <div className="flex flex-col gap-4 lg:gap-6 xl:gap-6">
                <div className="flex items-center gap-8 md:gap-16">
                  <div className="body-med text-orange-400">
                    {item?.tag?.name}
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={calendarTickBlack} alt="calendar icon" />
                    <div className="body-med">
                      {moment(item?.created_at).format("DD MMM YYYY")}
                    </div>
                  </div>
                </div>
                <div className="h4-bold">{item?.title}</div>
                <div className="body-reg" style={{ color: "#6d6e76" }}>
                  {item?.description}
                </div>
                <div className="text-sky-500">
                  <Link
                    href={{ pathname: "/Blogs", query: { id: item?.blog_id } }}
                    className="body-reg"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <Link href={"javascript:void(0)"}>
              {" "}
              <Image src={facebookblack} alt="facebook icon" />
            </Link>
            <Link href={"javascript:void(0)"}>
              <Image src={whatsappblack} alt="whatsapp icon" />
            </Link>
            <Link href={"javascript:void(0)"}>
              <Image src={shareblack} alt="share icon" />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`#feature${0}`}
              className="btn color-secondary min-h-8 h-8 px-2"
              onClick={() => stopScroll()}
            >
              <FaAngleLeft color="white" />
            </a>
            <a
              href={`#feature${data?.length - 1}`}
              className="btn color-primary border-sky-500 min-h-8 h-8 px-2"
              onClick={() => stopScroll()}
            >
              <FaAngleRight color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedResources;
