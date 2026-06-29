'use client';
import { useCart } from '@/hooks/useCart';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import styles from './OrderBar.module.css';

export function OrderBar() {
  const { items, total } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AnimatePresence>
      {itemCount > 0 && (
        <motion.div 
          className={styles.bar}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className={styles.container}>
            <div className={styles.info}>
              <span className={styles.count}>{itemCount} items</span>
              <span className={styles.total}>€{total.toFixed(2)}</span>
            </div>
            <Link href="/order" className={styles.checkoutBtn}>
              Checkout
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
