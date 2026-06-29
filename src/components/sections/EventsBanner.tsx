import Link from 'next/link';
import Image from 'next/image';
import buttonStyles from '@/components/ui/Button.module.css';
import styles from './EventsBanner.module.css';

export function EventsBanner() {
  return (
    <section className={styles.section}>
      <Image src="/images/ambiance.png" alt="Event Ambiance" fill className={styles.bgImage} />
      <div className={styles.overlay} />
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Host your next event with us</h2>
          <p className={styles.desc}>From corporate dinners to private celebrations, discover our tailored event packages.</p>
          <Link href="/events" className={`${buttonStyles.button} ${buttonStyles.primary}`}>
            Explore Events
          </Link>
        </div>
      </div>
    </section>
  );
}
