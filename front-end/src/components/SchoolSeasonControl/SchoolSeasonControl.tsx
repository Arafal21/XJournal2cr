'use client';

import styles from './SchoolSeasonControl.module.scss';
import { useContext } from 'react';
import { SeasonContext } from '../../contexts/SeasonContext';
import { firstSemester, secondSemester } from '../../constants/other';

interface SchoolSeasonControlTypes {
	isTeacherOrAdmin: boolean;
}

interface SeasonContextType {
	season: string;
	setSeason: (season: string) => void;
}

export function SchoolSeasonControl({ isTeacherOrAdmin }: SchoolSeasonControlTypes) {
	const { season, setSeason } = useContext(SeasonContext) as SeasonContextType;

	const handleSeasonChange = (newSeason: typeof firstSemester | typeof secondSemester) => {
		setSeason(newSeason);
	};

	return (
		<div className={`${!isTeacherOrAdmin ? styles.hideOnDesktop : null} ${styles.semestrContainer}`}>
			<button
				className={`${season === firstSemester ? styles.active : ''} ${styles.semestrBtn} ${
					styles.buttonMargin
				}`}
				onClick={() => handleSeasonChange(firstSemester)}>
				{firstSemester}
			</button>
			<button
				className={`${season === secondSemester ? styles.active : ''} ${styles.semestrBtn}`}
				onClick={() => handleSeasonChange(secondSemester)}>
				{secondSemester}
			</button>
		</div>
	);
}
