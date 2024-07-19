"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import brandLogo from "../../assets/svg/brandlogo.svg";
import mappinIcon from "../../assets/Icons/location.svg";
import listIcon from "../../assets/Icons/List.svg";
import MagnifyingGlass from "../../assets/Icons/search-normal.svg";
import FacebookIcon from "../../assets/Icons/FacebookLogo.svg";
import GoogleIcon from "../../assets/Icons/GoogleLogo.svg";
import InstagramIcon from "../../assets/Icons/InstagramLogo.svg";
import YoutubeIcon from "../../assets/Icons/YoutubeLogo.svg";
import XIcon from "../../assets/Icons/X.svg";
import HomeIcon from "../../assets/Icons/HomeIcon.svg";
import GretarthenIcon from "../../assets/Icons/GretarthenIcon.svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { onChangeCity } from "../../lib/features/citySlice";
import { GetListOfPredefinedData } from "@/api/predefined";
import { useDebouncedCallback } from "use-debounce";
import { Search } from "@/api/search";

const MenuItems = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/About", current: false },
  // { name: "Cities", href: "#", current: false },
  // { name: "Places", href: "/Places", current: false },
  // { name: "Blogs", href: "#", current: false },
  // { name: "Events", href: "/Events", current: false },
  { name: "Contact Us", href: "/Contact", current: false },
];

const MobileMenuItems = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/About", current: false },
  { name: "Cities", href: "/Cities", current: false },
  { name: "Places", href: "/Places", current: false },
  { name: "Blogs", href: "/Blogs", current: false },
  { name: "Events", href: "/Events", current: false },
  { name: "Contact Us", href: "/Contact", current: false },
  { name: "Privacy Policy", href: "javascript:void(0)", current: false },
  { name: "Terms Of Service", href: "javascript:void(0)", current: false },
];

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const inputRef = useRef();
  const citiValue = useSelector((state) => state.city.value);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (path) => path === pathname;
  const [citiesList, setCitiesList] = useState([]);
  const lists = () => {
    GetListOfPredefinedData(JSON.stringify({ entity_type: "CITY" })).then(
      (res) => {
        setCitiesList(res.data.data);
      }
    );
  };
  useEffect(() => {
    lists();
  }, []);

  const handleSearch = useDebouncedCallback((term) => {
    let payload = {
      search: term,
      page: 1,
      per_page: 10,
    };
    Search(JSON.stringify(payload)).then((res) => {
      if (res.data.message) {
        setSearchData([]);
      } else {
        setSearchData(res.data.data);
      }
    });
  }, 500);

  function capitalizeFirstLetter(type) {
    if (type === "blog") {
      return "/Blogs";
    } else if (type === "event") {
      return "/Events";
    } else if (type === "places") {
      return "/Places";
    } else {
      return "javascript:void(0)";
    }
  }

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <nav className="color-white">
          <div className="mx-auto 2xl:container px-2">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute z-10 inset-y-0 right-0 flex items-center md:hidden">
                {/* <!-- Mobile menu button--> */}
                <Image src={MagnifyingGlass} />
                {!isMenu ? (
                  <label
                    htmlFor="my-drawer-3"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost"
                    onClick={() => setIsMenu(true)}
                  >
                    <Image src={listIcon} />
                  </label>
                ) : (
                  <label
                    htmlFor="my-drawer-3"
                    id="close-menu"
                    aria-label="close sidebar"
                    className="drawer-overlay btn btn-square btn-ghost"
                    onClick={() => setIsMenu(false)}
                  >
                    <Image src={XIcon} />
                  </label>
                )}
              </div>

              <div className="flex z-0 absolute  md:w-[15rem] inset-0 items-center justify-center md:static">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="w-auto"
                    src={brandLogo}
                    alt="Your Company"
                  />
                </div>
              </div>

              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="">
                  <div className="form-control hidden w-[32rem] md:flex md:flex-row items-center justify-center border-2 px-[15px] py-[10px] rounded-[10px]">
                    <Image src={MagnifyingGlass} className="w-6 h-6" />
                    <input
                      id="search"
                      type="text"
                      placeholder="Search for  Events, Places, Cities, and Activities"
                      className="w-32 bg-white md:w-full md:min-w-80 text-left outline-none py-0 h-[26px] ps-[10px] body-reg placeholder:text-[#AAAAAA]"
                      style={{ lineHeight: "24px" }}
                      onChange={(e) => handleSearch(e.target.value)}
                      ref={inputRef}
                    />
                  </div>
                </div>
                {searchData.length ? (
                  <div
                    className="dropdown-content menu menu-sm h-72 overflow-y-auto  mt-2 z-[1] p-3 shadow rounded-box w-full bg-white"
                    // tabIndex={0}
                  >
                    <ul className="">
                      {searchData.length ? (
                        searchData?.map((item) => (
                          <li
                            onClick={() => {
                              inputRef.current.value = "";
                              setSearchData([]);
                            }}
                          >
                            <Link href={capitalizeFirstLetter(item?.type)}>
                              {item?.title}
                            </Link>
                          </li>
                        ))
                      ) : (
                        <li>No data found</li>
                      )}
                    </ul>
                  </div>
                ) : null}
              </div>
              <div className="absolute inset-y-0 md:w-[15rem] left-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                <div className="flex items-center md:ms-6">
                  <Image src={mappinIcon} />
                  <select
                    className="py-1 text-14-400 text-wrap bg-transparent w-full outline-none cursor-pointer capitalize"
                    onChange={(e) => {
                      dispatch(onChangeCity(e.target.value));
                      let findedCity = citiesList?.find(
                        (item) => item.predefined_id === Number(e.target.value)
                      );
                      router.push(`/Cities/${findedCity?.name}`);
                    }}
                    value={citiValue}
                  >
                    <option disabled selected value={""}>
                      Select City
                    </option>
                    {citiesList?.map(({ name, predefined_id }) => (
                      <option value={predefined_id}>{name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="color-light h-[60px]">
            <div className="mx-auto 2xl:container hidden py-2 md:block h-full">
              {
                MenuItems.some((item) => item.href === pathname) ? (
                  <div className="flex space-x-4 items-center justify-center gap-6 text-nowrap h-full">
                    {MenuItems.map(({ name, href, current }) => (
                      <Link
                        href={href}
                        className={`hover:text-sky-500 body-med py-2 ${
                          isActive(href) ? "text-sky-500" : ""
                        }`}
                        aria-current="page"
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center lg:pl-[92px] py-2 gap-3 h-full ">
                    <Link href={"/"} className="pl-2">
                      <Image src={HomeIcon} />
                    </Link>
                    <Image src={GretarthenIcon} />
                    <Link
                      href={"javascript:void(0)"}
                      className="body-med text-0FABF5 pt-1"
                    >
                      {pathname.split("/")[1]}
                    </Link>
                  </div>
                )
                // {/* // <div className="pl-3 body-med breadcrumbs flex">
                // //   <ul>
                // //   <li><Link href={"/"}><Image src={HomeIcon}/></Link></li>
                // //   <li><Link href={"javascript:void(0)"} className="body-med text-0FABF5 pt-1">{pathname.split('/')[1]}</Link></li>

                // //   </ul>
                // //   </div> */}
              }
            </div>
          </div>
        </nav>
      </div>
      <div className="justify-items-center drawer-side mt-20 z-20 ">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu w-full min-h-full color-light justify-between">
          <ul className="">
            {MobileMenuItems.map(({ name, href, current }) => (
              <li>
                <Link
                  href={href}
                  className={`text-black text-center block rounded-md px-3 py-2 body-med ${
                    isActive(href) ? "text-sky-500" : ""
                  }`}
                  aria-current="page"
                  onClick={() => {
                    const element = document.getElementById("close-menu");
                    element.click();
                  }}
                >
                  {name}
                </Link>

                <div className="divider m-0"></div>
              </li>
            ))}
          </ul>{" "}
          <div className="flex sm:flex-row flex-col gap-y-5 items-center justify-center sm:justify-between p-5 mb-20">
            <div className="copyright-text">
              © 2024 <span className="text-blue-400">whatsuplife.</span> All
              Rights Reserved.
            </div>
            <div className="flex items-center gap-3">
              <a href="javascript:void(0)">
                <Image
                  className="size-6"
                  src={FacebookIcon}
                  alt="Facebook icon"
                />
              </a>
              <a href="javascript:void(0)">
                <Image
                  className="size-6"
                  src={InstagramIcon}
                  alt="Instagram icon"
                />
              </a>
              <a href="javascript:void(0)">
                <Image
                  className="size-6"
                  src={YoutubeIcon}
                  alt="Youtube icon"
                />
              </a>
              <a href="javascript:void(0)">
                <Image className="size-6" src={GoogleIcon} alt="Google icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
