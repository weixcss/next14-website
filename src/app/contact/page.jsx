import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

export default function ContactPage() {
  return (
    <div className={styles.container}> {/* Contact Page Container*/}
      <div className={styles.imgContainer}> {/* Contact Page Image Container*/}
        <Image src="/contact.png" alt="" fill className={styles.img} /> 
      </div>
      <div className={styles.formContainer}> {/* Contact Page Form Container*/}
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send Email</button>
        </form>
      </div>
    </div>
  )
}
