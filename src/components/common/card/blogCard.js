import React from "react";
import TravelComponent from "../TravelComponent";

const BlogCard = ({ item }) => {
  return (
    <div className="w-full">
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
        <div
          className="w-full object-cover skeleton rounded-none"
          style={{
            minHeight: "180px",
            maxHeight: "180px",
            height: "180px",
          }}
        />
      )}
      <TravelComponent item={item} />
    </div>
  );
};

export default BlogCard;
