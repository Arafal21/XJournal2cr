import { type LoginInputProps } from '../../types/loginProps';
import styles from './LoginInput.module.scss';

export function LoginInput({ defaultValue = '', onChange }: LoginInputProps) {
	return (
		<input
			id='user-input'
			type='text'
			placeholder='Kwilson'
			className={styles.input}
			name='username'
			defaultValue={defaultValue}
			onChange={onChange}
		/>
	);
}
