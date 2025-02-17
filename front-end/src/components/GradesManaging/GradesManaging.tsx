'use client';

import { use, useEffect, useState } from 'react';
import { SeasonContext } from '../../contexts/SeasonContext';
import { GradesStudentRow } from '../GradesStudentRow/GradesStudentRow';
import { SubjectContext } from '../../contexts/SubjectContext';
import { SchoolClassContext } from '../../contexts/SchoolClassContext';

export function GradesManaging() {
	const { season } = use(SeasonContext);
	const { subject } = use(SubjectContext);
	const { schoolClass } = use(SchoolClassContext);

	const [students, setStudents] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const gradesResponse = await fetch('http://localhost:3000/grades');
				const usersResponse = await fetch('http://localhost:3000/users');

				if (!gradesResponse.ok || !usersResponse.ok) {
					throw new Error('Failed to fetch data.');
				}

				const gradesData = await gradesResponse.json();
				const usersData = await usersResponse.json();

				const usersMap = new Map(usersData.map((user: any) => [user.name, user.avatar || null]));

				const studentsData = Object.entries(gradesData[0][schoolClass]).map(([name, semesters]) => ({
					name,
					avatar: usersMap.get(name),
					grades: semesters[season][subject],
				}));

				setStudents(studentsData);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, [season, subject, schoolClass]);

	return (
		<div>
			<GradesStudentRow students={students} />
		</div>
	);
}
