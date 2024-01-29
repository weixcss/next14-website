"use client"

import styles from "./Links.module.css";
import NavbarLink from "../navbarLink/NavbarLink";
import { useState } from "react";

const Links = () => {
  const [open, setOpen] = useState(false); //must use "use client" for useState

  const links = [
    {
      title: "Homepage",
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

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          //<Link href={link.path} key={link.title}>{link.title}</Link>
          <NavbarLink item={link} key={link.title} /> //Homepage, About, Contact, Blog
        ))}
        {session ? ( //logged in, session = true
          <>
            {isAdmin && <NavbarLink item={{ title: "Admin", path: "/admin" }} />} 
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavbarLink item={{ title: "Login", path: "/login" }} /> //not logged in, session = false
        )}
      </div>

      {/*when menu button/image is clicked, mobile tab with links will open*/}
      <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button> {/*on click set state to !currentstate*/}
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => ( 
            <NavbarLink item={link} key={link.title} /> //Homepage, About, Contact, Blog
          ))}
        </div>
      )}
    </div>
  );
};

{
  /* 
<Link href="/">Homepage</Link>
<Link href="/about">About</Link>
<Link href="/contact">Contact</Link>
<Link href="/contact">Blog</Link>
*/
}

export default Links;
