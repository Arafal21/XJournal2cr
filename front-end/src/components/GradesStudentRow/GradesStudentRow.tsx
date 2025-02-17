'use client';

import styles from './GradesStudentRow.module.scss';
import Image from 'next/image';
import { AddNewMarkButton } from '../AddNewMarkButton/AddNewMarkButton';
import { MarkButton } from '../MarkButton/MarkButton';
import { GradesActionModal } from '../GradesActionModal/GradesActionModal';
import { useState } from 'react';
import { type Student } from '../../types/gradesProps';

export function GradesStudentRow({ students }: { students: Student[] }) {
	const [isModalOpened, setIsModalOpened] = useState(false);
	const [selectedGrade, setSelectedGrade] = useState<number | null>(null);

	function changeGrade(grade: number) {
		setSelectedGrade(grade);
		setIsModalOpened(true);
	}

	function addGrade() {
		setSelectedGrade(null);
		setIsModalOpened(true);
	}

	function closeModal() {
		setIsModalOpened(false);
	}

	return (
		<>
			{students.map((student) => (
				<div key={student.name} className={styles.gradesContainer}>
					<div className={styles.dataContainer}>
						<Image src={student.avatar} width={32} height={32} alt={`Avatar of ${student.name}`} />
						<p className={styles.name}>{student.name}</p>
					</div>

					<ul className={styles.gradesList}>
						{student.grades.map((grade, index) => (
							<li key={index}>
								<MarkButton onClick={() => changeGrade(grade)}>{grade}</MarkButton>
							</li>
						))}
					</ul>

					<AddNewMarkButton onClick={addGrade} />
				</div>
			))}

			<GradesActionModal
				isModalVisible={isModalOpened}
				closeModal={closeModal}
				selectedGrade={selectedGrade}
				setSelectedGrade={setSelectedGrade}
			/>
		</>
	);
}
