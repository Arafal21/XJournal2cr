import styles from './Header.module.scss';

import { DropDownSelectContainer } from '../DropdownSelectContainer/DropdownSelectContainer';
import { schoolName } from '../../constants/schoolName';

interface TopBarDesktop {
	isFullHeader: boolean;
	isMobileHeaderShowed?: boolean;
}

export function Header({ isFullHeader, isMobileHeaderShowed }: TopBarDesktop) {
	return (
		<header className={`${styles.header} ${isMobileHeaderShowed ? styles.hiddenOnMobile : null}`}>
			<div className={styles.container}>
				<div className={`${styles.wrapper} ${isFullHeader ? styles.menuVisible : styles.mobileHidden}`}>
					<h2 className={styles.schoolOrClass}>{schoolName}</h2>
					{isFullHeader && <DropDownSelectContainer />}
				</div>
			</div>
		</header>
	);
}
