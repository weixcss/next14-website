"use client";
import { usePathname } from "next/navigation";
import styles from "./NavbarLink.module.css";
import Link from "next/link"


const NavbarLink = ({item}) => {

  const pathName = usePathname();

  return (
    <Link 
      href={item.path} 
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  )
}

export default NavbarLink