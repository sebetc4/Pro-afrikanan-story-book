'use client';

import React, { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext } from 'react';
import { StoryState } from '../types';

type StoryContextType = {
    storyState: StoryState;
    setStoryState: Dispatch<SetStateAction<StoryState>>;
};

const Context = createContext<StoryContextType>({} as any);

export function useStory(): StoryContextType {
    return useContext(Context);
}

export const StoryContextProvider = ({ children }: PropsWithChildren) => {
    const [storyState, setStoryState] = React.useState<StoryState>(StoryState.INITIAL);

    return <Context.Provider value={{ storyState, setStoryState }}>{children}</Context.Provider>;
};
