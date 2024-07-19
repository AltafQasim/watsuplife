"use client";
import aboutHero from "../../assets/images/abouthero.svg";
import aboutHeroMobile from "../../assets/images/aboutHeroMobile.svg";
import about1 from "../../assets/images/about1.svg";
import about2 from "../../assets/images/about2.svg";
import member1 from "../../assets/images/member1.svg";
import member2 from "../../assets/images/member2.svg";
import member3 from "../../assets/images/member3.svg";
import member4 from "../../assets/images/member4.svg";
import CalendarCheck from "../../assets/Icons/CalendarCheck.svg";
import MapTrifold from "../../assets/Icons/MapTrifold.svg";
import Trophy from "../../assets/Icons/Trophy.svg";
import Smiley from "../../assets/Icons/Smiley.svg";
import Image from "next/image";
import {
  FaAngleLeft,
  FaAngleRight,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import Link from "next/link";

const teamMembers = [
  {
    name: "Chili Mili",
    photo: member1,
  },
  {
    name: "Chili Mili",
    photo: member2,
  },
  {
    name: "Chili Mili",
    photo: member3,
  },
  {
    name: "Chili Mili",
    photo: member4,
  },
  {
    name: "Chili Mili",
    photo: member1,
  },
  {
    name: "Chili Mili",
    photo: member2,
  },
  {
    name: "Chili Mili",
    photo: member3,
  },
  {
    name: "Chili Mili",
    photo: member4,
  },
  {
    name: "Chili Mili",
    photo: member1,
  },
  {
    name: "Chili Mili",
    photo: member2,
  },
  {
    name: "Chili Mili",
    photo: member3,
  },
  {
    name: "Chili Mili",
    photo: member4,
  },
];

const stopScroll = () => {
  let st = 0;
  if (window.scrollY !== undefined) {
    st = window.scrollY;
  } else if (document.body.scrollTop !== undefined) {
    st = document.body.scrollTop;
  } else {
    st = document.documentElement.scrollTop;
  }
  setTimeout(() => {
    window.scroll(0, st);
  }, 0);
};

const About = () => {
  return (
    <div className="">
      <section>
        <div className="relative">
          <div className="md:flex-row flex-col flex items-start">
            <div className="flex lg:ms-14 items-center justify-center text-pretty">
              <div className="sm:p-10 xl:p-20 min-h-[356px] p-5 flex flex-col gap-y-5 bg-white z-10">
                <div
                  style={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "20px",
                    letterSpacing: "3px",
                  }}
                  className=""
                >
                  ABOUT US
                </div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "32px",
                    lineHeight: "38.4px",
                  }}
                >
                  We help businesses to build and scale their own dedicated
                  teams at a competitive price in India
                </div>
                <div
                  className="md:hidden mt-2 body-reg"
                  style={{ color: "#4C4C4C" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore
                </div>
              </div>
            </div>
            <div className="p-10 hidden md:block">
              <div
                className="xl:w-4/6 w-5/6 mt-20 body-reg"
                style={{ color: "#4C4C4C" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore
              </div>
            </div>
          </div>
          <div
            className="md:h-[444px] overflow-hidden w-full h-full flex flex-col md:flex-row object-fill bg-no-repeat justify-end md:justify-center items-start md:items-end relative md:-top-12 z-0"
            // style={{ backgroundImage: `url(${aboutHero.src}` }}
          >
            <Image
              src={aboutHero}
              alt="About Image"
              className="md:block hidden object-cover absolute top-0 min-w-full min-h-full z-0"
            />
            <Image
              src={aboutHeroMobile}
              alt="About Image"
              className="object-cover md:hidden absolute top-0 min-w-full min-h-full z-0"
            />
            <div className="z-10 md:w-fit mt-20 md:mt-0 xl:me-56">
              <div className="md:py-10 py-5 px-5 color-yellow flex md:flex-row flex-col gap-y-[30px] gap-x-[20px] min-[768px]:gap-x-[1px] min-[924px]:gap-10 items-start">
                <div className="flex items-center justify-start gap-[20px]">
                  <div>
                    <Image
                      src={CalendarCheck}
                      alt="calendar"
                      className="min-w-14 max-w14 w-14 min-h-14 max-h-14 h-14"
                    />
                  </div>
                  <div>
                    <h5 className="h5-med">1200 +</h5>
                    <h4 className="h4-bold">Events</h4>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-[20px]">
                  <div>
                    <Image
                      src={MapTrifold}
                      alt="calendar"
                      className="min-w-14 max-w14 w-14 min-h-14 max-h-14 h-14"
                    />
                  </div>
                  <div>
                    <h5 className="h5-med">500 +</h5>
                    <h4 className="h4-bold">Places</h4>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-[20px]">
                  <div>
                    <Image
                      src={Trophy}
                      alt="trophy"
                      className="min-w-14 max-w14 w-14 min-h-14 max-h-14 h-14"
                    />
                  </div>
                  <div>
                    <h5 className="h5-med">12 +</h5>
                    <h4 className="h4-bold">Experience</h4>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-[20px]">
                  <div>
                    <Image
                      src={Smiley}
                      alt="smiley"
                      className="min-w-14 max-w14 w-14 min-h-14 max-h-14 h-14"
                      width={56}
                    />
                  </div>
                  <div>
                    <h5 className="h5-med">3000 +</h5>
                    <h4 className="h4-bold">Satisfaction</h4>
                  </div>
                </div>
              </div>
              <div className="md:flex hidden items-center w-full">
                <div className="w-2/6 h-6 color-orange"></div>
                <div className="w-2/6 h-6 color-white"></div>
                <div className="w-2/6 h-6 color-primary"></div>
              </div>
            </div>
            <div className="md:hidden flex items-center z-0 w-full">
              <div className="w-2/6 h-6 color-orange"></div>
              <div className="w-2/6 h-6 color-white"></div>
              <div className="w-2/6 h-6 color-primary"></div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="lg:p-20 md:p-10 p-5 py-10"
        style={{ backgroundColor: "#F4F0F8" }}
      >
        <div className="flex md:flex-row flex-col items-center justify-center gap-10 text-pretty">
          <div className="flex flex-col gap-y-6">
            <div className="text-16-700">OUR MISION</div>
            <div className="text-28-700">
              It is a long established fact that a reader will be distracted
            </div>
            <div
              className="body-reg"
              style={{ color: "#4C4C4C", lineHeight: "28px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="text-16-700">OUR VISION</div>
            <div className="text-28-700">
              Many desktop publishing packages and web page editors now
            </div>
            <div
              className="body-reg"
              style={{ color: "#4C4C4C", lineHeight: "28px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 md:pt-20">
        <div className="grid grid-cols-12">
          <div className="md:col-span-6 col-span-12 flex flex-col justify-center gap-y-6 sm:p-5 md:p-10 lg:p-20 p-3">
            <div className="text-30-700">Our team of creatives</div>
            <div className="h6-med">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </div>
            <div className="body-reg" style={{ color: "#4C4C4C" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat..
            </div>
          </div>
          <div className="md:col-span-6 col-span-12 p-3">
            <Image src={about1} className="mx-auto" />
          </div>
          <div className="md:col-span-6 col-span-12 row-end-12 md:row-auto p-3">
            <Image src={about2} className="mx-auto" />
          </div>
          <div className="md:col-span-6 col-span-12 flex flex-col justify-center gap-y-6 sm:p-5 md:p-10 lg:p-20 p-3">
            <div className="text-30-700">
              All the Lorem Ipsum generators on the
            </div>
            <div className="h6-med">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </div>
            <div className="body-reg" style={{ color: "#4C4C4C" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat..
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-10 md:py-20 md:px-20"
        style={{
          background: `radial-gradient(circle at 50% 53%, rgba(43, 187, 255, 0.39) -80%, rgba(255, 254, 255, 0.55) 62%)`,
        }}
      >
        <div className="flex items-center justify-center md:justify-between mb-14">
          <div className="text-center md:text-start">
            <div className="h5-reg">Team Member</div>
            <div className="flex md:justify-start justify-center">
              <div className="py-1 flex flex-col items-center sm:justify-start">
                <div className="h2-bold z-10">Our Team Member</div>
                <div
                  className="h-[12px] relative -top-[10px] z-10 w-52 min-[419px]:w-full"
                  style={{
                    background: "#57C4F9",
                    filter: "blur(7px)",
                    borderRadius: "10px",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="md:flex hidden items-center gap-x-4">
            <a
              href={`#member${0}`}
              className="btn color-secondary min-h-8 h-8 max-h-8 w-8 p-0"
              onClick={() => stopScroll()}
            >
              <FaAngleLeft color="white" />
            </a>
            <a
              href={`#member${teamMembers.length - 1}`}
              className="btn color-primary border-sky-500 min-h-8 h-8 max-h-8 w-8 p-0"
              onClick={() => stopScroll()}
            >
              <FaAngleRight color="white" />
            </a>
          </div>
        </div>
        <div>
          <div className="carousel carousel-center w-full p-4 space-x-5 bg-transparent rounded-none snap-none">
            {teamMembers.map((member, index) => (
              <div
                id={`member${index}`}
                className="carousel-item"
                style={{ height: "427px", width: "270px" }}
              >
                <div className="card rounded-none bg-white">
                  <Image
                    src={member.photo}
                    alt="member photo"
                    className="object-fill w-full h-[300px]"
                  />
                  <div className="h-[5px] color-primary w-full"></div>
                  <div className="card-body text-center h-[122px] items-center justify-center p-0">
                    <h2 className="h5-med" style={{ lineHeight: "24px" }}>
                      {member.name}
                    </h2>
                    <p className="body-reg grow-0">Whatsuplife</p>
                    <div className="flex justify-center items-center gap-4">
                      <Link href={"javascript:void(0)"}>
                        <FaFacebook color="#0FABF5" />
                      </Link>
                      <Link href={"javascript:void(0)"}>
                        <FaTwitter color="#0FABF5" />
                      </Link>
                      <Link href={"javascript:void(0)"}>
                        <FaInstagram color="#0FABF5" />
                      </Link>
                      <Link href={"javascript:void(0)"}>
                        <FaLinkedinIn color="#0FABF5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:hidden flex justify-center mt-5 items-center gap-x-4">
          <a
            href={`#member${0}`}
            className="btn color-secondary min-h-8 h-8 max-h-8 w-8 p-0"
            onClick={() => stopScroll()}
          >
            <FaAngleLeft color="white" />
          </a>
          <a
            href={`#member${teamMembers.length - 1}`}
            className="btn color-primary border-sky-500 min-h-8 h-8 max-h-8 w-8 p-0"
            onClick={() => stopScroll()}
          >
            <FaAngleRight color="white" />
          </a>
        </div>
      </section>
      <section className="color-primary py-20">
        <div className="text-pretty">
          <div className="mx-auto w-full sm:w-3/4 lg:w-1/3 text-white text-center flex flex-col gap-[30px] items-center justify-center">
            <div
              className="h3-bold"
              style={{
                fontsize: "36px",
                fontweight: 700,
                lineheight: "48px",
                letterspacing: "-2px",
              }}
            >
              Join our team to be a part of our story
            </div>
            <div className="body-reg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </div>
            <Link
              href={"/Contact"}
              className="btn h6-bold px-[48px] h-14 hover:text-white text-black rounded-none color-yellow border-none"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
