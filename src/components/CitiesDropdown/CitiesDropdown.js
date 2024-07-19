// import { useState } from "react";

const CitiesDropdown = () => {
  //   const [cities, setCities] = useState([
  //     {
  //       City: "SGM",
  //       State: "Rajasthan",
  //       District: "Ganganagar",
  //     },
  //     {
  //       City: "STR",
  //       State: "Rajasthan",
  //       District: "Ganganagar",
  //     },
  //     {
  //       City: "A.Thirumuruganpoondi",
  //       State: "Tamil Nadu",
  //       District: "Coimbatore",
  //     },
  //     {
  //       City: "A.Vellalapatti",
  //       State: "Tamil Nadu",
  //       District: "Madurai",
  //     },
  //   ]);

  return (
    <div className="">
      <select
        id="country"
        name="country"
        autoComplete="country-name"
        className="block w-full border-0 py-1.5 text-gray-900 sm:max-w-xs sm:text-sm sm:leading-6"
      >
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select>
    </div>
  );
};

export default CitiesDropdown;
