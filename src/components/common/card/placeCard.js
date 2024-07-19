import Image from "next/image";
import React from "react";
import MapPinSolid from "../../../assets/Icons/MapPinSolid.svg";
import { useRouter } from "next/navigation";

const PlaceCard = ({ item }) => {
  const router = useRouter();
  return (
    <div
      className="card w-full cursor-pointer"
      onClick={() => {
        router.push(`/Places/${item?.seo_url}`);
      }}
    >
      {item?.thumbnail?.file_path ? (
        <img
          src={item?.thumbnail?.file_path}
          alt="img"
          className="object-cover w-full h-[300px]"
        />
      ) : (
        <div className="object-cover w-full h-[189px] skeleton rounded-none" />
      )}

      <div className="py-4 text-16-500 color-232536">{item.title}</div>
      <div className="flex items-center">
        <Image src={MapPinSolid} />
        <p className="pl-2 text-16-500 color-292929">0.2 km</p>
      </div>
    </div>
  );
};

export default PlaceCard;
