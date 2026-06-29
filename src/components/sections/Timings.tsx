import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import Image from 'next/image';
import styles from './Timings.module.css';

export function Timings() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.imgWrapper}>
            <Image src="/images/hero-pils.png" alt="Römer Pils Brunnen Pub" fill className={styles.img} />
          </div>
        </div>
        <div className={styles.infoCol}>
          <div className={styles.infoCard}>
            <SectionEyebrow>Get In Touch</SectionEyebrow>
            <h2 className={styles.title}>Contact & Hours</h2>
            <div className={styles.table}>
              <div className={styles.row}>
                <span>Monday - Sunday</span>
                <span>10:00 - 24:00</span>
              </div>
            </div>
            
            <div className={styles.location}>
              <h3 className={styles.locTitle}>Location</h3>
              <p className={styles.locText}>Töngesgasse 19<br/>60311 Frankfurt am Main<br/>Germany</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
