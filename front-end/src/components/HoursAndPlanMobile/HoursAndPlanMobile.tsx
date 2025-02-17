'use client';

import { useEffect, useState, use } from 'react';
import styles from './HoursAndPlanMobile.module.scss';
import { CalendarBlock } from '../CalendarBlock/CalendarBlock';
import { DayContext } from '../../contexts/DayContext';
import { SchoolClassContext } from '../../contexts/SchoolClassContext';

export function HoursAndPlanMobile() {
	const [classesData, setClassesData] = useState(null);
	const [teachersData, setTeachersData] = useState<{ [subject: string]: string }>({});
	const { day } = use(DayContext);
	const { schoolClass } = use(SchoolClassContext);
	const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

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
	const daySchedule = classSchedule ? classSchedule[day] : [];

	const handleWhichLessonCheck = (hour: string, index: number) => {
		const nextHour = `${parseInt(hour.split(':')[0]) + 1}:00`;
		const lessonTime = `${hour} - ${nextHour}`;
		console.log(`Clicked at ${lessonTime}`, day, schoolClass);
		console.log('open modal');
	};
	

	return (
		<div className={`${styles.column} ${styles.hoursContainerMobile}`}>
			<div className={styles.blank}></div>
			<ul className={styles.hours}>
				{hours.map((hour, index) => {
					const lessonName = daySchedule[index];
					const theme = subjectThemeMap[lessonName] || 'empty';
					const teacherName = teachersData[lessonName] || '';
					const lessonTime = lessonName === '' ? '' : `${hour} - ${hours[index + 1]}`;

					return (
						<div key={hour} className={styles.row}>
							<li className={styles.hour}>{hour}</li>
							<CalendarBlock
								theme={theme}
								lessonName={lessonName}
								lessonTeacher={teacherName}
								lessonTime={lessonTime}
								onClick={() => handleWhichLessonCheck(hour, index)}
							/>
						</div>
					);
				})}
			</ul>
		</div>
	);
}
