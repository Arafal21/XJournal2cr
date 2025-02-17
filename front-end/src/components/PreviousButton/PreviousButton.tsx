import styles from './PreviousButton.module.scss';

import Image from 'next/image';
import LeftIcon from '/public/icons/left-icon.svg';
import { type NextPreviousBtnSemestrProps } from '../../types/types';

export function PreviousButton({ onClick }: NextPreviousBtnSemestrProps) {
	return (
		<Image src={LeftIcon} alt='left icon' width={24} height={24} className={styles.previousBtn} onClick={onClick} />
	);
}
