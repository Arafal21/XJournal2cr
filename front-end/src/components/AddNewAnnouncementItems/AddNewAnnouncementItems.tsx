'use client';

import { useState } from 'react';
import { AddNewAnnouncementButton } from '../AddNewAnnouncementButton/AddNewAnnouncementButton';
import { AnnouncementActionModal } from '../AnnouncementActionModal/AnnouncementActionModal';

export function AddNewAnnouncementItems() {
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	const toggleNewAnnouncement = () => {
		setIsModalVisible((prevState) => !prevState);
	};

	return (
		<>
			<AddNewAnnouncementButton addNewAnnoucement={toggleNewAnnouncement} />
			<AnnouncementActionModal isModalVisible={isModalVisible} closeModal={toggleNewAnnouncement} />
		</>
	);
}
