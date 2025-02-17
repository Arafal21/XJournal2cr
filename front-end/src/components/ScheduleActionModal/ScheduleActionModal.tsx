'use client';

import styles from './ScheduleActionModal.module.scss';
import Image from 'next/image';
import trashIcon from '/public/icons/trash-icon.svg';
import closeIcon from '/public/icons/x-icon.svg';
import avatar from '/public/icons/avatar.png';
import { type GradesActionModalProps } from '../../types/gradesProps';

export function ScheduleActionModal({
	isModalVisible,
	closeModal,
	selectedGrade,
	setSelectedGrade,
}: GradesActionModalProps) {
	const gradesPool = [1, 2, 3, 4, 5, 6];

	return (
		<div className={`${styles.modalContainer} ${isModalVisible ? styles.active : ''}`}>
			<span className={styles.overlay} onClick={closeModal}></span>

			<div className={styles.modalOpened}>
				<div className={styles.modalContent}>
					<div className={styles.actionMenu}>
						<button aria-label='Trash button'>
							<Image src={trashIcon} alt='Trash icon' className={styles.trashIcon} />
						</button>

						<p className={styles.heading}>{selectedGrade ? 'Edit lesson' : 'New lesson'}</p>

						<button aria-label='Close button' onClick={closeModal}>
							<Image src={closeIcon} alt='Close icon' />
						</button>
					</div>

					<p className={styles.subject}>OOP</p>

					<div className={styles.createdInfo}>
						<Image src={avatar} alt='Avatar' width={32} height={32} />
						<p className={styles.name}>Ronald Richards</p>
					</div>

					<div className={styles.gradeSelectContainer}>
						{gradesPool.map((grade) => (
							<button
								key={grade}
								className={`${styles.gradeItemBtn} ${
									selectedGrade === grade ? styles.gradeActive : ''
								}`}
								onClick={() => setSelectedGrade(grade)}>
								{grade}
							</button>
						))}
					</div>

					<button className={styles.closeModalBtn}>{selectedGrade ? 'SAVE' : 'POST'}</button>
				</div>
			</div>
		</div>
	);
}
