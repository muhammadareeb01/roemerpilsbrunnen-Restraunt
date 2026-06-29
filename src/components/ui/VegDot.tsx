import clsx from 'clsx';
import styles from './VegDot.module.css';

export function VegDot({ className }: { className?: string }) {
  return (
    <div className={clsx(styles.container, className)} title="Vegetarian">
      <div className={styles.dot} />
    </div>
  );
}
