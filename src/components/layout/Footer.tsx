import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>RÖMER PILS BRUNNEN</h2>
          <p>Frankfurter Spezialitäten & Gutbürgerliche Küche seit 1954.</p>
        </div>
        <div className={styles.links}>
          <div className={styles.col}>
            <h3>Explore</h3>
            <Link href="/menu">Menu</Link>
            <Link href="/about">About Us</Link>
            <Link href="/events">Private Events</Link>
          </div>
          <div className={styles.col}>
            <h3>Contact</h3>
            <p>Töngesgasse 19</p>
            <p>60311 Frankfurt am Main</p>
            <p>+49 69 28 77 12</p>
            <p>info@roemerpilsbrunnen.de</p>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Römer Pils Brunnen. All rights reserved.</p>
      </div>
    </footer>
  );
}
