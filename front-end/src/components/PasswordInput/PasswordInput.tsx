import { type PasswordInputProps } from '../../types/loginProps';
import styles from './PasswordInput.module.scss';

export function PasswordInput({ type, defaultValue = '', onChange }: PasswordInputProps) {
	return (
		<input
			id='password-input'
			type={type}
			placeholder='Password'
			className={styles.input}
			name='password'
			defaultValue={defaultValue}
			onChange={onChange}
		/>
	);
}
