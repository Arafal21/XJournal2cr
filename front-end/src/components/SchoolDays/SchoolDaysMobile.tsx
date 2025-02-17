import styles from './SchoolDaysMobile.module.scss';

import { DayButton } from '../DayButton/DayButton';

export async function SchoolDaysMobile({}) {
	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

	return (
		<div className={styles.dayContainer}>
			<DayButton days={days} />
		</div>
	);
}
