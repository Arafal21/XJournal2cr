import styles from './GradesForStudent.module.scss';

import { firstSemester, secondSemester } from '../../constants/other';
import { MarkButton } from '../MarkButton/MarkButton';
import { GradeSubject } from '../GradeSubject/GradeSubject';
import { type GradesForStudentProps } from '../../types/gradesProps';

export function GradesForStudent({ studentGrades }: GradesForStudentProps) {
	return (
		<>
			<p className={styles.semestrText}>{firstSemester}</p>
			<p className={styles.hiddenForDesktop}>Your grades</p>

			<ul className={styles.mark}>
				{Object.entries(studentGrades[firstSemester]).map(([subject, grades]) => (
					<li className={styles.row} key={subject}>
						<GradeSubject>{subject}</GradeSubject>
						<div className={styles.gradesContainer}>
							{grades.map((grade, index) => (
								<MarkButton key={index}>{grade}</MarkButton>
							))}
						</div>
					</li>
				))}
			</ul>

			<p className={styles.semestrText}>{secondSemester}</p>

			<ul className={styles.mark}>
				{Object.entries(studentGrades[secondSemester]).map(([subject, grades]) => (
					<li className={styles.row} key={subject}>
						<GradeSubject>{subject}</GradeSubject>
						<div className={styles.gradesContainer}>
							{grades.map((grade, index) => (
								<MarkButton key={index}>{grade}</MarkButton>
							))}
						</div>
					</li>
				))}
			</ul>
		</>
	);
}
