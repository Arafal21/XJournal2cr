'use client';

import styles from './DropdownItem.module.scss';
import Image from 'next/image';
import { useState, use } from 'react';
import { DropdownButton } from '../DropdownButton/DropdownButton';
import PeoplesIcon from '../../icons/PeoplesIcon.svg';
import { SchoolClassContext } from '../../contexts/SchoolClassContext';

export function DropdownItem({ classes }: { classes: string[] }) {
	const { schoolClass, setSchoolClass } = use(SchoolClassContext);

	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (option: string) => {
		setSchoolClass(option);
		setIsOpen(false);
	};

	return (
		<div className={styles.dropdown}>
			<button
				className={`${styles.select} ${isOpen ? styles.selectClicked : ''}`}
				onClick={() => setIsOpen(!isOpen)}
				aria-label={isOpen ? 'Close dropdown menu' : 'Open dropdown menu'}>
				<span className={styles.selected}>
					<Image src={PeoplesIcon} alt='peoples icon' width='20' height='20' className={styles.peopleImg} />
					{schoolClass}
				</span>

				<DropdownButton isOpen={isOpen} />
			</button>

			{isOpen && (
				<ul className={`${styles.menu}`}>
					{classes.map((option) => (
						<li
							key={option}
							className={`${styles.menuItem} ${option === schoolClass ? styles.active : ''}`}
							onClick={() => handleSelect(option)}>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
