import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '~/utils';
import { ProtagonistGenre } from '~/types';
import styles from './SelectCharacterScreen.module.scss';
import { CharacterCard } from '~/components/CharacterCard/CharacterCard';

export const SelectCharacterScreen = () => {
    // State
    const [characterSelected, setCharacterSelected] = useState<ProtagonistGenre | null>(null);

    return (
        <motion.div
            className={styles.characterSelectionContainer}
            exit={{ scale: 0 }}
        >
            <div className={styles.cardsContainer}>
                <motion.div
                    variants={fadeIn('right', 'spring', 0.5, 1)}
                    initial='hidden'
                    animate={'visible'}
                    onClick={() => setCharacterSelected(ProtagonistGenre.BOY)}
                >
                    <CharacterCard
                        isBoy
                        isSelected={characterSelected === ProtagonistGenre.BOY}
                    />
                </motion.div>
                <motion.div
                    variants={fadeIn('left', 'spring', 0.5, 1)}
                    initial='hidden'
                    animate={'visible'}
                    onClick={() => setCharacterSelected(ProtagonistGenre.GIRL)}
                >
                    <CharacterCard isSelected={characterSelected === ProtagonistGenre.GIRL} />
                </motion.div>
            </div>
        </motion.div>
    );
};
