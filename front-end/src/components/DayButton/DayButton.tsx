'use client';

import styles from './DayButton.module.scss';
import { use } from 'react';
import { DayContext } from '../../contexts/DayContext';

export function DayButton({ days }) {
	const { day, setDay } = use(DayContext);

	return (
		<>
			{days.map((item) => (
				<button
					key={item}
					className={`${styles.dayButton} ${day === item ? styles.active : ''}`}
					onClick={() => setDay(item)}>
					{item}
				</button>
			))}
		</>
	);
}
