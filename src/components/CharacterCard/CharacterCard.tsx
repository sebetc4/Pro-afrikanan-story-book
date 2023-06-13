import Image from 'next/image';
import BoyCharacterImage from 'public/images/illustrations/boy-character.png';
import GirlCharacterImage from 'public/images/illustrations/girl-character.png';
import styles from './CharacterCard.module.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useStory } from '~/hooks';
import { ProtagonistGenre, StoryState } from '~/types';

type CharacterCardProps = {
    isBoy?: boolean;
    isSelected: boolean | null;
};

export const CharacterCard = ({ isBoy, isSelected }: CharacterCardProps) => {
    return (
        <motion.article
            className={styles.card}
            layout
            transition={{
                layout: { duration: 0.2, type: 'spring' },
            }}
        >
            <div className={styles.cardImageContainer}>
                <Image
                    src={isBoy ? BoyCharacterImage : GirlCharacterImage}
                    alt={`Illustration d'${isBoy ? 'un garçon' : 'une fille'}`}
                    fill
                    quality={100}
                    placeholder='blur'
                    className={styles.cardImageContainer}
                />
            </div>
            <p className={styles.cardText}>{`Je suis ${isBoy ? 'un garçon' : 'une fille'}`}</p>
            {isSelected && (
                <motion.div
                    transition={{ duration: 1, type: 'spring' }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <NameForm isBoy={isBoy} />
                </motion.div>
            )}
        </motion.article>
    );
};

type NameFormProps = {
    isBoy?: boolean;
};

const NameForm = ({ isBoy }: NameFormProps) => {
    // Hooks
    const { setProtagonist, setStoryState } = useStory();

    // State
    const [inputIsFocused, setInputIsFocused] = useState(false);
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setProtagonist({
            name,
            genre: isBoy ? ProtagonistGenre.BOY : ProtagonistGenre.GIRL,
        });
        setStoryState(StoryState.STORY_IN_PROGRESS);
    };

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <div className={`${styles.inputContainer} ${inputIsFocused ? styles.inputContainerFocused : ''}`}>
                <input
                    value={name}
                    type='text'
                    name={`name-${isBoy ? 'boy' : 'girl'}`}
                    onFocus={() => setInputIsFocused(true)}
                    onBlur={() => name.length === 0 && setInputIsFocused(false)}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor={`name-${isBoy ? 'boy' : 'girl'}`}>Je m'appelle</label>
            </div>
            <button
                className={styles.formButton}
                type='submit'
                disabled={name.length === 0}
            >
                Valider
            </button>
        </form>
    );
};
