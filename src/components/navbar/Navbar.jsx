import Link from "next/link";
import Links from "./links/Links";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Wei Zhu</Link> {/* Makes the logo clickable, redirect to homepage*/}
      <div>
        <Links />
      </div>
      {/* Same as this
        <Link href="/">Homepage</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/contact">Blog</Link>
      */}

    </div>
  )
}

export default Navbar