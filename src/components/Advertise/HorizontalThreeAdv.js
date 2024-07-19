import React from "react";

const HorizontalThreeAdv = ({ adsList }) => {
  let ads = adsList?.filter(
    (item) =>
      item.position.code === "FEATURED-TOP-1" ||
      item.position.code === "FEATURED-TOP-2" ||
      item.position.code === "FEATURED-TOP-3"
  );
  return (
    <div className="py-10 px-2 xl:px-32 lg:px-10 grid justify-items-center gap-x-2 gap-y-[30px] md:grid-cols-3 xl:gap-x-8">
      {ads?.map((item) => (
        <div className="skeleton w-full h-72 text-white text-center flex items-center justify-center">
          <img
            src={item?.document?.file_path}
            className="w-full h-full object-cover rounded-lg"
            alt="ads"
          />
        </div>
      ))}
    </div>
  );
};

export default HorizontalThreeAdv;
