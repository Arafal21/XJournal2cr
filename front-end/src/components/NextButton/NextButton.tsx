import styles from './NextButton.module.scss';

import Image from 'next/image';
import RightIcon from '/public/icons/right-icon.svg';
import { type NextPreviousBtnSemestrProps } from '../../types/types';

export function NextButton({ onClick }: NextPreviousBtnSemestrProps) {
	return <Image src={RightIcon} alt='' width={24} height={24} className={styles.nextBtn} onClick={onClick} />;
}
