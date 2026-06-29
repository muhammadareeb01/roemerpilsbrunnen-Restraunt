'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';

const CAROUSEL_IMAGES = [
  { src: '/images/hero-pils.png', alt: 'Fresh Binding Pilsner Draft Beer' },
  { src: '/images/frankfurt-plate.png', alt: 'Traditional Frankfurter Platte' },
  { src: '/images/cocktail.png', alt: 'Premium Craft Cocktails' },
  { src: '/images/ambiance.png', alt: 'Cozy Modern Ambiance' },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Römer Pils<br/><i>Brunnen</i></h1>
          <p className={styles.subtitle}>
            Frankfurter Spezialitäten & gutbürgerliche Küche seit 1954. Experience traditional home-cooked recipes, fresh draft beers, and heartfelt hospitality in the heart of Frankfurt.
          </p>
          <div className={styles.actions}>
            <Link href="/menu" className={styles.primaryBtn}>
              Explore Menu
            </Link>
            <Link href="/order" className={styles.primaryBtn} style={{ background: 'transparent', border: '1px solid var(--terra)', boxShadow: 'none' }}>
              Order Online
            </Link>
          </div>
        </div>
        
        <div className={styles.imageCol}>
          <div className={styles.carouselWrapper}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={styles.carouselImageContainer}
              >
                <Image 
                  src={CAROUSEL_IMAGES[index].src} 
                  alt={CAROUSEL_IMAGES[index].alt} 
                  fill
                  priority
                  className={styles.carouselImage}
                />
              </motion.div>
            </AnimatePresence>
            
            <div className={styles.indicatorContainer}>
              {CAROUSEL_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`${styles.indicator} ${i === index ? styles.activeIndicator : ''}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
