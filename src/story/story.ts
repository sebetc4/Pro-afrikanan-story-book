import { StoryChapter } from '~/types';
//Chapter 0-0
import Chapter00BoyImage from 'public/images/story/0-0-boy.png';
import Chapter00GirlImage from 'public/images/story/0-0-girl.png';
// Chapter 1-0
import Chapter10BoyImage from 'public/images/story/1-0-boy.png';
// Chapter 1-1
import Chapter11Image from 'public/images/story/1-1.png';



export const story: StoryChapter[][] = [
    // Chapter 0
    [
        // Chapter 0-0
        {
            title: 'Réveil matinal',
            getText: () =>
                "Je me réveille sur ma natte. Mes frères et sœurs sont autour de moi. J'ouvre les yeux et je m'étire. La lumière du jour entre doucement dans la pièce, les oiseaux chantent dehors. La journée commence. Quelle aventure veux-tu vivre aujourd'hui?",
            getImage: (isBoy: boolean) => (isBoy ? Chapter00BoyImage : Chapter00GirlImage),
            choices: [
                {
                    text: "Une journée d'école",
                    progress: [1, 0],
                },
                {
                    text: 'Une journée de fête',
                    progress: [1, 1],
                },
                {
                    text: 'Une journée au marché',
                    progress: [1, 2],
                },
            ],
        },
    ],
    // Chapter 1
    [
        // Chapter 1-0
        {
            title: "Jour d'école",
            getText: () =>
                "Je me prépare pour ma journée d'école. Je porte mon uniforme. Dans mon sac, j'ai mon cahier et un crayon. Sur le chemin de l'école, je retrouve mes camarades Fatou et Moussa. J'arrive dans ma salle de classe. Le maître nous donne un livre. Moussa me demande : « Quelle est la leçon d'aujourd'hui ?",
            getImage: (isBoy: boolean) => (isBoy ? Chapter10BoyImage : Chapter10BoyImage),
            choices: [
                {
                    text: 'La leçon porte sur les contes et légendes de Guinée',
                    progress: [2, 0],
                },
                {
                    text: 'La leçon porte sur les héros et héroïnes de Guinée',
                    progress: [2, 1],
                },
            ],
        },
        // Chapter 1-1
        {
            title: 'Jour de fête',
            getText: () =>
                "En me levant, je remarque avec joie que c'est un jour de fête. Je m'empresse de me préparer et sors de chez moi rapidement. J'entends les sons de la musique au loin. La rue est remplie d'autres enfants partageant la même joie que moi ! Nous courons vers la fête et arrivons sur une place remplie de monde. La musique est forte et chaleureuse, les couleurs sont partout et des senteurs de nourriture remplissent mes narines.",
            getImage: () => Chapter11Image,
            choices: [
                {
                    text: "J'observe les danses traditionnelles",
                    progress: [2, 2],
                },
                {
                    text: 'Je me dirige vers les instruments de musique',
                    progress: [2, 3],
                },
            ],
        },
        // Chapter 1-2
        {
            title: 'Début de journée',
            getText: () =>
                "Je me lève et je trouve ma maman devant notre case. Je m'assois à côté d'elle. Aujourd'hui, il n'y a pas école. Elle nous a laissé dormir. Je me mets à rêver de la journée qui débute. Je m'imagine aller au marigot pour m'amuser avec mes amis. Les mots de ma mère me sortent de mes pensées : « Aujourd'hui, c'est le jour du marché! Peux-tu aller au marché pour moi ?",
            getImage: (isBoy: boolean) => (isBoy ? Chapter00BoyImage : Chapter00GirlImage),
            choices: [
                {
                    text: 'Je vais au marché',
                    progress: [2, 4],
                },
                {
                    text: 'Je vais au marigot',
                    progress: [2, 5],
                },
            ],
        },
    ],
];
