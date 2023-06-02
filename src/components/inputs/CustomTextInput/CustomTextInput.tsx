import React from 'react';
import styles from './CustomTextInput.module.scss';

type CustomTextInputProps = {
    id: string;
    label: string;
    errorMessage: string;
};

export const CustomTextInput = ({ id, label, errorMessage }: CustomTextInputProps) => {
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={id}>{label}</label>
            <input
                className={styles.input}
                id={id}
                type='text'
                placeholder=' '
                required
            />
            <p>{errorMessage}</p>
        </div>
    );
};
