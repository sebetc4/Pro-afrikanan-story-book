import Image from 'next/image';
import React from 'react';
import { useStory } from '~/hooks';
import { ProtagonistGenre, StoryChapter } from '~/types';
import { toRoman } from '~/utils';
import styles from './Chapter.module.scss';
import { story } from '~/story/story';

type ChapterProps = {
    chapter: StoryChapter;
    chapterIndex: number;
};

export const Chapter = ({ chapter, chapterIndex }: ChapterProps) => {
    
    const { protagonist, setCurrentChapterIndex, setAllStoryChapters } = useStory();

    const handleSelectChoice = (progress: [number, number]) => {
        setCurrentChapterIndex(prev => prev++)
        setAllStoryChapters(prev => [...prev, story[progress[0]][progress[1]]])
    }

    return (
        <div className={styles.chapterContainer}>
            <h2 className={styles.title}>{`Chapitre ${toRoman(chapterIndex + 1)}: ${chapter.title}`}</h2>
            <div className={styles.imgContainer}>
                <Image
                    src={chapter.getImage(protagonist!.genre === ProtagonistGenre.BOY)}
                    alt={`Illustration du chapitre`}
                    placeholder='blur'
                    fill
                />
            </div>
            <p className={styles.text}>
                {chapter.getText(protagonist!.genre === ProtagonistGenre.BOY, protagonist!.name)}
            </p>
            <div className={styles.choicesContainer}>
                {chapter.choices.map((choice, index) => (
                    <button
                        key={`chapter-${chapterIndex}-choice-${index}`}
                        className={styles.choice}
                        onClick={() => handleSelectChoice(choice.progress)}
                    >
                        {choice.text}
                    </button>
                ))}
            </div>
        </div>
    );
};
