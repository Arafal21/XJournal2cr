'use client';

import styles from './AnnouncementActionModal.module.scss';
import { useEffect, useState } from 'react';
import { type AddNewAnnouncementModalProps, type UserAnnouncementProps } from '../../types/announcementProps';
import { ModalHeader } from '../ModalHeader/ModalHeader';
import { UserInfo } from '../UserInfo/UserInfo';
import { postNewAnnouncement } from '../../api/announcementsApi';


export function AnnouncementActionModal({
	isModalVisible,
	closeModal,
	currentAnnouncement = null,
	onSave,
}: AddNewAnnouncementModalProps) {
	const [isModalExtended, setIsModalExtended] = useState(false);
	const [text, setText] = useState('');

	useEffect(() => {
		setText(currentAnnouncement ? currentAnnouncement.text : '');
	}, [currentAnnouncement]);

	const handleNewAnnouncementSubmit = async () => {
		if (!text.trim()) {
			alert('Announcement text cannot be empty');
			return;
		}

		const newAnnouncement: UserAnnouncementProps = {
			id: crypto.randomUUID(),
			text,
			postedByUserId: 'John Doe',
			userRoleId: 'Principal',
			postedAt: new Date().toISOString().split('T')[0],
			avatar: 'http://localhost:3000/avatars/johndoe.png',
		};

		try {
			await postNewAnnouncement(newAnnouncement);
			setText('');
			closeModal();
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			} else {
				alert('An unknown error occurred');
			}
		}
	};

	const handleEditAnnouncementSubmit = () => {
		if (!text.trim()) {
			alert('Announcement text cannot be empty');
			return;
		}

		const updatedAnnouncement = { ...currentAnnouncement!, text, postedAt: new Date().toISOString().split('T')[0] };
		onSave(updatedAnnouncement);
		closeModal();
	};

	const handleSubmit = () => (currentAnnouncement ? handleEditAnnouncementSubmit() : handleNewAnnouncementSubmit());

	const formattedDate = new Date().toLocaleDateString();

	return (
		<div className={`${styles.modalContainer} ${isModalVisible ? styles.active : ''}`}>
			<span className={styles.overlay}></span>
			<div className={styles.modalOpened}>
				<ModalHeader
					title={currentAnnouncement ? 'Edit Advertisement' : 'Post New Advertisement'}
					isExtended={isModalExtended}
					toggleExtended={() => setIsModalExtended((prevState) => !prevState)}
					closeModal={closeModal}
				/>
				<div className={`${styles.modalContent} ${!isModalExtended ? styles.modalExtended : ''}`}>
					<UserInfo name='John Doe' role='Headmaster' date={formattedDate} />
					<div className={styles.line}></div>
					<textarea
						className={`${styles.textArea} ${isModalExtended ? styles.textAreaExtended : ''}`}
						placeholder='What would you like to post?'
						value={text}
						onChange={(e) => setText(e.target.value)}></textarea>
				</div>
				<button className={styles.closeModalBtn} onClick={handleSubmit}>
					{currentAnnouncement ? 'SAVE' : 'POST'}
				</button>
			</div>
		</div>
	);
}
