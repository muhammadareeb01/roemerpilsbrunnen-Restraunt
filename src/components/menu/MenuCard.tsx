'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MenuItem } from '@/lib/types';
import { VegDot } from '@/components/ui/VegDot';
import { QtyController } from './QtyController';
import styles from './MenuCard.module.css';

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <motion.div 
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.imageWrapper}>
        <Image 
          src={item.imageUrl} 
          alt={item.name} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={styles.image}
        />
        <div className={styles.badges}>
          {item.isVeg && <VegDot />}
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.desc}>{item.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>€{item.price.toFixed(2)}</span>
          <QtyController item={item} />
        </div>
      </div>
    </motion.div>
  );
}
