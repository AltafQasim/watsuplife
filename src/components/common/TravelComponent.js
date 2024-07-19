import Image from "next/image";
import CalendarCheck from "../../assets/Icons/CalendarCheckBlack.svg";
import moment from "moment";
import parse from "html-react-parser";
import Link from "next/link";

const TravelComponent = ({ item }) => {
  return (
    <div className="py-[22px] flex flex-col gap-y-[10px]">
      <div className="flex justify-between items-center">
        <p className="text-E77944 text-14-700 uppercase">{item?.tag?.name}</p>
        <div className="flex items-center gap-2">
          <Image
            src={CalendarCheck}
            alt="calendar check icon"
            // className="size-4"
          />
          <div className="text-14-400 text-nowrap">
            {moment(item?.created_at).format("DD MMM yyyy")}
          </div>
        </div>
      </div>
      <p className="h6-med" style={{ lineHeight: "21.6px" }}>
        {item?.title}
      </p>
      <p className="text-14-400 text-6D6E76" style={{ lineHeight: "21.41px" }}>
        {item?.description && parse(item?.description)}
      </p>
      <Link
        href={`/Blogs/${item?.seo_url}`}
        // target="_blank"
        className="text-57C4F9 text-14-400"
        style={{ lineHeight: "24.96px" }}
      >
        READ MORE
      </Link>
    </div>
  );
};

export default TravelComponent;
