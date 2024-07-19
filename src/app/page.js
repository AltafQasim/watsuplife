"use client";
// import video from "../videos/videoBanner.mp4";
// import { BuildingLibraryIcon, MoonIcon } from "@heroicons/react/24/outline";
import InstaFeed from "../components/common/InstaFeed";
import Link from "next/link";
import travel from "../assets/images/testimonials1.jpg";
import pumaLogo from "../assets/images/pumaLogo.png";
import nikeLogo from "../assets/images/nikelogo1.png";
import testimonials1 from "../assets/images/testimonials1.jpg";
import AboutusImg from "../assets/images/about.svg";
import hero from "../assets/images/hero.svg";
import Image from "next/image";
import {
  FaArrowRightLong,
  FaArrowLeftLong,
  FaFacebook,
  FaArrowLeft,
} from "react-icons/fa6";
import buloon from "../assets/images/buloon.svg";
import beach from "../assets/images/beach.svg";
import CalendarCheck from "../assets/Icons/CalendarCheck.svg";
import MapTrifold from "../assets/Icons/MapTrifold.svg";
import Trophy from "../assets/Icons/Trophy.svg";
import Smiley from "../assets/Icons/Smiley.svg";
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowRight,
  FaCalendar,
  FaShare,
  FaWhatsapp,
} from "react-icons/fa";
import ahmedabad from "../assets/City/Ahmedabad.svg";
import Bengaluru from "../assets/City/Bengaluru.svg";
import Chandigarh from "../assets/City/Chandigarh.svg";
import Chennai from "../assets/City/Chennai.svg";
import Delhi from "../assets/City/Delhi.svg";
import Hyderabad from "../assets/City/Hyderabad.svg";
import Kochi from "../assets/City/Kochi.svg";
import Kolkata from "../assets/City/Kolkata.svg";
import Mumbai from "../assets/City/Mumbai.svg";
import Pune from "../assets/City/Pune.svg";
import facebookblack from "../assets/Icons/facebookblack.svg";
import whatsappblack from "../assets/Icons/whatsappblack.svg";
import shareblack from "../assets/Icons/shareblack.svg";
import facebookBrandLogo from "../assets/BrandLogo/facebook.svg";
import goodfoodBrandLogo from "../assets/BrandLogo/goodfood.svg";
import hermesBrandLogo from "../assets/BrandLogo/hermes.svg";
import lacosteBrandLogo from "../assets/BrandLogo/lacoste.svg";
import nikeBrandLogo from "../assets/BrandLogo/nike.svg";
import pumaBrandLogo from "../assets/BrandLogo/puma.svg";
import vansBrandLogo from "../assets/BrandLogo/vans.svg";
import HorizontalTwoAdv from "../components/Advertise/HorizontalTwoAdv";
import HorizontalThreeAdv from "../components/Advertise/HorizontalThreeAdv";
import VeriticalTwoAdv from "../components/Advertise/VeriticalTwoAdv";
import Resources from "../components/Resources/Resources";
import EventList from "../components/EventList/EventList";
import { GetListOfAds } from "../api/ads";
import { useEffect, useState } from "react";
import { GetListOfPredefinedData } from "@/api/predefined";
import { useDispatch } from "react-redux";
import { onChangeCity } from "@/lib/features/citySlice";

const Cities = [
  {
    id: 1,
    city: "Ahmedabad",
    image: ahmedabad,
  },
  {
    id: 2,
    city: "Bengaluru",
    image: Bengaluru,
  },
  {
    id: 3,
    city: "Chandigarh",
    image: Chandigarh,
  },
  {
    id: 4,
    city: "Chennai",
    image: Chennai,
  },
  {
    id: 5,
    city: "Delhi",
    image: Delhi,
  },
  {
    id: 6,
    city: "Hyderabad",
    image: Hyderabad,
  },
  {
    id: 7,
    city: "Kochi",
    image: Kochi,
  },
  {
    id: 8,
    city: "Kolkata",
    image: Kolkata,
  },
  {
    id: 9,
    city: "Pune",
    image: Pune,
  },
  {
    id: 10,
    city: "Mumbai",
    image: Mumbai,
  },
];

const infoData = [
  {
    icon: CalendarCheck,
    label: "Events",
    amount: "1200 +",
  },
  {
    icon: MapTrifold,
    label: "Places",
    amount: "500 +",
  },
  {
    icon: Trophy,
    label: "Experience",
    amount: "12 +",
  },
  {
    icon: Smiley,
    label: "Satisfaction",
    amount: "3000 +",
  },
];

const BrandLogoData = [
  {
    brandName: "goodfood",
    logo: goodfoodBrandLogo,
  },
  {
    brandName: "lacoste",
    logo: lacosteBrandLogo,
  },
  {
    brandName: "puma",
    logo: pumaBrandLogo,
  },
  {
    brandName: "facebook",
    logo: facebookBrandLogo,
  },
  {
    brandName: "nike",
    logo: nikeBrandLogo,
  },
  {
    brandName: "vans",
    logo: vansBrandLogo,
  },
  {
    brandName: "hermes",
    logo: hermesBrandLogo,
  },
];

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

export default function Home() {
  const [adsList, setAdsList] = useState([]);
  const [citiesList, setCitiesList] = useState([]);
  const dispatch = useDispatch();

  const lists = () => {
    GetListOfPredefinedData(JSON.stringify({ entity_type: "CITY" })).then(
      (res) => {
        setCitiesList(res.data.data);
      }
    );
    GetListOfAds("{}").then((res) => setAdsList(res.data));
  };
  useEffect(() => {
    lists();
  }, []);
  return (
    <>
      <div
        className="hero h-[37.5rem]"
        style={{
          backgroundImage: `url(${hero.src})`,
        }}
      >
        <div className="hero-overlay flex items-end bg-opacity-20">
          <div className="hero-content text-white ps-[69px] pb-[66px]">
            <div className="max-w-2xl text-center md:text-start hidden md:block">
              <h1 className="mb-5 h1-bold">REACH FOR THE STARS</h1>
              <p className="mb-5 h5-reg">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:container mx-auto">
        <section className="py-[50px]">
          <div className="card grid md:gap-16 md:grid-cols-2">
            <div>
              <div className="mb-[55px] md:ps-10 text-center md:text-start">
                <div className="h5-reg">Journey with Popular</div>
                <div className="flex md:justify-start justify-center">
                  <div className="py-1 flex flex-col justify-start">
                    <div className="h2-bold z-10">Cities</div>
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
              <div className="card relative rounded-none bg-white p-10 w-full grid justify-items-center grid-cols-3 gap-x-6 gap-y-10 lg:grid-cols-4 xl:gap-x-8">
                {citiesList
                  ?.slice(0, 10)
                  ?.map(({ name, url, predefined_id }, index) => (
                    <Link
                      href={"/Cities"}
                      className="flex flex-col justify-center gap-[15px] items-center hover:shadow-lg hover:shadow-slate-500 px-3 py-1 cursor-pointer"
                      onClick={() => {
                        dispatch(onChangeCity(predefined_id));
                      }}
                    >
                      <figure className="h-20 w-[91.56px]">
                        <img src={url} />
                      </figure>
                      <div className="">{name}</div>
                    </Link>
                  ))}
                <Link
                  href={"/Cities"}
                  className="md:absolute row-end-auto col-span-2 btn p-0 border-none w-28 h-28 md:w-36 md:h-36 bottom-6 right-12 md:-bottom-6 md:-right-6 flex flex-col items-center justify-center rounded-full color-primary text-white"
                  style={{ boxShadow: "0px 0px 0px 5px #0FABF533" }}
                >
                  <FaArrowRightLong size={32} />
                  <div className="body-med">View More</div>
                </Link>
              </div>
            </div>
            <div className="md:block hidden">
              <VeriticalTwoAdv
                ads1={adsList?.find(
                  (item) => item.position.code === "TOP-RIGHT-1"
                )}
                ads2={adsList?.find(
                  (item) => item.position.code === "TOP-RIGHT-2"
                )}
              />
            </div>
          </div>
        </section>
        <section className="md:pt-[50px]">
          <div>
            <figure className="w-full">
              <Image
                src={buloon}
                alt="buloon"
                className="w-full min-h-52 object-cover"
              />
            </figure>
          </div>
          <div className="flex justify-center lg:py-[50px] bg-white relative md:-top-24 md:mx-0 lg:mx-20 ">
            <div className="grid grid-cols-12 md:gap-5">
              <div className="relative lg:-left-20 -top-10 lg:-top-0 col-span-12 min-[880px]:col-span-5 xl:col-span-6">
                <figure>
                  <Image
                    src={beach}
                    alt="beach"
                    className="w-full min-[880px]:h-[470px] h-full"
                  />
                </figure>
              </div>
              <div className="md:relative lg:-left-16 flex flex-col items-center justify-center w-full col-span-12 min-[880px]:col-span-7 xl:col-span-6 px-5 py-0 pb-10">
                <div className="h4-bold mb-3">
                  It started out as a simple idea and evolved into our passion
                </div>
                <p className="body-reg mb-5 md:mb-14">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <div class="grid w-full grid-cols-2 lg:gap-x-24 gap-4 gap-y-10 place-content-center">
                  {infoData.map(({ amount, icon, label }) => (
                    <div className="flex break-word items-start justify-start gap-3 md:gap-6">
                      <div>
                        <Image
                          src={icon}
                          alt="icon"
                          className="md:max-w-14 md:min-w-14 lg:w-14 max-w-9 min-w-9 w-9"
                          // height={42}
                          // width={42}
                        />
                      </div>
                      <div>
                        <h5 className="h5-med mb-2">{amount}</h5>
                        <h4 className="font-sculpin-bold text-xl md:text-2xl">
                          {label}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <EventList enableFilter={true} />
        <section className="md:pb-20 pb-8">
          <div className="w-full flex py-[50px] md:py-[90px] justify-center">
            <div className="carousel carousel-center p-4 space-x-10 justify-self-center rounded-box">
              {[1, 2, 3, 4].map(() => (
                <div
                  className="crousel-item flex items-center justify-center max-w-72 max-h-72 min-w-72 min-h-72 rounded-2xl"
                  style={{
                    boxShadow: "10px -9px 2px #ffb6c169",
                    backgroundColor: "lightpink",
                  }}
                >
                  <div className="card-body font-bold">IP Property</div>
                </div>
              ))}
            </div>
          </div>
          <div className="group grid w-full overflow-hidden">
            <div class="w-full inline-flex flex-nowrap">
              <ul
                x-ref="logos"
                class="flex items-center justify-center md:justify-start gap-[26px] [&_img]:max-w-none animate-infinite-scroll"
              >
                {BrandLogoData.map(({ brandName, logo }, index) => (
                  <li>
                    <Image
                      loading="lazy"
                      src={logo}
                      class="max-w-none"
                      alt={brandName}
                    />
                  </li>
                ))}
              </ul>
              <ul
                class="ml-[26px] flex items-center justify-center md:justify-start gap-[26px] [&_img]:max-w-none animate-infinite-scroll"
                aria-hidden="true"
              >
                {BrandLogoData.map(({ brandName, logo }, index) => (
                  <li>
                    <Image
                      loading="lazy"
                      src={logo}
                      class="max-w-none"
                      alt={brandName}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div class="mt-[26px] w-full inline-flex flex-nowrap">
              <ul
                x-ref="logos"
                class="flex items-center justify-center md:justify-start gap-[26px] [&_img]:max-w-none animate-infinite-scroll"
              >
                {BrandLogoData.slice(-2).map(({ brandName, logo }, index) => (
                  <li>
                    <Image
                      loading="lazy"
                      src={logo}
                      class="max-w-none"
                      alt={brandName}
                    />
                  </li>
                ))}
                {BrandLogoData.slice(0, 5).map(({ brandName, logo }, index) => (
                  <li>
                    <Image
                      loading="lazy"
                      src={logo}
                      class="max-w-none"
                      alt={brandName}
                    />
                  </li>
                ))}
              </ul>
              <ul
                class="ml-[26px] flex items-center justify-center md:justify-start gap-[26px] [&_img]:max-w-none animate-infinite-scroll"
                aria-hidden="true"
              >
                {BrandLogoData.slice(-2).map(({ brandName, logo }, index) => (
                  <li>
                    <Image
                      loading="lazy"
                      src={logo}
                      class="max-w-none"
                      alt={brandName}
                    />
                  </li>
                ))}
                {BrandLogoData.slice(0, 5).map(({ brandName, logo }, index) => (
                  <li>
                    <Image
                      loading="lazy"
                      src={logo}
                      class="max-w-none"
                      alt={brandName}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div class="mt-[26px] w-full md:hidden inline-flex flex-nowrap">
              <ul
                x-ref="logos"
                class="flex items-center justify-center md:justify-start gap-[26px] [&_img]:max-w-none animate-infinite-scroll"
              >
                {BrandLogoData.slice(-4).map(({ brandName, logo }, index) => (
                  <Image
                    loading="lazy"
                    src={logo}
                    class="max-w-none"
                    alt={brandName}
                  />
                ))}
                {BrandLogoData.slice(0, BrandLogoData.length - 4).map(
                  ({ brandName, logo }, index) => (
                    <Image
                      loading="lazy"
                      src={logo}
                      class="max-w-none"
                      alt={brandName}
                    />
                  )
                )}
              </ul>
              <ul
                class="ml-[26px] flex items-center justify-center md:justify-start gap-[26px] [&_img]:max-w-none animate-infinite-scroll"
                aria-hidden="true"
              >
                {BrandLogoData.slice(-4).map(({ brandName, logo }, index) => (
                  <Image
                    loading="lazy"
                    src={logo}
                    class="max-w-none"
                    alt={brandName}
                  />
                ))}
                {BrandLogoData.slice(0, BrandLogoData.length - 4).map(
                  ({ brandName, logo }, index) => (
                    <Image
                      loading="lazy"
                      src={logo}
                      class="max-w-none"
                      alt={brandName}
                    />
                  )
                )}
              </ul>
            </div>
          </div>
        </section>{" "}
        <HorizontalThreeAdv adsList={adsList} />
        <Resources />
        <HorizontalTwoAdv
          ads={adsList?.filter(
            (item) =>
              item.position.code === "FEATURED-DOWN-1" ||
              item.position.code === "FEATURED-DOWN-2"
          )}
        />
        <section
          className="lg:py-20 py-10 md:mb-24"
          style={{ background: "#E3F4FD" }}
        >
          <div className="carousel w-full">
            {[1, 2, 3, 4, 2, 1, 2, 3, 4].map((item, index) => (
              <div
                id={`testimonial${index}`}
                className="carousel-item relative w-full"
              >
                <div className="grid grid-cols-12 divide-x divide-[#b3bec7] text-pretty">
                  <div className="col-span-12 md:col-span-5">
                    <div className="2xl:w-4/6 px-6 2xl:px-10">
                      <div className="text-btn mb-4">TESTIMONIALS{index}</div>
                      <div className="h3-bold mb-4 ">
                        Some Testimonials from clients who have Trust our
                        services
                      </div>
                      <div
                        className="body-reg mb-4 md:mb-0"
                        style={{ color: "#6d6e76" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-7 flex justify-center">
                    <div className="md:w-9/12 w-full px-6 flex flex-col justify-between">
                      <div className="h4-med mb-4 md:mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.
                      </div>
                      <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center gap-8 md:mb-0 mb-4">
                          <div className="avatar">
                            <div className="size-12 rounded-full">
                              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                          </div>
                          <div>
                            <div className="h4-bold">Jonathan Vallem</div>
                            <div className="body-reg text-gray-500">
                              New york, USA
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-5">
                          <a
                            href={`#testimonial${index < 1 ? 0 : index - 1}`}
                            className="btn h-12 w-12 color-white border-none rounded-full"
                            onClick={() => stopScroll()}
                          >
                            <FaArrowLeftLong size={22} />
                          </a>
                          <a
                            href={`#testimonial${index > 7 ? 8 : index + 1}`}
                            className="btn h-16 w-16 color-secondary rounded-full"
                            onClick={() => stopScroll()}
                          >
                            <FaArrowRightLong size={22} color="white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="">
          <div className="flex items-center justify-end">
            <div className="w-2/6 md:w-3/12 h-6 color-orange"></div>
            <div className="w-2/6 md:w-3/12 h-6 color-yellow"></div>
            <div className="w-2/6 md:w-3/12 h-6 color-primary"></div>
          </div>
          <div
            style={{ background: "#F4F0F8" }}
            className="xl:py-20 md:py-10 md:px-0 lg:px-5"
          >
            <div
              style={{
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "3px",
              }}
              className="mb-4 hidden md:block sm:p-5 md:p-0 xl:p-4"
            >
              ABOUT US
            </div>
            <div className="grid grid-cols-12 xl:gap-x-10 gap-y-5 items-start">
              <div className="md:col-span-6 col-span-12 sm:p-5 md:p-0 xl:p-4 text-pretty order-last md:order-first">
                <div className="w-full xl:w-5/6 ">
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "20px",
                      letterSpacing: "3px",
                    }}
                    className="mb-4 md:hidden"
                  >
                    ABOUT US
                  </div>
                  <h2 className="h3-bold font-bold mb-7">
                    We are a community of content writers who share their
                    learnings
                  </h2>

                  <p className="body-reg" style={{ color: "#6d6e76" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>

                  <p className="my-7 body-reg" style={{ color: "#6d6e76" }}>
                    Amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <Link
                  href={"/About"}
                  className="md:hidden btn border-none w-[100px] h-[100px] flex flex-col items-center justify-center rounded-full color-primary text-white "
                >
                  <FaArrowRightLong size={25} />
                  <div className="body-reg" style={{ fontSize: "11.19px" }}>
                    View More
                  </div>
                </Link>
              </div>{" "}
              <div className="md:col-span-6 col-span-12 lg:p-4">
                <div className="relative">
                  <Link
                    href={"/About"}
                    className="md:flex hidden absolute btn border-none bottom-5 md:-bottom-5 md:-left-7 lg:-bottom-6 lg:-left-10 h-36 w-36 flex-col items-center justify-center rounded-full color-primary text-white "
                  >
                    <FaArrowRightLong size={32} />
                    <div className="body-reg">View More</div>
                  </Link>
                  <Image
                    src={AboutusImg}
                    className="2xl:h-full h-[390px] object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <InstaFeed />
      </div>
    </>
  );
}
