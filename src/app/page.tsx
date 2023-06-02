'use client';
import Image from 'next/image';
import styles from './page.module.scss';
import BackgroundHome from '../../public/images/illustrations/background-home.jpeg';
import { useStory } from '~/hooks';
import { InitialScreen } from '~/components';

export default function Home() {
    const { storyState } = useStory();
    console.log('storyState', storyState);
    return (
        <main className={styles.main}>
            <Image
                src={BackgroundHome}
                alt={"Illustartion d'un village"}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            <InitialScreen />
        </main>
    );
}
