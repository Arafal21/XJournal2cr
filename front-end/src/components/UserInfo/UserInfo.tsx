import Image from 'next/image';
import styles from './UserInfo.module.scss';
import avatar from '/public/icons/avatar.png';
import { UserInfoProps } from '../../types/announcementProps';

export const UserInfo = ({ name, role, date }: UserInfoProps) => {
	return (
		<div className={styles.createdInfo}>
			<div className={styles.user}>
				<Image src={avatar} alt='Your avatar' />
				<div className={styles.nameAndRole}>
					<p className={styles.role}>{name}</p>
					<p className={styles.name}>{role}</p>
				</div>
			</div>
			<p className={styles.date}>{date}</p>
		</div>
	);
};
