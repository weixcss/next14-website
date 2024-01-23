import Links from "./links/Links";
import "./Navbar.css";

const Navbar = () => {

  return (
    <div className="container">
      <div>Logo</div>
      <div>
        <Links />
        {/* 
        <Link href="/">Homepage</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/contact">Blog</Link>
        */}
      </div>
    </div>
  )
}

export default Navbar