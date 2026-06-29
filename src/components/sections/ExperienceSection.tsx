'use client';
import { useRef } from 'react';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import buttonStyles from '@/components/ui/Button.module.css';
import styles from './ExperienceSection.module.css';

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], [-80, 80]);

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionEyebrow>Local Traditions</SectionEyebrow>
          <h2 className={styles.title}>Traditional <i>Cooking</i><br/>Since 1954</h2>
          <p className={styles.text}>
            At Römer Pils Brunnen, we are dedicated to preserving the rich heritage of Frankfurt home-cooking. From our crispy pork knuckle (Schweinshaxe) roasted fresh daily to our signature cured pork chops (Rippchen), we serve hearty, gutbürgerliche dishes made with love.
          </p>
          <Link href="/menu" className={`${buttonStyles.button} ${buttonStyles.primary}`}>
            Explore Specials
          </Link>
        </motion.div>
        
        <div className={styles.imageCol}>
          <div className={styles.imgWrapper}>
            <motion.div 
              style={{ y, height: '125%', width: '100%', position: 'absolute', top: '-12.5%', left: 0, willChange: 'transform' }}
            >
              <Image 
                src="/images/frankfurt-plate.png" 
                alt="Frankfurter Platter" 
                fill 
                className={styles.img} 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
