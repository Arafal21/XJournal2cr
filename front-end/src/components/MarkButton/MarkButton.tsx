import { type MarkButtonProps } from '../../types/gradesProps';
import styles from './MarkButton.module.scss';

export function MarkButton({ children, onClick }: MarkButtonProps) {
	return (
		<button className={styles.grades} aria-label='change mark' onClick={onClick}>
			{children}
		</button>
	);
}
