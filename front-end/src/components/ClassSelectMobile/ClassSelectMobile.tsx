'use client';

import { use, useEffect, useState } from 'react';
import styles from './ClassSelectMobile.module.scss';
import { NextButton } from '../NextButton/NextButton';
import { PreviousButton } from '../PreviousButton/PreviousButton';
import { SchoolClassContext } from '../../contexts/SchoolClassContext';

export function ClassSelectMobile() {
	const { schoolClass, setSchoolClass } = use(SchoolClassContext);
	const [classNames, setClassNames] = useState<string[]>([]);

	useEffect(() => {
		const fetchClasses = async () => {
			try {
				const response = await fetch('http://localhost:3000/classes');
				if (!response.ok) throw new Error('Failed to fetch classes');
				const data = await response.json();
				setClassNames(Object.values(data[0]));
			} catch (error) {
				console.error(error);
			}
		};

		fetchClasses();
	}, []);

	const currentIndex = classNames.indexOf(schoolClass);

	const handleNext = () => {
		if (classNames.length === 0) return;
		const nextIndex = (currentIndex + 1) % classNames.length;
		setSchoolClass(classNames[nextIndex]);
	};

	const handlePrevious = () => {
		if (classNames.length === 0) return;
		const prevIndex = (currentIndex - 1 + classNames.length) % classNames.length;
		setSchoolClass(classNames[prevIndex]);
	};

	return (
		<div className={styles.classes}>
			<PreviousButton onClick={handlePrevious} />
			<span className={styles.classItem}>{schoolClass}</span>
			<NextButton onClick={handleNext} />
		</div>
	);
}
