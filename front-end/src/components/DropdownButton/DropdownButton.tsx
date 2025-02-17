import Image from 'next/image';
import styles from './DropdownButton.module.scss';

import DropDownIcon from '../../icons/DropDownIcon.svg';

interface DropdownButtonProps {
	isOpen?: boolean;
	className?: string;
}

export function DropdownButton({ isOpen, className }: DropdownButtonProps) {
	return (
		<Image
			src={DropDownIcon}
			alt='Drop down menu'
			style={{ width: 'auto' }}
			className={`${styles.caret} ${isOpen ? styles.caretRotate : ''} ${className}`}
			aria-label='Drop down button'
		/>
	);
}
