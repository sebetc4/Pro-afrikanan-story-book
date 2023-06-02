import React from 'react';
import styles from './RadioButton.module.scss';

interface SvgRadioButtonProps {
  id: string;
  label: string;
  selectedCard: string | null;
  handleCardSelection: (cardId: string) => void;
}

export const SvgRadioButton = ({ id, label, selectedCard, handleCardSelection }: SvgRadioButtonProps) => {
    return (
        <label
            htmlFor={id}
            className={styles.label}
            onClick={() => handleCardSelection(id)}
        >
            <input
                type='radio'
                id={id}
                name='character-selector'
                className={`${styles.input} ${selectedCard === id? styles.inputChecked : ''}`}
            />
            <span className={styles.span}>{label}</span>
        </label>
    );
};
