import styles from './AnnouncementsPage.module.scss';

import { Header } from '../../../components/Header/Header';
import { WrapperLogged } from '../../../components/WrapperLogged/WrapperLogged';
import { H1Company } from '../../../components/H1Company/H1Company';
import { Announcement } from '../../../components/Announcement/Announcement';
import { AddNewAnnouncementItems } from '../../../components/AddNewAnnouncementItems/AddNewAnnouncementItems';

export function AnnouncementsPage() {
	return (
		<>
			<Header isFullHeader={false} />
			<WrapperLogged>
				<main>
					<H1Company />
					<h2 className={styles.welcome}>Welcome John!</h2>
					<Announcement />
					<AddNewAnnouncementItems />
				</main>
			</WrapperLogged>
		</>
	);
}
