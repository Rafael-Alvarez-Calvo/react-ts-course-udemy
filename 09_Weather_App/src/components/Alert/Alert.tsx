import { ReactNode } from 'react';
import styles from './Alert.module.css';

export const Alert = ({ children } : { children: ReactNode }) => {
    return (
        <p className={styles.alert}>{children}</p>
    )
}
