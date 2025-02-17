import styles from './LoginOtherButton.module.scss';
import { type LoginOtherButtonProps } from '../../types/loginProps';

export function LoginOtherButton({ children, onClick, role }: LoginOtherButtonProps) {
	const buttonType = styles[role];

	return (
		<button type='button' className={buttonType} onClick={onClick}>
			{children}
		</button>
	);
}
