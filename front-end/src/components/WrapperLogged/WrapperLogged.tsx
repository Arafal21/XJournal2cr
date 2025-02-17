import styles from './WrapperLogged.module.scss';

export function WrapperLogged({ children }: { children: React.ReactNode }) {
	return <div className={styles.wrapperForLogged}>{children}</div>;
}
