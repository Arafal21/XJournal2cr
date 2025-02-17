import styles from './SideNavItem.module.scss';

import { SideNavLink } from '../SideNavLink/SideNavLink';
import { usePathname } from 'next/navigation';
import { SideNavItemProps } from '../../types/types';

export default function SideNavItem({ itemPath, icon: Icon, children, onClick }: SideNavItemProps) {
	return (
		<div onClick={onClick}>
			<SideNavLink href={`/logged/${itemPath}`}>
				<Icon isActive={usePathname() === `/logged/${itemPath}`} />
				<span
					className={`${styles.linkText} ${
						usePathname() === `/logged/${itemPath}` && styles.linkTextActive
					}`}>
					{children}
				</span>
			</SideNavLink>
		</div>
	);
}
