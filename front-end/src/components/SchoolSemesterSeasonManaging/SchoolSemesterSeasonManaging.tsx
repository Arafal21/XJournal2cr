import { SchoolSeasonControl } from '../SchoolSeasonControl/SchoolSeasonControl';
import { SchoolSemestrYear } from '../SchoolSemestrYear/SchoolSemestrYear';
import { isTeacherOrAdminProps } from '../../types/gradesProps';

export function SchoolSemesterSeasonManaging({ isTeacherOrAdmin }: isTeacherOrAdminProps) {
	return (
		<>
			<SchoolSemestrYear isTeacherOrAdmin={isTeacherOrAdmin} />
			<SchoolSeasonControl isTeacherOrAdmin={isTeacherOrAdmin} />
		</>
	);
}
