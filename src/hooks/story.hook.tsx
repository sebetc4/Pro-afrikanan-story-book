'use client';

import React, { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext } from 'react';
import { Protagonist, StoryChapter, StoryState } from '../types';
import { story } from '~/story/story';

type StoryContextType = {
    allStoryChapters: StoryChapter[];
    storyState: StoryState;
    protagonist: Protagonist | null;
    currentChapterIndex?: number;
    setAllStoryChapters: Dispatch<SetStateAction<StoryChapter[]>>;
    setStoryState: Dispatch<SetStateAction<StoryState>>;
    setProtagonist: Dispatch<SetStateAction<Protagonist | null>>;
    setCurrentChapterIndex: Dispatch<SetStateAction<number>>;
};

const Context = createContext<StoryContextType>({} as any);

export function useStory(): StoryContextType {
    return useContext(Context);
}

export const StoryContextProvider = ({ children }: PropsWithChildren) => {
    const [storyState, setStoryState] = React.useState<StoryState>(StoryState.INITIAL);
    const [allStoryChapters, setAllStoryChapters] = React.useState<StoryChapter[]>([story[0][0]]);
    const [protagonist, setProtagonist] = React.useState<Protagonist | null>(null);
    const [currentChapterIndex, setCurrentChapterIndex] = React.useState<number>(0);

    return (
        <Context.Provider
            value={{
                allStoryChapters,
                storyState,
                protagonist,
                currentChapterIndex,
                setAllStoryChapters,
                setStoryState,
                setProtagonist,
                setCurrentChapterIndex,
            }}
        >
            {children}
        </Context.Provider>
    );
};
