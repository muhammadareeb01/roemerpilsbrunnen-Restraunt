'use client';
import { useCart } from '@/hooks/useCart';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import styles from './CartDropdown.module.css';

interface CartDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDropdown({ isOpen, onClose }: CartDropdownProps) {
  const { items, updateQuantity, total } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.dropdown}>
        <div className={styles.header}>
          <h3>Your Order</h3>
          <button onClick={onClose} className={styles.closeBtn}>
            <X size={20} />
          </button>
        </div>
        
        <div className={styles.body}>
          {items.length === 0 ? (
            <div className={styles.empty}>
              <ShoppingBag size={48} className={styles.emptyIcon} />
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className={styles.itemList}>
              {items.map(item => (
                <div key={item.id} className={styles.item}>
                  <div className={styles.itemInfo}>
                    <h4>{item.name}</h4>
                    <p>€{item.price.toFixed(2)}</p>
                  </div>
                  <div className={styles.quantity}>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14} /></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14} /></button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.total}>
              <span>Total</span>
              <span>€{total.toFixed(2)}</span>
            </div>
            <Link href="/order" className={styles.checkoutBtn} onClick={onClose}>
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
