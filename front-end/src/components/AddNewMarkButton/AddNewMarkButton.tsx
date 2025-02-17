import styles from './AddNewMarkButton.module.scss';

import Image from 'next/image';
import PlusIcon from '/public/icons/plus-icon.svg';

interface AddNewMarkButtonProps {
	onClick: () => void;
}

export function AddNewMarkButton({ onClick }: AddNewMarkButtonProps) {
	return (
		<button className={styles.addMarkBtn} onClick={onClick}>
			<Image src={PlusIcon} alt='add icon' />
		</button>
	);
}
