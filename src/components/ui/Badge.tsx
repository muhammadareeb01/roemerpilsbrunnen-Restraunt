import React from 'react';
import clsx from 'clsx';
import styles from './Badge.module.css';

export function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={clsx(styles.badge, className)}>
      {children}
    </span>
  );
}
