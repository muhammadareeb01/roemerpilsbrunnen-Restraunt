'use client';
import Image from 'next/image';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { motion } from 'framer-motion';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionEyebrow className={styles.centerEyebrow}>Our Philosophy</SectionEyebrow>
          <h1 className={styles.heroQuote}>
            "Gutbürgerliche Frankfurter Küche seit 1954. Tradition, Gemütlichkeit und echte <i>Gastfreundschaft</i> im Herzen von Frankfurt."
          </h1>
          <p className={styles.heroAuthor}>— Römer Pils Brunnen Team</p>
        </motion.div>
      </section>

      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <motion.div 
              className={styles.storyText}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <SectionEyebrow>Our Heritage</SectionEyebrow>
              <h2>Over 70 years of culinary <i>History</i> in Frankfurt.</h2>
              <p>
                Römer Pils Brunnen was established in 1954 on Töngesgasse in the historic center of Frankfurt am Main. For generations, we have been a meeting place for locals and visitors seeking authentic Frankfurt specialties and gutbürgerliche German cuisine.
              </p>
              <p>
                Whether it is our signature cured pork chops (Frankfurter Rippchen), fresh pork knuckle (Schweinshaxe), or homemade liver dumpling soup, everything is prepared using classic recipes passed down through decades of culinary tradition.
              </p>
            </motion.div>
            
            <motion.div 
              className={styles.storyImages}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.imgMain}>
                <Image src="/images/frankfurt-plate.png" alt="Traditional Frankfurt Platter" fill className={styles.img} />
              </div>
              <div className={styles.imgAccentWrapper}>
                <div className={styles.imgAccent}>
                  <Image src="/images/hero-pils.png" alt="Fresh Draft Beer" fill className={styles.img} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.valuesOverlay}></div>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.valuesTitle}>Our Core <i>Pillars</i></h2>
          </motion.div>
          
          <div className={styles.valueList}>
            <motion.div 
              className={styles.valueItem}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className={styles.glowEffect}></div>
              <span className={styles.valueNum}>01</span>
              <h3>Authentic Recipes</h3>
              <p>We cook according to the traditional Frankfurt culinary heritage, sourcing high-quality local ingredients.</p>
            </motion.div>
            
            <motion.div 
              className={styles.valueItem}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.glowEffect}></div>
              <span className={styles.valueNum}>02</span>
              <h3>Fresh Draft Beers</h3>
              <p>Serving fresh Binding Pilsner and regional wheat beers poured to perfection with the perfect thick foam head.</p>
            </motion.div>
            
            <motion.div 
              className={styles.valueItem}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className={styles.glowEffect}></div>
              <span className={styles.valueNum}>03</span>
              <h3>Echte Gemütlichkeit</h3>
              <p>A welcoming tavern atmosphere where every guest feels like family and returns for the warm hospitality.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
