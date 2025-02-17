import styles from './SideNavLink.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLinkTypes } from '../../types/types';

export function SideNavLink({ href, children, onClick }: NavLinkTypes) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link href={href} className={`${styles.singleLink} ${isActive ? styles.active : ''}`} onClick={onClick}>
			{children}
		</Link>
	);
}
