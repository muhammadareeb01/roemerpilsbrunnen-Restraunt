'use client';
import { motion } from 'framer-motion';
import styles from './FeatureStrip.module.css';

const features = [
  { title: 'Seit 1954', desc: 'Over 70 years of history' },
  { title: 'Gutbürgerlich', desc: 'Authentic local cuisine' },
  { title: 'Frisch Gezapft', desc: 'Premium German draft beers' },
  { title: 'Gemütlich', desc: 'Warm Frankfurt hospitality' },
];

export function FeatureStrip() {
  return (
    <section className={styles.stripWrapper}>
      <motion.div 
        className={styles.strip}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={styles.container}>
          {features.map((f, i) => (
            <div key={i} className={styles.featureItem}>
              <span className={styles.number}>0{i + 1}</span>
              <div className={styles.text}>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
