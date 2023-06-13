'use client';
import Image from 'next/image';
import styles from './page.module.scss';
import BackgroundHome from 'public/images/illustrations/background-home.jpeg';
import { useStory } from '~/hooks';
import { StoryState } from '~/types';
import { AnimatePresence } from 'framer-motion';
import { InitialScreen, SelectCharacterScreen, StoryScreen } from '~/components';

export default function Home() {
    // Hooks
    const { storyState } = useStory();

    return (
        <main className={styles.main}>
            <Image
                src={BackgroundHome}
                alt={"Illustartion d'un village"}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                placeholder='blur'
            />
            <AnimatePresence>{storyState === StoryState.INITIAL && <InitialScreen />}</AnimatePresence>
            <AnimatePresence>
                {storyState === StoryState.PROTAGONIST_SELECTION && <SelectCharacterScreen />}
            </AnimatePresence>
            {storyState === StoryState.STORY_IN_PROGRESS && <StoryScreen />}
        </main>
    );
}
