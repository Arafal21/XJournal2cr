import { GradesForStudent } from '../GradesForStudent/GradesForStudent';

export async function GradesDisplaying() {
	const name = 'Ronald Richards';
	const schoolClass = '1st Class';

	const response = await fetch('http://localhost:3000/grades');

	if (!response.ok) {
		throw new Error('Failed to fetch grades.');
	}

	const data = await response.json();

	const studentGrades = data[0][schoolClass][name];

	return (
		<>
			<GradesForStudent studentGrades={studentGrades} />
		</>
	);
}
