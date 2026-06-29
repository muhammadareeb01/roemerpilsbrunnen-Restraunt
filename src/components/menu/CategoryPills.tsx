'use client';
import { CATEGORIES } from '@/lib/menu-data';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useScrolled } from '@/hooks/useScrolled';
import styles from './CategoryPills.module.css';

interface CategoryPillsProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export function CategoryPills({ activeCategory, onCategoryChange }: CategoryPillsProps) {
  const scrolled = useScrolled(120);

  return (
    <div className={clsx(styles.wrapper, scrolled && styles.sticky)}>
      <div className={styles.container}>
        <button 
          className={clsx(styles.pill, activeCategory === 'all' && styles.active)}
          onClick={() => onCategoryChange('all')}
        >
          All
          {activeCategory === 'all' && (
            <motion.div layoutId="activePill" className={styles.activeBg} />
          )}
        </button>
        
        {CATEGORIES.map(cat => (
          <button 
            key={cat.id}
            className={clsx(styles.pill, activeCategory === cat.id && styles.active)}
            onClick={() => onCategoryChange(cat.id)}
          >
            {cat.name}
            {activeCategory === cat.id && (
              <motion.div layoutId="activePill" className={styles.activeBg} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
