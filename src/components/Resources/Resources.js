import React, { useEffect, useState } from "react";
import FeaturedResources from "./FeaturedResources";
import { GetListOfBlogs } from "@/api/blog";
import moment from "moment";

const Resources = () => {
  const [listData, setListData] = useState({ trending: [], features: [] });
  const lists = async () => {
    const featuresRes = await GetListOfBlogs(
      JSON.stringify({ entity_type: "FEATURED" })
    );
    const trendingRes = await GetListOfBlogs(
      JSON.stringify({ entity_type: "TRENDING" })
    );
    setListData((prev) => ({
      features: featuresRes.data,
      trending: trendingRes.data,
    }));
  };
  useEffect(() => {
    lists();
  }, []);
  return (
    <section className="h-9/12 max-h-9/12 py-10 md:p-20">
      <div className="grid grid-cols-12 md:gap-16">
        <div className="col-span-12 lg:col-span-7">
          <div className="mb-2 text-center md:text-start">
            <div className="h5-reg">News</div>
            <div className="flex md:justify-start justify-center mb-10">
              <div className="py-1 flex flex-col justify-start items-center">
                <div className="h2-bold z-10">Featured Resources</div>
                <div
                  className="h-[12px] relative -top-[10px] z-10 w-60 sm:w-full"
                  style={{
                    background: "#0FABF5",
                    filter: "blur(7px)",
                    borderRadius: "10px",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <FeaturedResources data={listData?.features} />
        </div>
        <div className="col-span-12 lg:col-span-5 ">
          <div className="flex mt-4 md:mt-0 items-center justify-between mb-6 px-3 md:px-0">
            <h1 className="h3-bold">Trending</h1>
            <div className="text-sky-500 h5-med cursor-pointer">View All</div>
          </div>
          <div className="bg-white overflow-y-auto h-[543px]">
            {listData?.trending?.slice(0, 3)?.map((item) => (
              <div className="flex items-start gap-5 p-5 xl:p-6 hover:bg-sky-500 hover:text-white group">
                <img
                  src={item?.thumbnail?.file_path}
                  className="rounded-xl w-[88px] h-[88px] object-cover"
                />
                <div>
                  <div className="body-reg">
                    {moment(item?.created_at).format("MMM DD,YYYY")}
                  </div>
                  <div className="mt-2 h5-med" style={{ lineHeight: "24px" }}>
                    {item?.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
