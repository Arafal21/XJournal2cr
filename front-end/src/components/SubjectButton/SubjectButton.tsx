'use client';

import styles from './SubjectButton.module.scss';
import { use } from 'react';
import { SubjectContext } from '../../contexts/SubjectContext';

export function SubjectButton({ subjects }) {
	const { subject, setSubject } = use(SubjectContext);

	return (
		<>
			{subjects.map((item) => (
				<button
					key={item.name}
					className={`${styles.subjectButton} ${subject === item.name ? styles.active : ''}`}
					onClick={() => setSubject(item.name)}>
					{item.name}
				</button>
			))}
		</>
	);
}
