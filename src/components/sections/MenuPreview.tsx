import Link from 'next/link';
import Image from 'next/image';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import styles from './MenuPreview.module.css';

export function MenuPreview() {
  const categories = [
    { id: 'vorspeisen', name: 'Appetizers & Soups', desc: 'Traditional liver dumpling soup & warm starters', price: 'From €5.50', img: '/images/german-appetizers.png' },
    { id: 'frankfurter', name: 'Frankfurt Specials', desc: 'Frankfurter Rippchen & local platters since 1954', price: 'From €12.50', img: '/images/frankfurt-plate.png' },
    { id: 'desserts', name: 'Sweet Desserts', desc: 'Hot apple strudel served with ice cream', price: 'From €4.80', img: '/images/apfelstrudel-dessert.png' },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <SectionEyebrow>Culinary Art</SectionEyebrow>
          <h2 className={styles.title}>A Taste of Heritage</h2>
        </div>

        <div className={styles.grid}>
          {categories.map(cat => (
            <Link href={`/menu#${cat.id}`} key={cat.id} className={styles.visualCard}>
              <div className={styles.imgWrapper}>
                <Image src={cat.img} alt={cat.name} fill className={styles.cardImg} />
                <div className={styles.imgOverlay}></div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <span className={styles.priceTag}>{cat.price}</span>
                </div>
                <div className={styles.cardBottom}>
                  <h3 className={styles.catName}>{cat.name}</h3>
                  <p className={styles.catDesc}>{cat.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.footer}>
          <Link href="/menu" className={styles.viewAllBtn}>
            Explore Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
