'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    name: "Dorothea E.",
    text: "I would like to thank you. I have eaten at your restaurant many times and found it wonderful every single time! Great German specialties.",
    rating: 5,
    role: "Regular Guest"
  },
  {
    name: "Imke M.",
    text: "This place is highly recommended in every respect! The dishes are delicious and reasonably priced, the atmosphere is cozy, and the staff is extremely friendly and attentive.",
    rating: 5,
    role: "Frankfurt Local"
  },
  {
    name: "Herbert K.",
    text: "We randomly found this pub last December and tried their roasted goose. We were so thrilled we drove back to Frankfurt a week later just to eat here again!",
    rating: 5,
    role: "Tourist"
  },
  {
    name: "Helmut K.",
    text: "Thank you for the excellent traditional food and the exceptionally friendly service. We will definitely come back next year during the trade fair!",
    rating: 5,
    role: "Business Traveler"
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax values for floating dishes
  const x1 = useTransform(smoothProgress, [0, 1], [-350, 350]);
  const y1 = useTransform(smoothProgress, [0, 1], [-100, 100]);
  const rotate1 = useTransform(smoothProgress, [0, 1], [-45, 15]);

  const x2 = useTransform(smoothProgress, [0, 1], [350, -350]);
  const y2 = useTransform(smoothProgress, [0, 1], [100, -100]);
  const rotate2 = useTransform(smoothProgress, [0, 1], [45, -15]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className={styles.section} ref={containerRef}>
      <motion.div 
        className={styles.parallaxItem1} 
        style={{ x: x1, y: y1, rotate: rotate1, willChange: 'transform' }}
        aria-hidden="true"
      >
        <img src="/images/german-appetizers.png" alt="" className={styles.parallaxImg} />
      </motion.div>
      
      <motion.div 
        className={styles.parallaxItem2} 
        style={{ x: x2, y: y2, rotate: rotate2, willChange: 'transform' }}
        aria-hidden="true"
      >
        <img src="/images/apfelstrudel-dessert.png" alt="" className={styles.parallaxImg} />
      </motion.div>

      <div className={styles.container}>
        <div className={styles.header}>
          <SectionEyebrow>Guest Reviews</SectionEyebrow>
          <h2 className={styles.title}>What Our Guests Say</h2>
        </div>
        
        <div className={styles.carouselContainer}>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {TESTIMONIALS.map((t, idx) => (
                <div className={styles.emblaSlide} key={idx}>
                  <div className={styles.card}>
                    <div className={styles.stars}>
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={20} fill="var(--terra)" color="var(--terra)" />
                      ))}
                    </div>
                    <p className={styles.text}>"{t.text}"</p>
                    <div className={styles.authorInfo}>
                      <span className={styles.authorName}>{t.name}</span>
                      <span className={styles.authorRole}>{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className={styles.navBtn} onClick={scrollPrev} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={scrollNext} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
