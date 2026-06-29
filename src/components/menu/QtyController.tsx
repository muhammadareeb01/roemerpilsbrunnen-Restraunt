'use client';
import { useCart } from '@/hooks/useCart';
import { MenuItem } from '@/lib/types';
import styles from './QtyController.module.css';

export function QtyController({ item }: { item: MenuItem }) {
  const { items, addItem, updateQuantity } = useCart();
  
  const cartItem = items.find(i => i.id === item.id);
  const qty = cartItem?.quantity || 0;

  if (qty === 0) {
    return (
      <button 
        className={styles.addBtn}
        onClick={() => addItem({ ...item, quantity: 1 })}
      >
        + Add
      </button>
    );
  }

  return (
    <div className={styles.controller}>
      <button 
        className={styles.ctrlBtn}
        onClick={() => updateQuantity(item.id, qty - 1)}
      >
        −
      </button>
      <span className={styles.qty}>{qty}</span>
      <button 
        className={styles.ctrlBtn}
        onClick={() => updateQuantity(item.id, qty + 1)}
      >
        +
      </button>
    </div>
  );
}
