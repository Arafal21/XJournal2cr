'use client';

import { useEffect, useState, use } from 'react';
import styles from './TimeBlocksDesktop.module.scss';
import { CalendarBlock } from '../CalendarBlock/CalendarBlock';
import { SchoolClassContext } from '../../contexts/SchoolClassContext';

export function TimeBlocksDesktop() {
	const [classesData, setClassesData] = useState(null);
	const [teachersData, setTeachersData] = useState<{ [subject: string]: string }>({});
	const { schoolClass } = use(SchoolClassContext);

	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

	const subjectThemeMap: { [subject: string]: string } = {
		JavaScript: 'mustard',
		'System Design': 'violet',
		OOP: 'pink',
		Databases: 'blue',
		English: 'dark-green',
		Mathematics: 'light-green',
		'Data Structures': 'white',
	};

	useEffect(() => {
		const fetchClassesData = async () => {
			try {
				const response = await fetch('http://localhost:3000/calendar');
				if (!response.ok) throw new Error('Failed to fetch calendar');
				const data = await response.json();
				setClassesData(data[0]);
			} catch (error) {
				console.error(error);
			}
		};

		const fetchTeachersData = async () => {
			try {
				const response = await fetch('http://localhost:3000/teachers');
				if (!response.ok) throw new Error('Failed to fetch teachers');
				const data = await response.json();
				setTeachersData(data[0]);
			} catch (error) {
				console.error(error);
			}
		};

		fetchClassesData();
		fetchTeachersData();
	}, [schoolClass]);

	if (!classesData || !teachersData) return <div>Loading...</div>;

	const classSchedule = classesData[schoolClass];

	const handleClick = (day: string, index: number) => {
		const hour = `${8 + index}:00 - ${9 + index}:00`;
		console.log(`Clicked on ${day} at ${hour}`, schoolClass);
		console.log('open modal');
	};

	return (
		<ul className={styles.days}>
			{days.map((day) => (
				<div className={styles.desktopItems} key={day}>
					<li className={styles.dayText}>{day}</li>
					{classSchedule[day]?.map((lessonName: string, index: number) => {
						const theme = subjectThemeMap[lessonName] || 'empty';
						const teacherName = teachersData[lessonName] || '';
						const lessonTime = lessonName ? `${8 + index}:00 - ${9 + index}:00` : '';

						return (
							<CalendarBlock
								key={`${day}-${index}`}
								theme={theme}
								lessonName={lessonName}
								lessonTeacher={teacherName}
								lessonTime={lessonTime}
								onClick={() => handleClick(day, index)}
							/>
						);
					})}
				</div>
			))}
		</ul>
	);
}
