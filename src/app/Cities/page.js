"use client";
import React, { useEffect, useState } from "react";
import hero_city from "../../assets/City/Hero_city.svg";
import CustomSvgIcon from "../../assets/svg/CustomSvgIcon";
import Boat from "../../assets/City/boat.svg";
import TwoWomen from "../../assets/City/two-women.svg";
import Image from "next/image";
import CalendarCheck from "../../assets/Icons/CalendarCheckBlack.svg";
import LaptopImage from "../../assets/City/laptop_image.svg";
import HorizontalTwoAdv from "../../components/Advertise/HorizontalTwoAdv";
import FeaturedResources from "../../components/Resources/FeaturedResources";
import event1 from "../../assets/images/event1.svg";
import calendarTick from "../../assets/Icons/calendar-tick.svg";
import facebook from "../../assets/Icons/facebook.svg";
import whatsapp from "../../assets/Icons/whatsapp.svg";
import share from "../../assets/Icons/share.svg";
import InstaFeed from "../../components/common/InstaFeed";
import TravelComponent from "../../components/common/TravelComponent";
import { GetEventsCount, GetListOfEvents } from "../../api/events";
import { GetListOfPlace, GetPlaceCount } from "../../api/place";
import { GetBlogCount, GetListOfBlogs } from "../../api/blog";
import { GetCombinedCityData } from "../../api/search";
import { useSelector } from "react-redux";
import EventCard from "../../components/common/card/eventCard";
import PlaceCard from "../../components/common/card/placeCard";
import BlogCard from "../../components/common/card/blogCard";
import AllCard from "@/components/common/card/allCard";
import CustomPagination from "@/components/pagination/pagination";
import { GetListOfPredefinedData } from "@/api/predefined";
import { GetListOfAds } from "@/api/ads";
import Link from "next/link";

// const filter1 = [
//   {
//     id: 1,
//     image: "ShoppingBagOpenIcon",
//     name: "Shopping",
//   },
//   { id: 2, image: "ForkKnife", name: "Dine-out" },
//   { id: 3, image: "Buildings", name: "Stay" },
//   { id: 4, image: "Confetti", name: "Party" },
//   { id: 5, image: "TreePalm", name: "Leisure" },
//   { id: 6, image: "Event", name: "Event" },
//   { id: 7, image: "Wellness", name: "Wellness" },
//   { id: 8, image: "Community", name: "Community" },
//   { id: 9, image: "YellowPages", name: "Yellow Pages" },
// ];

// const filter2 = [
//   "Electronics & Appliance",
//   "Boutiques & Designer Apparels",
//   "Grocery, Gifts & Special Needs",
//   "Lifestyle, Art & Book Stores",
//   "Jewellery, Watches & Accessor",
// ];

const Cities = () => {
  const [data, setData] = useState({ data: [], totalCount: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [filterData, setFilterData] = useState({
    category: [],
    subCategory: [],
  });
  const [selectedFilter, setSelectedFilter] = useState({
    filter1: 0,
    filter1Index: -1,
    filter2: 0,
    filter2Index: -1,
    All: true,
    event: false,
    place: false,
    blog: false,
  });
  const [adsList, setAdsList] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const cityValue = useSelector((state) => state.city.value);

  const featuredLists = async () => {
    GetListOfBlogs(JSON.stringify({ entity_type: "FEATURED" })).then((res) =>
      setFeaturedData(res.data)
    );
  };
  const adsLists = () => {
    GetListOfAds("{}").then((res) => setAdsList(res.data));
  };

  const blogLists = () => {
    let obj = {
      city_id: +cityValue,
      category_id: selectedFilter.filter1,
      sub_category_id: selectedFilter.filter2,
      page: currentPage,
      per_page: 6,
    };
    const payload = JSON.stringify(obj);
    GetListOfBlogs(payload).then((res) => setBlogData(res.data));
  };

  useEffect(() => {
    featuredLists();
    adsLists();
    getCategoryData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    blogLists();
    getAllData();
  }, [selectedFilter, cityValue]);

  useEffect(() => {
    getAllData();
  }, [currentPage]);

  const getCategoryData = async () => {
    await GetListOfPredefinedData(
      JSON.stringify({ entity_type: "CATEGORY" })
    ).then((res) =>
      setFilterData((prev) => ({ ...prev, category: res.data.data }))
    );
  };

  const getAllData = async () => {
    let obj = {
      city_id: +cityValue,
      category_id: selectedFilter.filter1,
      sub_category_id: selectedFilter.filter2,
      page: currentPage,
      per_page: selectedFilter.All ? 2 : selectedFilter.blog ? 6 : 8,
    };
    const payload = JSON.stringify(obj);
    if (selectedFilter.All) {
      GetCombinedCityData(payload).then((res) => {
        setData({ data: res.data.data, totalCount: res.data.count });
      });
    } else if (selectedFilter.event) {
      GetListOfEvents(payload).then(async (res) => {
        const countRes = await GetEventsCount(payload);
        setData({ data: res.data, totalCount: countRes.data.event_counts });
      });
    } else if (selectedFilter.place) {
      GetListOfPlace(payload).then(async (res) => {
        const countRes = await GetPlaceCount(payload);
        setData({ data: res.data, totalCount: countRes.data.place_counts });
      });
    } else if (selectedFilter.blog) {
      GetListOfBlogs(payload).then(async (res) => {
        const countRes = await GetBlogCount(payload);
        setData({ data: res.data, totalCount: countRes.data.blog_count });
      });
    }
  };

  const filterBy = () => {
    if (selectedFilter.All) {
      return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:gap-x-8">
          {data?.data?.map((item) => (
            <AllCard item={item} />
          ))}
        </div>
      );
    } else if (selectedFilter.event) {
      return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {data?.data?.map((item) => {
            return <EventCard item={item} />;
          })}
        </div>
      );
    } else if (selectedFilter.place) {
      return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {data?.data?.map((item) => (
            <PlaceCard item={item} />
          ))}
        </div>
      );
    } else if (selectedFilter.blog) {
      return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:gap-x-8">
          {data?.data?.map((item) => (
            <BlogCard item={item} />
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      <section
        className="hero h-[660px] md:h-[500px] bg-opacity-20"
        style={{
          backgroundImage: `url(${hero_city.src})`,
        }}
      >
        <div className="hero-overlay flex items-end bg-opacity-0">
          <div className="hero-content text-white p-[25px] md:p-[50px] sm:ps-20 sm:pb-20">
            <div className="max-w-3xl text-start">
              <p className="body-reg uppercase">
                Posted on <span className="text-16-900">startup</span>
              </p>
              <h1 className="md:mb-5 h1-bold py-6">
                Step-by-step guide to choosing great font pairs
              </h1>
              <p className="body-reg">
                By <span className="text-FFD050">James West</span> | May 23,
                2022{" "}
              </p>
              <p className="h5-reg flex-wrap py-5">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <Link
                href={"Contact"}
                className="md:mt-12 px-12 py-4 text-center item-center color-yellow text-black h6-bold w-[206px] cursor-pointer"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="color-border">
        <div className="py-[72px]">
          <div className="flex gap-[19px] justify-center flex-wrap">
            {filterData?.category.map(({ predefined_id, name }, index) => (
              <div
                key={index}
                className="h-[100px] w-[110px] flex flex-col justify-center items-center text-black color-white cursor-pointer"
                style={{
                  backgroundColor:
                    selectedFilter.filter1 === predefined_id
                      ? "#0FABF5"
                      : "#FFF",
                  color:
                    selectedFilter.filter1 === predefined_id ? "#FFF" : "#000",
                }}
                onClick={async () => {
                  if (selectedFilter.filter1Index === index) {
                    setSelectedFilter((prev) => ({
                      ...prev,
                      filter1: 0,
                      filter1Index: -1,
                      filter2: 0,
                      filter2Index: -1,
                    }));
                  } else {
                    setSelectedFilter((prev) => ({
                      ...prev,
                      ...selectedFilter,
                      filter1: predefined_id,
                      filter1Index: index,
                      filter2: 0,
                      filter2Index: -1,
                    }));
                    await GetListOfPredefinedData(
                      JSON.stringify({
                        parent_id: predefined_id,
                        entity_type: "SUBCATEGORY",
                      })
                    ).then((res) =>
                      setFilterData((prev) => ({
                        ...prev,
                        subCategory: res.data.data,
                      }))
                    );
                  }
                }}
              >
                <CustomSvgIcon
                  classname="svg-icon"
                  color={
                    selectedFilter.filter1 === predefined_id ? "white" : "black"
                  }
                  iconName={name}
                />

                <p className="text-14-500  mt-[10px] ">{name}</p>
              </div>
            ))}
          </div>
          {selectedFilter.filter1Index !== -1 &&
          filterData?.subCategory.length ? (
            <div
              className="flex md:hidden justify-center flex-wrap gap-y-[10px] py-4 px-[30px] absolute z-20"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                marginTop:
                  selectedFilter.filter1Index < 3
                    ? "-238px"
                    : selectedFilter.filter1Index < 6
                    ? "-119px"
                    : "0px",
              }}
            >
              {filterData?.subCategory?.map(
                ({ predefined_id, name }, index) => (
                  <div
                    className="border-l-[1px] bg-white color-border w-[308px] py-[15px] px-[10px] text-14-500  text-black cursor-pointer text-center"
                    style={{
                      backgroundColor:
                        selectedFilter.filter2 === predefined_id
                          ? "#0FABF5"
                          : "#FFF",
                      color:
                        selectedFilter.filter2 === predefined_id
                          ? "#FFF"
                          : "#000",
                    }}
                    onClick={() =>
                      setSelectedFilter({
                        ...selectedFilter,
                        filter2: predefined_id,
                        filter2Index: index,
                      })
                    }
                  >
                    {name}
                  </div>
                )
              )}
            </div>
          ) : null}
          <div className="hidden md:flex mt-[30px] justify-center flex-wrap">
            {filterData?.subCategory?.map(({ predefined_id, name }, index) => (
              <div
                className="border-l-[1px] bg-white color-border py-[15px] px-[10px] text-14-500  text-black cursor-pointer mt-1 mb-1"
                style={{
                  backgroundColor:
                    selectedFilter.filter2 === predefined_id
                      ? "#0FABF5"
                      : "#FFF",
                  color:
                    selectedFilter.filter2 === predefined_id ? "#FFF" : "#000",
                }}
                onClick={() =>
                  setSelectedFilter({
                    ...selectedFilter,
                    filter2: predefined_id,
                    filter2Index: index,
                  })
                }
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 md:p-10 color-white">
        <div className="md:flex-row flex-col flex items-center justify-between py-4">
          <div className="md:mb-0 mb-10 md:text-start text-center">
            <div className="h5-reg">News</div>
            <div className="flex ">
              <div className="py-1 flex flex-col justify-start">
                <div className="h2-bold z-10">Featured</div>
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
          <div className="flex items-center">
            <p className="px-3 body-med hidden md:block">Filter By</p>
            <div className="join">
              <button
                className={`body-med btn  border ${
                  selectedFilter.All
                    ? "bg-sky-500 text-white"
                    : "bg-white text-sky-500"
                } hover:bg-sky-500 hover:border-sky-500 hover:text-white px-6 rounded-sm border-sky-400 join-item`}
                onClick={() => {
                  setSelectedFilter((prev) => ({
                    ...prev,
                    All: !prev.All,
                    place: false,
                    event: false,
                    blog: false,
                  }));
                }}
              >
                All
              </button>
              <button
                className={`body-med btn  border ${
                  selectedFilter.event
                    ? "bg-sky-500 text-white"
                    : "bg-white text-sky-500"
                } hover:bg-sky-500 hover:border-sky-500 hover:text-white px-6 rounded-sm border-sky-400 join-item`}
                onClick={() => {
                  setSelectedFilter((prev) => ({
                    ...prev,
                    event: !prev.event,
                    All: false,
                    place: false,
                    blog: false,
                  }));
                }}
              >
                Events
              </button>
              <button
                className={`body-med btn  border ${
                  selectedFilter.place
                    ? "bg-sky-500 text-white"
                    : "bg-white text-sky-500"
                } hover:bg-sky-500 hover:border-sky-500 hover:text-white px-6 rounded-sm border-sky-400 join-item`}
                onClick={() => {
                  setSelectedFilter((prev) => ({
                    ...prev,
                    place: !prev.place,
                    event: false,
                    All: false,
                    blog: false,
                  }));
                }}
              >
                Places
              </button>
              <button
                className={`body-med btn  border ${
                  selectedFilter.blog
                    ? "bg-sky-500 text-white"
                    : "bg-white text-sky-500"
                } hover:bg-sky-500 hover:border-sky-500 hover:text-white px-6 rounded-sm border-sky-400 join-item`}
                onClick={() => {
                  setSelectedFilter((prev) => ({
                    ...prev,
                    blog: !prev.blog,
                    All: false,
                    place: false,
                    event: false,
                  }));
                }}
              >
                Blog
              </button>
            </div>
          </div>
        </div>
        {/* <div className="md:flex justify-center">
          <div>
            <div className="md:flex justify-center max-w-xl mt-[37px] md:mt-0">
              <Image src={Boat} className="w-full " />
              <div className="md:px-[22px] py-[22px] md:py-0">
                <div className="flex justify-between items-center">
                  <p className="text-E77944 text-14-700">TRAVEL</p>
                  <div className="flex items-center gap-2">
                    <Image
                      src={CalendarCheck}
                      alt="calendar check icon"
                      // className="size-4"
                    />
                    <div className="text-14-400">Date</div>
                  </div>
                </div>
                <p className="h6-med py-[10px]">
                  Design tips for designers that cover
                </p>
                <p
                  className="text-14-400 text-6D6E76"
                  style={{ lineHeight: "21.41px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod .
                </p>
              </div>
            </div>
            <div className="w-full md:flex">
              <div className="w-full md:w-[300px]"></div>
              <a
                href="#"
                className="text-57C4F9 text-14-400"
                style={{ lineHeight: "24.96px" }}
              >
                READ MORE
              </a>
            </div>
          </div>
          <div>
            <div className="md:flex justify-center max-w-xl mt-[32px] md:mt-0">
              <Image src={TwoWomen} className="w-full" />
              <div className="md:px-[22px] py-[22px] md:py-0">
                <div className="flex justify-between items-center">
                  <p className="text-0FABF5 text-14-700">BUSSINESS</p>
                  <div className="flex items-center gap-2">
                    <Image
                      src={CalendarCheck}
                      alt="calendar check icon"
                      // className="size-4"
                    />
                    <div className="text-14-400">Date</div>
                  </div>
                </div>
                <p className="h6-med py-[10px]">
                  Design tips for designers that cover
                </p>
                <p
                  className="text-14-400 text-6D6E76"
                  style={{ lineHeight: "21.41px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod .
                </p>
              </div>
            </div>
            <div className="w-full md:flex">
              <div className="w-full md:w-[300px]"></div>
              <a
                href="#"
                className="text-57C4F9 text-14-400"
                style={{ lineHeight: "24.96px" }}
              >
                READ MORE
              </a>
            </div>
          </div>
        </div> */}

        {/* <div className="mt-[47px]">
          <div className="flex justify-center">
            <div className="gap-5 flex flex-wrap justify-center">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div className="w-full md:max-w-[365px]">
                  <Image src={LaptopImage} className="w-full" />
                  <TravelComponent />
                </div>
              ))}
            </div>
          </div>

        </div> */}
        {filterBy()}
        {((selectedFilter.All && data?.totalCount > 6) ||
          (selectedFilter.blog && data?.totalCount > 6) ||
          (selectedFilter.event && data?.totalCount > 8) ||
          (selectedFilter.place && data?.totalCount > 8)) && (
          <CustomPagination
            count={data?.totalCount}
            pageLength={selectedFilter.All || selectedFilter.blog ? 6 : 8}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
        {/* <div className="flex justify-center gap-3 pb-4 md:pb-0">
          {["01", "02", "03", "NEXT"].map((item) => (
            <div className="px-3 py-3 color-cream body-reg flex justify-center items-center">
              {item}
            </div>
          ))}
        </div> */}
      </section>
      <HorizontalTwoAdv
        ads={adsList?.filter(
          (item) =>
            item.position.code === "CITY-MIDDLE-1" ||
            item.position.code === "CITY-MIDDLE-2"
        )}
      />
      <section className="md:flex justify-center items-center col-span-12 lg:col-span-7 pb-[91px]">
        <FeaturedResources data={featuredData} />
        <div className="hidden md:block">
          <div className="card rounded-2xl h-[419px] w-[343px] overflow-hidden image-full ml-[133px]">
            <Image
              src={event1}
              alt="img"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="card-body relative z-10 p-5">
              <div className="card-actions justify-start">
                <button className="rounded-lg text-center color-yellow booknow-btn-text py-3 px-6">
                  Book Now
                </button>
              </div>
              <div className="text-white absolute bottom-0 p-5 flex flex-col gap-4 w-full left-0">
                <div className="body-med">TRAVEL</div>
                <div className="h6-med">
                  Wardrobe Essentials You'll Forever Need!
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image src={calendarTick} alt="calendar-tic icon" />
                    <div className="text-14-400">30 Aug 2024</div>
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
        </div>
      </section>
      <section className="px-4 md:p-10 md:pb-10 lg:pb-20 color-white">
        {/* <div className="md:flex justify-center">
          <div>
            <div className="md:flex justify-center max-w-xl mt-[37px] md:mt-0">
              <Image src={Boat} className="w-full " />
              <div className="md:px-[22px] py-[22px] md:py-0">
                <div className="flex justify-between items-center">
                  <p className="text-E77944 text-14-700">TRAVEL</p>
                  <div className="flex items-center gap-2">
                    <Image
                      src={CalendarCheck}
                      alt="calendar check icon"
                      // className="size-4"
                    />
                    <div className="text-14-400">Date</div>
                  </div>
                </div>
                <p className="h6-med py-[10px]">
                  Design tips for designers that cover
                </p>
                <p
                  className="text-14-400 text-6D6E76"
                  style={{ lineHeight: "21.41px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod .
                </p>
              </div>
            </div>
            <div className="w-full md:flex">
              <div className="w-full md:w-[300px]"></div>
              <a
                href="#"
                className="text-57C4F9 text-14-400"
                style={{ lineHeight: "24.96px" }}
              >
                READ MORE
              </a>
            </div>
          </div>
          <div>
            <div className="md:flex justify-center max-w-xl mt-[32px] md:mt-0">
              <Image src={TwoWomen} className="w-full" />
              <div className="md:px-[22px] py-[22px] md:py-0">
                <div className="flex justify-between items-center">
                  <p className="text-0FABF5 text-14-700">BUSSINESS</p>
                  <div className="flex items-center gap-2">
                    <Image
                      src={CalendarCheck}
                      alt="calendar check icon"
                      // className="size-4"
                    />
                    <div className="text-14-400">Date</div>
                  </div>
                </div>
                <p className="h6-med py-[10px]">
                  Design tips for designers that cover
                </p>
                <p
                  className="text-14-400 text-6D6E76"
                  style={{ lineHeight: "21.41px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod .
                </p>
              </div>
            </div>
            <div className="w-full md:flex">
              <div className="w-full md:w-[300px]"></div>
              <a
                href="#"
                className="text-57C4F9 text-14-400"
                style={{ lineHeight: "24.96px" }}
              >
                READ MORE
              </a>
            </div>
          </div>
        </div> */}
        <div className="mt-[47px]">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:gap-x-8">
            {blogData?.map((item) => (
              <BlogCard item={item} />
            ))}
          </div>
        </div>
      </section>
      <InstaFeed />
    </div>
  );
};

export default Cities;
