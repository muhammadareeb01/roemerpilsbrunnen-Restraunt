'use client';
import { useState, useMemo } from 'react';
import { MENU_ITEMS } from '@/lib/menu-data';
import { CategoryPills } from './CategoryPills';
import { MenuCard } from './MenuCard';
import styles from './MenuGrid.module.css';

export function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return MENU_ITEMS;
    return MENU_ITEMS.filter(item => item.categoryId === activeCategory);
  }, [activeCategory]);

  return (
    <div className={styles.container}>
      <CategoryPills 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      <div className={styles.gridWrapper}>
        <div className={styles.grid}>
          {filteredItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
        {filteredItems.length === 0 && (
          <p className={styles.empty}>No items found in this category.</p>
        )}
      </div>
    </div>
  );
}
