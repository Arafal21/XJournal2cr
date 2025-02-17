import styles from './SchoolSubjects.module.scss';

import { SubjectButton } from '../SubjectButton/SubjectButton';

export async function SchoolSubjects({}) {
	const response = await fetch('http://localhost:3000/subjects');

	if (!response.ok) {
		throw new Error('Failed to fetch subject.');
	}

	const subjects = await response.json();

	return (
		<div className={styles.subjectContainer}>
			<SubjectButton subjects={subjects} />
		</div>
	);
}
