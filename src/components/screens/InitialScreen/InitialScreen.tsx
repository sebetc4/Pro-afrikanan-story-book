import React, { use, useEffect, useState } from 'react';
import { RubberButton } from '../..';
import styles from './InitialScreen.module.scss';
import { useStory } from '~/hooks';
import { ProtagonistGenre, StoryState } from '~/types';
import { GenreCharacterCard } from './components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { fadeIn } from '~/utils';

export const InitialScreen = () => {
    // Hooks
    const { storyState, setStoryState } = useStory();
    const buttonAnimationControls = useAnimation();

    // State
    const [characterSelected, setCharacterSelected] = useState<ProtagonistGenre | null>(null);
    const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

    const handleClick = () => {
        setStoryState(StoryState.CHARACTER_SELECTION);
    };

    const handleChangeCharacter = (id: string) => {
        setCharacterSelected(id as ProtagonistGenre);
    };

    useEffect(() => {
        storyState !== StoryState.INITIAL && buttonAnimationControls.start({ scale: 0 });
    }, [storyState, buttonAnimationControls]);

    return (
        <>
            <motion.div
                className={styles.rubberButonContainer}
                variants={fadeIn('up', 'spring', 0.5, 1)}
                initial='hidden'
                animate={storyState === StoryState.INITIAL ? 'visible' : buttonAnimationControls}
            >
                <RubberButton onClick={handleClick}>Commencer une nouvelle histoire</RubberButton>
            </motion.div>
            <div className={styles.characterSelectionContainer}>
                <div className={styles.cardsContainer}>
                    <motion.div
                        variants={fadeIn('right', 'spring', 0.5, 1)}
                        initial='hidden'
                        animate={storyState === StoryState.CHARACTER_SELECTION ? 'visible' : ''}
                    >
                        <GenreCharacterCard
                            isBoy
                            characterSelected={characterSelected}
                            handleChangeCharacter={handleChangeCharacter}
                        />
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 'spring', 0.5, 1)}
                        initial='hidden'
                        animate={storyState === StoryState.CHARACTER_SELECTION ? 'visible' : ''}
                    >
                        <GenreCharacterCard
                            characterSelected={characterSelected}
                            handleChangeCharacter={handleChangeCharacter}
                        />
                    </motion.div>
                </div>
            </div>
        </>
    );
};
