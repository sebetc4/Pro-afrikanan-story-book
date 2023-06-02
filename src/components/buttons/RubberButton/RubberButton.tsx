import React, { PropsWithChildren } from 'react';
import styles from './RubberButton.module.scss';


type RubberButtonProps = PropsWithChildren<{
    onClick?: () => void;
}>;

export const RubberButton = ({ onClick, children }: RubberButtonProps) => {
    return (
        <button 
        onClick={onClick}
        className={styles.button}
        >
            <span className={styles.span}>{children}</span>
            <svg
                className={styles.svg}
                viewBox='-5 -5 110 110'
                preserveAspectRatio='none'
                aria-hidden='true'
            >
                <path d='M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0' />
            </svg>
        </button>
    );
};
