import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.landingWrap}>
        <div className={styles.right}>
          <Image
            src="https://layeredlabs.co.kr/rocketman.svg"
            alt="Rocketman Astronaut"
            className={styles.rocketman}
            width={370}
            height={260}
            priority
          />
        </div>
        <div className={styles.left}>
          <h1 className={styles.title}>LAUNCHING SOON</h1>
          <p className={styles.desc}>
            My new venture is taking off ... want to get on board?
          </p>
          <a className={styles.emailBtn} href="mailto:jongwon@layeredlabs.co.kr">EMAIL ME</a>
        </div>
      </div>
      <footer className={styles.footer}>
        <Image
          src="https://layeredlabs.co.kr/logo.png"
          alt="Layeredlabs Logo"
          className={styles.footerLogo}
          width={260}
          height={120}
          priority
        />
        <div className={styles.footerCopyrightNew}>© 2025. All Rights Reserved.</div>
      </footer>
    </div>
  );
}
