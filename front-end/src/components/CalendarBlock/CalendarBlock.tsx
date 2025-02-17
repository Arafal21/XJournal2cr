import styles from './CalendarBlock.module.scss';

interface CalendarBlockProps {
	theme: string;
	lessonName?: string;
	lessonTime?: string;
	lessonTeacher?: string;
	// onClick: any;
}

export function CalendarBlock({ theme, lessonName, lessonTime, lessonTeacher, onClick }: CalendarBlockProps) {
	return (
		<button className={` ${styles.block} ${styles[theme]} ${theme === 'empty' ? styles.emptyBlock : styles.scheduledBlock}`} onClick={onClick}>
			<span className={styles.subject}>{lessonName}</span>
			<span className={styles.time}>{lessonTime}</span>
			<span className={styles.person}>{lessonTeacher}</span>
			{theme === 'empty' && <span className={styles.emptyText}>Add new</span>}
		</button>
	);
}
