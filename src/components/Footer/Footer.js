"use client";
import Image from "next/image";
import brandLogo from "../../assets/svg/brandlogo.svg";
import mobileIcon from "../../assets/Icons/mobile.svg";
import smsIcon from "../../assets/Icons/sms.svg";
import FacebookIcon from "../../assets/Icons/FacebookLogo.svg";
import GoogleIcon from "../../assets/Icons/GoogleLogo.svg";
import InstagramIcon from "../../assets/Icons/InstagramLogo.svg";
import YoutubeIcon from "../../assets/Icons/YoutubeLogo.svg";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GetListOfPredefinedData } from "@/api/predefined";
import { useDispatch } from "react-redux";
import { onChangeCity } from "@/lib/features/citySlice";

const contact_details = {
  ContactNumber: {
    mobile1: 9999999999,
    mobile2: 9999999998,
  },
  Email: {
    email1: "info@whatsuplife",
  },
};
const Quick_Links = [
  {
    name: "About Us",
    path: "/About",
  },
  {
    name: "Advertise With Us",
    path: "/Contact",
  },
  {
    name: "Privacy Policy",
    path: "javascript:void(0)",
  },
  {
    name: "Terms Of Service",
    path: "javascript:void(0)",
  },
  {
    name: "Blogs",
    path: "/Blogs",
  },
  {
    name: "Events",
    path: "/Events",
  },
  {
    name: "Places",
    path: "/Places",
  },
];
const Cities = [
  {
    name: "Ahmedabad",
    path: "javascript:void(0)",
  },
  {
    name: "Bengaluru",
    path: "#",
  },
  {
    name: "Chandigarh",
    path: "#",
  },
  {
    name: "Chennai",
    path: "#",
  },
  {
    name: "Mumbai",
    path: "#",
  },
  {
    name: "Delhi",
    path: "#",
  },
  {
    name: "Jaipur",
    path: "#",
  },
  {
    name: "Ahmedabad",
    path: "#",
  },
  {
    name: "Bengaluru",
    path: "#",
  },
  {
    name: "Chandigarh",
    path: "#",
  },
  {
    name: "Chennai",
    path: "#",
  },
  {
    name: "Mumbai",
    path: "#",
  },
  {
    name: "Delhi",
    path: "#",
  },
  {
    name: "Jaipur",
    path: "#",
  },
];

const Footer = () => {
  const [citiesList, setCitiesList] = useState([]);
  const dispatch = useDispatch();

  const lists = () => {
    GetListOfPredefinedData(JSON.stringify({ entity_type: "CITY" })).then(
      (res) => {
        setCitiesList(res.data.data);
      }
    );
  };
  useEffect(() => {
    lists();
  }, []);
  return (
    <div className="2xl:container mx-auto">
      {/* <div className="w-full h-auto flex flex-col md:flex-row justify-evenly items-center bg-sky-500 flex-wrap text-white">
        <div className="flex flex-col md:flex-row items-center my-16 ml-20">
          <div className="w-[190px] h-[190px] bg-white rounded-[50px] overflow-hidden flex justify-center items-center">
            <Image className="w-[130px] h-[130px]" src={QrcodeIcon} />
          </div>
          <div className="px-3 w-[50%]">
            <p className="text-4xl font-extrabold p-1">Scan App</p>
            <p className="text-xl p-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
        </div>
        <div className="lg:flex hidden flex-row justify-evenly w-64">
          <Image className="w-24 h-24" src={PlaystoreIcon} />
          <Image className="w-20 h-15" src={ApplestoreIcon} />
        </div>
        <div className="lg:hidden flex flex-row justify-evenly w-64 mb-4 rounded-lg bg-white">
          <div className="uppercase p-1 text-2xl font-bold  text-sky-500">
            Download App
          </div>
        </div>
      </div> */}
      <div className="color-light text-black">
        <div className="h-auto flex flex-col min-[880px]:flex-row lg:justify-center gap-x-10 lg:gap-x-28 2xl:gap-x-32 text-pretty px-5 xl:px-20 py-10 xl:py-20">
          <div className="flex flex-col justify-between items-start gap-y-16">
            <div className="flex flex-shrink-0 items-center">
              <Image className="w-auto" src={brandLogo} alt="Company logo" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5 underline cursor-pointer">
                <div>
                  <Image className="" src={mobileIcon} alt="mobile icon" />
                </div>
                <div>
                  <div className="body-med">
                    {contact_details.ContactNumber.mobile1}
                  </div>
                  <div className="body-med">
                    {contact_details.ContactNumber.mobile1}
                  </div>
                </div>
              </div>
              <a
                href={`mailto:${contact_details.Email.email1}`}
                className="flex items-center gap-5 underline cursor-pointer"
              >
                <div>
                  <Image className="" src={smsIcon} alt="sms icon" />
                </div>
                <div>
                  <div className="body-med">{contact_details.Email.email1}</div>
                </div>
              </a>
            </div>
          </div>
          <div className="h-full">
            <div className="body-bold mb-8 min-[880px]:mt-0 mt-10">
              Quick Links
            </div>
            <div className="grid grid-rows-4 grid-flow-col gap-y-8 gap-x-10 lg:gap-x-16 2xl:gap-x-32">
              {Quick_Links.map((item, index) => (
                <div className="footer-links cursor-pointer">
                  <Link href={item.path}>{item.name} </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="h-full">
            <div className="body-bold mb-8 min-[880px]:mt-0 mt-10">Cities</div>
            <div className="grid grid-rows-4 grid-flow-col gap-y-8 gap-x-2 sm:gap-x-6 lg:gap-x-10  xl:gap-x-16 2xl:gap-x-32">
              {citiesList?.map(
                (item, index) =>
                  index < 11 && (
                    <Link
                      href={`/Cities/${item?.name}`}
                      className="footer-links cursor-pointer"
                      onClick={() => {
                        dispatch(onChangeCity(item?.predefined_id));
                      }}
                    >
                      {item.name}
                    </Link>
                  )
              )}
              <div className="footer-links cursor-pointer text-sky-500">
                <Link href={"/Cities"}>More </Link>
              </div>
            </div>
          </div>
          {/* {footer_links?.map((item, index) => (
            <div key={index} className="flex flex-col justify-between">
              <p className="text-xl font-bold pt-4">{item.title}</p>
              {item?.links?.map((link, index) => (
                <a
                  href={link.path}
                  key={index}
                  className="cursor-pointer pt-4 font-semibold"
                >
                  {link.name}
                </a>
              ))}
            </div>
          ))} */}
          {/* <div className="flex flex-col justify-between">
            <p className="text-xl font-bold pt-4">{Cities.title}</p>
            <div className="w-[320px] flex flex-row justify-between">
              <div className="w-[150px] flex flex-col">
                {Cities?.links?.map(
                  (city, index) =>
                    index < 4 && (
                      <a
                        href={city.path}
                        className="cursor-pointer pt-4 font-semibold"
                      >
                        {city.name}
                      </a>
                    )
                )}
              </div>
              <div className="w-[150px] flex flex-col">
                {Cities?.links?.map(
                  (city, index) =>
                    index >= 4 && (
                      <a
                        href={city.path}
                        className="cursor-pointer pt-4 font-semibold"
                      >
                        {city.name}
                      </a>
                    )
                )}
                <a
                  href="#"
                  className="cursor-pointer pt-4 font-semibold text-blue-400"
                >
                  More
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="w-full h-15 border-t-2 border-slate-300 flex sm:flex-row flex-col gap-y-5 items-center justify-center sm:justify-between px-5 md:px-20 py-5">
        <div className="copyright-text">
          © 2024 <span className="text-blue-400">whatsuplife.</span> All Rights
          Reserved.
        </div>
        <div className="flex items-center gap-3">
          <a href="javascript:void(0)">
            <Image className="size-6" src={FacebookIcon} alt="Facebook icon" />
          </a>
          <a href="javascript:void(0)">
            <Image
              className="size-6"
              src={InstagramIcon}
              alt="Instagram icon"
            />
          </a>
          <a href="javascript:void(0)">
            <Image className="size-6" src={YoutubeIcon} alt="Youtube icon" />
          </a>
          <a href="javascript:void(0)">
            <Image className="size-6" src={GoogleIcon} alt="Google icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
