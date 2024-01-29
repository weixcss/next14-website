import Links from "./links/Links";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
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