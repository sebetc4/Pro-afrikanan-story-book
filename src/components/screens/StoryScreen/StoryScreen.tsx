import React from 'react';
import { motion } from 'framer-motion';
import styles from './StoryScreen.module.scss';
import { useStory } from '~/hooks';
import { Chapter } from '~/components/Chapter/Chapter';

export const StoryScreen = () => {
    const { allStoryChapters } = useStory();
    return (
        <div className={styles.storyScreen}>
            {allStoryChapters.map((chapter, index) => (
                <Chapter
                    chapter={chapter}
                    chapterIndex={index}
                />
            ))}
        </div>
    );
};
