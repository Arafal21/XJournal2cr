import { DropdownItem } from '../DropdownItem/DropdownItem';

export async function DropDownSelectContainer() {
	const response = await fetch('http://localhost:3000/classes');

	if (!response.ok) {
		throw new Error('Failed to fetch classes.');
	}

	const classesData = await response.json();

	const classes = Object.keys(classesData[0]);

	return (
		<>
			<DropdownItem classes={classes} />
		
		</>
	);
}
