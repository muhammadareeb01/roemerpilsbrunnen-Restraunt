'use client';
import { useCart } from '@/hooks/useCart';
import { CheckoutForm } from '@/components/order/CheckoutForm';
import Link from 'next/link';
import Image from 'next/image';
import buttonStyles from '@/components/ui/Button.module.css';
import styles from './page.module.css';

export default function OrderPage() {
  const { items, total, updateQuantity, removeItem } = useCart();
  const tax = total * 0.19; // 19% MwSt
  const finalTotal = total + tax;

  if (items.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven&apos;t added any dishes yet.</p>
        <Link href="/menu" className={buttonStyles.button + ' ' + buttonStyles.primary}>
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Checkout</h1>
      </header>

      <div className={styles.container}>
        <div className={styles.grid}>
          
          <div className={styles.cartCol}>
            <h2 className={styles.sectionTitle}>Order Summary</h2>
            <div className={styles.cartItems}>
              {items.map(item => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.itemImg}>
                    <Image src={item.imageUrl} alt={item.name} fill className={styles.img} />
                  </div>
                  <div className={styles.itemInfo}>
                    <h4>{item.name}</h4>
                    <p>€{item.price.toFixed(2)}</p>
                  </div>
                  <div className={styles.itemActions}>
                    <div className={styles.qtyControl}>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button className={styles.removeBtn} onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.summary}>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>€{total.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Tax (19% MwSt)</span>
                <span>€{tax.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRowTotal}>
                <span>Total</span>
                <span>€{finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className={styles.checkoutCol}>
            <h2 className={styles.sectionTitle}>Payment Details</h2>
            <CheckoutForm total={finalTotal} />
          </div>

        </div>
      </div>
    </div>
  );
}
