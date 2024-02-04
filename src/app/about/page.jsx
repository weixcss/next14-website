import Image from "next/image"
import styles from "./about.module.css"

export default function AboutPage() {
  return (
    <div>
      {/* <img src="/about.png"></img>*/}
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.aboutTitle}>About Me</h2> {/* About Page Title*/}
          <h1 className={styles.subtitle}>I create digital ideas that are bigger, bolder, braver, and better.</h1>
          <p className={styles.description}> {/* About Page Description*/}
            We create digital ideas that are bigger, bolder, braver and better. We
            believe in good ideas flexibility and precission We’re world’s Our
            Special Team best consulting & finance solution provider. Wide range
            of web and software development services.
          </p>

          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Years of Experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Years of Experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <Image src="/about.png" alt="About Image" fill className={styles.img}/>
        </div>

      </div>

    </div>
  )
}
