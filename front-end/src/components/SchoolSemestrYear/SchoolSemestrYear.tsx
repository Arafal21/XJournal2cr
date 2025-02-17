'use client';

import styles from './SchoolSemestrYear.module.scss';
import { firstSemester, schoolYear, secondSemester } from '../../constants/other';
import { NextButton } from '../NextButton/NextButton';
import { PreviousButton } from '../PreviousButton/PreviousButton';
import { useContext } from 'react';
import { SeasonContext } from '../../contexts/SeasonContext';

interface SchoolSemestrYearProps {
	isTeacherOrAdmin: boolean;
}

export function SchoolSemestrYear({ isTeacherOrAdmin }: SchoolSemestrYearProps) {
	const { setSeason } = useContext(SeasonContext) as {
		season: string;
		setSeason: (newSeason: string) => void;
	};

	const handleSeasonChange = (newSeason: string) => {
		setSeason(newSeason);
	};

	return (
		<div className={`${isTeacherOrAdmin ? styles.hiddenOnMobile : styles.hiddenOnDesktop} ${styles.btnContainer}`}>
			<div className={styles.semestrBtn}>
				<PreviousButton onClick={() => handleSeasonChange(firstSemester)} />
				<span className={styles.text}>{schoolYear} </span>
				<NextButton onClick={() => handleSeasonChange(secondSemester)} />
			</div>
		</div>
	);
}
