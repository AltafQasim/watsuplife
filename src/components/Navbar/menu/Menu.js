import Link from "next/link";
import styles from "./menu.module.css"
import Menulinks from "./menulinks/menulinks";

export const Menu = () => {
  const menus = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div className={styles.link}>
      {menus.map((menu) => (
       <Menulinks item={menu}/>
      ))}
      
    </div>
  );
};
