import React from "react";

const HorizontalOneAdv = ({ ads }) => {
  return (
    <div className="xl:p-20 sm:p-10 p-2 flex flex-col gap-y-[30px]">
      <div className="skeleton w-full h-64 flex items-center justify-center">
        <img
          src={ads?.document?.file_path}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="skeleton w-full h-64 md:hidden flex items-center justify-center">
        <img
          src={ads?.document?.file_path}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default HorizontalOneAdv;
