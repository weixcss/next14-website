import Image from "next/image"
import styles from "./about.module.css"

export default function AboutPage() {
  return (
    <div>
      {/* <img src="/about.png"></img>*/}
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill/>
        <Image src="https://images.pexels.com/photos/19798304/pexels-photo-19798304/free-photo-of-manhattan-bridge.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load
" alt="" fill/>
      </div>

    </div>
  )
}
