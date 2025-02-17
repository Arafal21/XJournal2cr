import { SchoolSemestrYear } from '../SchoolSemestrYear/SchoolSemestrYear';
import { SchoolSeasonControl } from '../SchoolSeasonControl/SchoolSeasonControl';

interface ManagingShowedSemestrProps {
	isTeacherOrAdmin: boolean;
}

export function ManagingShowedSemestr({ isTeacherOrAdmin }: ManagingShowedSemestrProps) {
	return (
		<>
			<SchoolSemestrYear isTeacherOrAdmin={isTeacherOrAdmin} />
			<SchoolSeasonControl isTeacherOrAdmin={isTeacherOrAdmin} />
		</>
	);
}
