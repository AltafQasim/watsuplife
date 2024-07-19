"use client";
import Link from "next/link";
import styles from "./menulinks.module.css";
import { usePathname } from "next/navigation";

export default function Menulinks({ item }) {
  const pathname = usePathname();
  return (
    <div
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      <Link href={item.path} key={item.title} className="text-3xl">
        {item.title}
      </Link>
    </div>
  );
}
