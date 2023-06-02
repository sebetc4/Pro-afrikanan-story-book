import Image from 'next/image';
import BoyCharacterImage from 'public/images/illustrations/boy-character.png';
import GirkCharacterImage from 'public/images/illustrations/girl-character.png';
import styles from './GenreCharacterCard.module.scss';
import { ProtagonistGenre } from '~/types';
import { SvgRadioButton } from '~/components/inputs/SvgRadioButton/RadioButton';

type GenreCharacterCardProps = {
    isBoy?: boolean;
    characterSelected: string | null;
    handleChangeCharacter: (id: string) => void;
};

export const GenreCharacterCard = ({ isBoy, characterSelected, handleChangeCharacter }: GenreCharacterCardProps) => {
    return (
        <article className={styles.card}>
            <div className={styles.cardImageContainer}>
                <Image
                    src={isBoy ? BoyCharacterImage : GirkCharacterImage}
                    alt={`Illustration d'${isBoy ? 'un garçon' : 'une fille'}`}
                    fill
                    quality={100}
                    placeholder='blur'
                    className={styles.cardImageContainer}
                />
            </div>
            <div className={styles.cardRadioButtonContainer}>
                <SvgRadioButton
                    label={`Je suis ${isBoy ? 'un garçon' : 'une fille'}`}
                    id={isBoy ? ProtagonistGenre.BOY : ProtagonistGenre.GIRL}
                    selectedCard={characterSelected}
                    handleCardSelection={handleChangeCharacter}
                />
            </div>
        </article>
    );
};
