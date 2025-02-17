'use client';

import styles from './AnnouncementItem.module.scss';

import Image from 'next/image';
import { useState } from 'react';
import { DropdownButton } from '../DropdownButton/DropdownButton';
import TrashIcon from '/public/icons/trash-icon.svg';
import EditIcon from '/public/icons/edit-icon.svg';
import { type AnnouncementItemProps } from '../../types/announcementProps';

export function AnnouncementItem({ announcement, onDelete, onEdit }: AnnouncementItemProps) {
	const [isWrapped, setIsWrapped] = useState(true);

	const changeIsWrapped = () => {
		setIsWrapped((prevState) => !prevState);
	};

	return (
		<div className={styles.announcement}>
			<div className={styles.item}>
				<div className={styles.createdInfo}>
					<div className={styles.user}>
						<Image src={announcement.avatar} alt={'User Avatar'} width={48} height={48} />
						<div className={styles.nameAndRole}>
							<p className={styles.role}>{announcement.userRoleId}</p>
							<p className={styles.name}>{announcement.postedByUserId}</p>
						</div>
					</div>
					<div className={styles.actions}>
						<p className={styles.postedAt}>{announcement.postedAt}</p>
						<button onClick={() => onDelete(announcement.id)}>
							<Image
								src={TrashIcon}
								alt='Trash icon'
								aria-label='Delete a post'
								className={styles.trashIcon}></Image>
						</button>

						<button onClick={() => onEdit(announcement)}>
							<Image src={EditIcon} alt='Edit icon' aria-label='Edit a post'></Image>
						</button>
					</div>
				</div>
				<div className={styles.line}></div>

				<p className={`${styles.announcementText} ${!isWrapped ? styles.announcementTextExtended : ''}`}>
					{announcement.text}
				</p>

				<span onClick={changeIsWrapped} className={styles.dropDownButtonContainer}>
					<DropdownButton className={styles.extendBtn} isOpen={isWrapped} />
				</span>
			</div>
		</div>
	);
}
