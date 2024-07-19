import React from "react";

const VeriticalTwoAdv = ({ ads1, ads2 }) => {
  return (
    <div>
      <div className="w-full h-80 flex items-center justify-center rounded-lg">
        <img
          src={ads1?.document?.file_path}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="w-full h-80 flex items-center justify-center rounded-lg mt-[30px]">
        <img
          src={ads2?.document?.file_path}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default VeriticalTwoAdv;
