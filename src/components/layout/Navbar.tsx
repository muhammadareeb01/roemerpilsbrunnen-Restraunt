'use client';
import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useScrolled } from '@/hooks/useScrolled';
import { useCart } from '@/hooks/useCart';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { CartDropdown } from './CartDropdown';
import styles from './Navbar.module.css';

export function Navbar() {
  const scrolled = useScrolled(40);
  const { items } = useCart();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header className={clsx(styles.header, scrolled && styles.scrolled)}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            RÖMER PILS BRUNNEN
          </Link>
          
          <nav className={styles.desktopNav}>
            <Link href="/menu" className={styles.link}>Menu</Link>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/events" className={styles.link}>Events</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
            
            <div className={styles.cartContainer}>
              <button onClick={() => setCartOpen(!cartOpen)} className={styles.desktopCartIcon}>
                <ShoppingBag size={24} />
                {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
              </button>
              <CartDropdown isOpen={cartOpen} onClose={() => setCartOpen(false)} />
            </div>
          </nav>
          
          <div className={styles.mobileActions}>
            <button className={styles.mobileCartIcon} onClick={() => setCartOpen(true)}>
              <ShoppingBag size={24} />
              {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
            </button>
            <button 
              className={styles.mobileMenuBtn} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className={styles.mobileMenuOverlay}
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className={styles.mobileNav}>
              <Link href="/menu" onClick={() => setMobileMenuOpen(false)}>Menu</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="/events" onClick={() => setMobileMenuOpen(false)}>Events</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Mobile dropdown needs to be rendered outside if it's hidden in desktop nav */}
      <div className={styles.mobileCartWrapper}>
        <CartDropdown isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </>
  );
}
