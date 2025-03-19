import { MoveDown } from 'lucide-react';

import styles from './scroll-indicator.module.scss';

export const ScrollIndicator = () => {
  return (
    <div className={styles.scrollIndicator}>
      <MoveDown className={styles.icon} width={24} height={24} />
    </div>
  );
};
