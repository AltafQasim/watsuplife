"use client";

import eventHero from "../../../assets/images/eventHero.svg";
import Image from "next/image";
import mapWidget from "../../../assets/images/mapWidget.svg";
import placesHero from "../../../assets/images/placesHero.svg";
import buildingIcon from "../../../assets/Icons/building.svg";
import MapPinLineIcon from "../../../assets/Icons/MapPinLine.svg";
import DeviceMobileIcon from "../../../assets/Icons/DeviceMobile.svg";
import EnvelopeIcon from "../../../assets/Icons/Envelope.svg";
import FacebookColorIcon from "../../../assets/Icons/FacebookColor.svg";
import WhatsappColorIcon from "../../../assets/Icons/WhatsappColor.svg";
import YoutubeColorIcon from "../../../assets/Icons/YoutubeColor.svg";
import InstagramColorIcon from "../../../assets/Icons/InstagramColor.svg";
import GoogleColorIcon from "../../../assets/Icons/GoogleColor.svg";
import Places1 from "../../../assets/Places/Places1.svg";
import Link from "next/link";
import InstaFeed from "../../../components/common/InstaFeed";
import Resources from "../../../components/Resources/Resources";
import EventList from "../../../components/EventList/EventList";
import HorizontalOneAdv from "../../../components/Advertise/HorizontalOneAdv";
import HorizontalTwoAdv from "../../../components/Advertise/HorizontalTwoAdv";
import MapPinSolid from "../../../assets/Icons/MapPinSolid.svg";
import { GetListOfPlace, GetPlaceByID } from "../../../api/place";
import { useEffect, useState } from "react";
import { GetListOfAds } from "@/api/ads";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import HTMLReactParser from "html-react-parser";
// import GoogleMap from "@/components/GoogleMap/GoogleMap";

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

let companyInfo = [
  {
    id: "NV 28834-0495",
    companyName: "Company Name",
    address: "24060 Lara Crest, New Kylefurt, NV 28834-0495",
    phoneNumber: "+91 999 999 9999",
    email: "denimmartin@mail.com",
    description:
      "The views and vibes are immaculate, especially during the winter season. Imagine walking up to this beautiful mosque while it is snowing! The mosque is white and so is the snow and the majestic snow-capped mountains behind the glistening Dal Lake, oh so pretty!",
  },
];

const Events = () => {
  const cityValue = useSelector((state) => state.city.value);
  const [placeList, setplaceList] = useState([]);
  const [placeObject, setplaceObject] = useState({});
  const [adsList, setAdsList] = useState([]);
  const query = useSearchParams();
  const id = query.get("id");
  const lists = () => {
    let obj = {
      city_id: +cityValue || 0,
      per_page: 8,
    };
    const payload = JSON.stringify(obj);
    GetListOfPlace(payload).then((res) => {
      setplaceList(res.data);
    });
    GetListOfAds("{}").then((res) => setAdsList(res.data));
  };
  const getPlace = () => {
    GetPlaceByID(id).then((res) => setplaceObject(res?.data));
  };
  useEffect(() => {
    lists();
  }, []);
  useEffect(() => {
    getPlace();
  }, [id]);
  return (
    <div className="2xl:container mx-auto px-2 md:px-6 lg:px-8">
      <section className="pl-[60px]">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-8">
            <div
              className="relative"
              style={{ minHeight: "350px", height: "350px" }}
            >
              <img
                src={placeObject?.thumbnail?.file_path}
                alt="places hero image"
                className="h-full w-full absolute top-0 left-0 object-cover z-0"
              />
              <div
                className="text-white p-5 z-10 absolute bottom-4 left-5"
                style={{
                  background: "rgba(15, 171, 245, 0.8)",
                  width: "250px",
                  height: "170px",
                }}
              >
                <div className="h5-med">
                  Endless entertainment anytime. Anywhere
                </div>
                <div className="text-14-400">
                  Duis aute irure dolor in reprehenderit{" "}
                </div>
                <div className="flex justify-start w-full py-2 gap-2">
                  <a href="#item1" className="h-1 w-12 my-2 bg-white"></a>
                  <a
                    href="#item2"
                    className="h-1 w-5 my-2 bg-white opacity-50"
                  ></a>
                  <a
                    href="#item3"
                    className="h-1 w-5 my-2 bg-white opacity-50"
                  ></a>
                </div>
              </div>
            </div>
            <div className="p-5 md:flex hidden flex-col gap-y-5 bg-white">
              <div className="h6-med"> {placeObject?.title}</div>
              <div className="body-reg" style={{ color: "6D6E76" }}>
                {HTMLReactParser(placeObject?.description || "<p></p>")}
              </div>
              <div className="flex items-center justify-between">
                <button className="body-bold btn color-yellow rounded-none border-none text-black hover:text-white px-9 h-14">
                  Venue Book
                </button>
                <div className="flex items-center gap-x-5">
                  <Link
                    href={"javascript:void(0)"}
                    className=""
                    style={{ color: "#229fda" }}
                  >
                    Share{" "}
                  </Link>
                  <Link href={"javascript:void(0)"}>
                    <Image
                      src={FacebookColorIcon}
                      alt="icon"
                      className="size-6"
                    />
                  </Link>
                  <Link href={"javascript:void(0)"}>
                    <Image
                      src={InstagramColorIcon}
                      alt="icon"
                      className="size-6"
                    />
                  </Link>{" "}
                  <Link href={"javascript:void(0)"}>
                    <Image
                      src={YoutubeColorIcon}
                      alt="icon"
                      className="size-6"
                    />
                  </Link>{" "}
                  <Link href={"javascript:void(0)"}>
                    <Image
                      src={WhatsappColorIcon}
                      alt="icon"
                      className="size-6"
                    />
                  </Link>{" "}
                  <Link href={"javascript:void(0)"}>
                    <Image
                      src={GoogleColorIcon}
                      alt="icon"
                      className="size-6"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 flex items-center justify-center">
            {companyInfo.map(
              ({
                address,
                companyName,
                description,
                email,
                id,
                phoneNumber,
              }) => (
                <div
                  className="p-6 bg-white flex flex-col items-start gap-y-6 w-full md:w-80"
                  key={id}
                >
                  <div className="flex items-start gap-x-5">
                    <Image src={buildingIcon} alt="building icon" />
                    <div className="flex flex-col gap-y-3">
                      <div className="text-14-500">{companyName}</div>
                      <div className="text-14-500 text-6D6E76">{id}</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <div className="flex items-center gap-x-3">
                      <Image src={EnvelopeIcon} alt="icon" className="size-6" />
                      <div className="text-14-500 text-6D6E76">{email}</div>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <Image
                        src={DeviceMobileIcon}
                        alt="icon"
                        className="size-6"
                      />
                      <div className="text-14-500 text-6D6E76">
                        {phoneNumber}
                      </div>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <Image
                        src={MapPinLineIcon}
                        alt="icon"
                        className="size-6"
                      />
                      <div className="text-14-500 text-6D6E76">{address}</div>
                    </div>
                  </div>
                  <div className="body-reg text-6D6E76 text-pretty">
                    {description}
                  </div>
                  <Link
                    href={"/Contact"}
                    className="body-bold btn color-yellow rounded-none border-none text-black hover:text-white px-9 h-14"
                  >
                    Contact Us
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <section className="lg:py-14 py-11">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-8 bg-white md:h-full h-[610px]">
            {/* <GoogleMapsEmbed
              apiKey="AIzaSyCh0464mnnH9i2rat30dAH4DNBxkkhcGxg"
              height={200}
              width="100%"
              mode="place"
              q="Brooklyn+Bridge,New+York,NY"
            /> */}
            <Image
              src={mapWidget}
              alt="map widget"
              className="object-cover min-w-full min-h-full"
            />
          </div>
          <div className="col-span-12 md:col-span-4 hidden md:flex flex-col items-center gap-y-6">
            <div className="skeleton w-full h-72 text-white text-center md:w-80">
              <img
                src={
                  adsList?.find(
                    (item) => item.position.code === "PLACE-MAP-RIGHT-1"
                  )?.document?.file_path
                }
                className="w-full h-full object-cover rounded-lg"
                alt="ads"
              />
            </div>
            <div className="skeleton h-72 text-white text-center w-full md:w-80">
              <img
                src={
                  adsList?.find(
                    (item) => item.position.code === "PLACE-MAP-RIGHT-2"
                  )?.document?.file_path
                }
                className="w-full h-full object-cover rounded-lg"
                alt="ads"
              />
            </div>
          </div>
        </div>
      </section>
      <HorizontalTwoAdv
        ads={adsList?.filter(
          (item) =>
            item.position.code === "PLACE-MAP-DOWN-1" ||
            item.position.code === "PLACE-MAP-DOWN-2"
        )}
      />
      <section
        className="p-4 md:p-10 lg:py-20 color-white"
        // style={{
        //   background: `radial-gradient(circle at 51% 49%, #0FABF52B 14%, #FFFFFF 56%)`,
        // }}
      >
        <div className="md:mb-0 mb-10 md:text-start text-center">
          <div className="h5-reg">Near me</div>
          <div className="flex md:justify-start justify-center">
            <div className="py-1 flex flex-col justify-start">
              <div className="h2-bold z-10">Places</div>
              <div
                className="h-5 relative -top-3 z-0"
                style={{
                  background: "#0FABF5",
                  filter: "blur(8px)",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {placeList?.map((item) => (
            <Link
              className="card w-full cursor-pointer"
              href={{
                pathname: `/Places/${item?.seo_url}`,
                query: { id: item?.place_id },
              }}
            >
              {item?.thumbnail?.file_path ? (
                <img
                  src={item?.thumbnail?.file_path}
                  alt="img"
                  className="object-cover w-full h-full"
                />
              ) : (
                <Image
                  src={Places1}
                  alt="img"
                  className="object-cover w-full h-full"
                />
              )}

              <div className="py-4 text-16-500 color-232536">{item.title}</div>
              <div className="flex items-center">
                <Image src={MapPinSolid} />
                <p className="pl-2 text-16-500 color-292929">0.2 km</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="py-5 text-center md:hidden">
          <button className="text-btn rounded-none text-center color-yellow py-3 px-10">
            View All
          </button>
        </div>
      </section>
      <HorizontalOneAdv
        ads={adsList?.find((item) => item.position.code === "PLACE-DOWN")}
      />
      <EventList enableFilter={true} />
      <Resources />
      <InstaFeed />
    </div>
  );
};

export default Events;
