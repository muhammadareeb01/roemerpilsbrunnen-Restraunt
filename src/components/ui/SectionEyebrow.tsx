import React from 'react';
import clsx from 'clsx';
import styles from './SectionEyebrow.module.css';

export function SectionEyebrow({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={clsx(styles.eyebrow, className)}>
      <span className={styles.line} />
      <span className={styles.text}>{children}</span>
    </div>
  );
}
