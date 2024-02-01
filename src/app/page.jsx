import styles from './home.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Full Stack Software Engineer</h1>
        <p>
          Hi, I'm a full stack software engineer with a passion for creating and building things. 
          I have experience in building web applications, mobile applications, and backend services. 
          I'm always looking for new opportunities to learn and grow as a developer.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brandsImg}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div>
      </div>

      <div className={styles.rightImg}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  )
}
