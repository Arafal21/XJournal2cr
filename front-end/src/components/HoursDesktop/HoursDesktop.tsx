import styles from './HoursDesktop.module.scss';

export function HoursDesktop() {
	const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

	return (
		<>
			<div className={`${styles.column} ${styles.hoursContainerDesktop}`}>
				<div className={styles.blank}></div>
				<ul className={styles.hours}>
					{hours.map((hour) => (
						<li key={hour} className={styles.hour}>
							{hour}
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
