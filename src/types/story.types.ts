import { StaticImageData } from "next/image";

export enum StoryState {
    INITIAL = 'initial',
    PROTAGONIST_SELECTION = 'protagonist-selection',
    STORY_IN_PROGRESS = 'story-in-progress',
}

export type Protagonist = {
    name: string;
    genre: ProtagonistGenre;
};

export enum ProtagonistGenre {
    BOY = 'boy',
    GIRL = 'girl',
}

export type StoryChapter = {
    title: string;
    getText: (isBoy: boolean, name: string) => string;
    getImage: (isBoy: boolean) => StaticImageData;
    choices: StoryChapterChoice[];
};

type StoryChapterChoice = {
    text: string;
    progress: [number, number];
};
