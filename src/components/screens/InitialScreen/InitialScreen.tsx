import { motion } from 'framer-motion';
import { RubberButton } from '~/components/buttons/RubberButton/RubberButton';
import { useStory } from '~/hooks';
import { StoryState } from '~/types';
import { fadeIn } from '~/utils';
import styles from './InitialScreen.module.scss';

export const InitialScreen = () => {
    // Hooks
    const { setStoryState } = useStory();

    const handleClick = () => {
        setStoryState(StoryState.PROTAGONIST_SELECTION);
    };

    return (
        <motion.div
            className={styles.rubberButonContainer}
            variants={fadeIn('up', 'spring', 0.5, 1)}
            initial='hidden'
            animate={'visible'}
            exit={{ scale: 0 }}
        >
            <RubberButton onClick={handleClick}>Commencer une nouvelle histoire</RubberButton>
        </motion.div>
    );
};
