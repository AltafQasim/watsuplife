"use client";
import React, { useEffect, useState } from "react";
import FacebookColorIcon from "../../../assets/Icons/FacebookColor.svg";
import WhatsappColorIcon from "../../../assets/Icons/WhatsappColor.svg";
import YoutubeColorIcon from "../../../assets/Icons/YoutubeColor.svg";
import InstagramColorIcon from "../../../assets/Icons/InstagramColor.svg";
import GoogleColorIcon from "../../../assets/Icons/GoogleColor.svg";
import VeriticalTwoAdv from "../../../components/Advertise/VeriticalTwoAdv";
import LaptopImage from "../../../assets/City/laptop_image.svg";
import BlogImage1 from "../../../assets/Blogs/BlogImage1.svg";
import BlogImage2 from "../../../assets/Blogs/BlogImage2.svg";
import BlogImage3 from "../../../assets/Blogs/BlogImage3.svg";
import BlogImage5 from "../../../assets/Blogs/BlogImage5.svg";
import Link from "next/link";
import Image from "next/image";
import HorizontalOneAdv from "../../../components/Advertise/HorizontalOneAdv";
import TravelComponent from "../../../components/common/TravelComponent";
import Resources from "../../../components/Resources/Resources";
import EventList from "../../../components/EventList/EventList";
import InstaFeed from "../../../components/common/InstaFeed";
import { GetBlogBySeoURL, GetListOfBlogs } from "../../../api/blog";
import { GetListOfAds } from "@/api/ads";
import HTMLReactParser from "html-react-parser";
import { useSelector } from "react-redux";

const Blogs = ({ params }) => {
  const cityValue = useSelector((state) => state.city.value);
  const [blogList, setBlogList] = useState([]);
  const [blogObject, setBlogObject] = useState({});
  const [adsList, setAdsList] = useState([]);
  const lists = () => {
    let obj = {
      city_id: +cityValue || 0,
      per_page: 6,
    };
    const payload = JSON.stringify(obj);
    let url = params.slug.slice(-1)[0];
    GetBlogBySeoURL(url).then((res) => setBlogObject(res.data));
    GetListOfBlogs(payload).then((res) => {
      setBlogList(res.data);
    });
    GetListOfAds("{}").then((res) => setAdsList(res.data));
  };
  useEffect(() => {
    lists();
  }, []);
  return (
    <div>
      <section>
        <div className="md:flex gap-x-6 lg:pl-[92px]">
          <div className="md:w-[800px] w-full">
            <div className="color-white py-1">
              <div
                className="relative flex m-5"
                style={{ minHeight: "350px", height: "350px" }}
              >
                <img
                  src={blogObject?.thumbnail?.file_path}
                  className="w-full h-full object-cover"
                />
                {/* <Image className="hidden lg:block" src={BlogImage2} /> */}
              </div>
              <div className="p-5 flex flex-col gap-y-5 ">
                <div className="md:flex items-center justify-between">
                  <div className="flex items-center md:justify-between justify-start">
                    <Image
                      src={BlogImage1}
                      className="w-12 h-12 rounded-full"
                    />
                    <p className="body-reg px-2">
                      By <span className="text-57C4F9">John Deo</span> l Aug 23,
                      2021
                    </p>
                  </div>
                  <div className="flex items-center gap-x-5 mt-[18px] md:mt-0">
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
                <div className="py-[18px]">
                  <p className="text-14-700 text-E77944">
                    {blogObject?.tag?.name}
                  </p>
                  <div className="h6-med py-[15px]">{blogObject?.title}</div>
                  <div
                    className="text-16-400 relative text-6D6E76"
                    style={{ lineHeight: "24px" }}
                  >
                    {blogObject?.content &&
                      HTMLReactParser(blogObject?.content)}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="color-white p-5 my-5 md:w-[800px] w-full">
              <Image src={BlogImage3} />
              <p
                className="text-16-400 py-5 text-6D6E76"
                style={{ lineHeight: "24px" }}
              >
                The views and vibes are immaculate, especially during the winter
                season. Imagine walking up to this beautiful mosque while it is
                snowing! The mosque is white and so is the snow and the majestic
                snow-capped mountains behind the glistening Dal Lake, oh so
                pretty!
              </p>
              <p
                className="text-16-400 py-5 text-6D6E76"
                style={{ lineHeight: "24px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore 
              </p>
              <Image src={BlogImage3} />
              <p
                className="text-16-400 py-5 text-6D6E76"
                style={{ lineHeight: "24px" }}
              >
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue; and equal
                blame belongs to those who fail in their duty through weakness
                of will, which is the same as saying through shrinking from toil
                and pain. These cases are perfectly simple and easy to
                distinguish. In a free hour, when our power of choice is
                untrammelled and when nothing prevents our being able to do what
                we like best, every pleasure is to be
              </p>
              <div
                className="text-16-500 text-6D6E76"
                style={{ lineHeight: "24px" }}
              >
                <p className="pt-4">
                  1. Welcomed and every pain avoided. But in certain
                  circumstances and owing to the claims of duty or the
                  obligations of
                </p>
                <p className="pt-4">
                  2. It will frequently occur that pleasures have to be
                  repudiated and annoyances accepted.
                </p>
                <p className="pt-4">
                  3. The wise man therefore always holds in these matters to
                  this principle of selection: he rejects pleasures to secure
                  other greater pleasures, or else he endures pains to avoid
                  worse pains.
                </p>
              </div>

              <div className="flex lg:gap-2 py-5 md:flex-row flex-col gap-y-2">
                <Image src={BlogImage5} className="w-full" />
                <Image src={BlogImage5} className="w-full" />
                <Image src={BlogImage5} className="w-full" />
              </div>
              <p className="text-16-400">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue.
              </p>
              <div className="pt-5">
                <Link
                  href={"/Contact"}
                  className="text-btn rounded-none text-center color-yellow py-3 px-10"
                >
                  Contact Me
                </Link>
              </div>
            </div> */}
          </div>
          <div className="w-[288px] hidden md:block">
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
      <HorizontalOneAdv
        ads={adsList?.find((item) => item.position.code === "BLOG-MIDDLE")}
      />
      <section className="px-4 py-12 color-white">
        <div className="flex justify-center">
          <div className="gap-10 grid md:grid-cols-3">
            {blogList?.map((item) => (
              <div className="w-full md:max-w-[400px]">
                {item?.thumbnail?.file_path ? (
                  <img
                    alt="img"
                    src={item?.thumbnail?.file_path}
                    className="w-full object-cover"
                    style={{
                      minHeight: "180px",
                      maxHeight: "180px",
                      height: "180px",
                    }}
                  />
                ) : (
                  <Image
                    src={LaptopImage}
                    className="w-full object-cover"
                    style={{
                      minHeight: "180px",
                      maxHeight: "180px",
                      height: "180px",
                    }}
                  />
                )}
                <TravelComponent item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="xl:p-20 sm:p-10 p-2">
        <div className="skeleton w-full h-64 flex items-center justify-center">
          <img
            src={
              adsList?.find((item) => item.position.code === "BLOG-FEATURE-UP")
                ?.document?.file_path
            }
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
      <Resources />
      <EventList enableFilter={true} />
      <InstaFeed />
    </div>
  );
};

export default Blogs;
