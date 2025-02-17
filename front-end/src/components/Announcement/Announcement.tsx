'use client';

import { useState, useEffect } from 'react';

import { AnnouncementItem } from '../AnnouncementItem/AnnouncementItem';
import { AnnouncementActionModal } from '../AnnouncementActionModal/AnnouncementActionModal';
import { type AnnouncementProps } from '../../types/announcementProps';
import { deleteAnnouncement, fetchAnnouncements, updateAnnouncement } from '../../api/announcementsApi';

export function Announcement() {
	const [data, setData] = useState<AnnouncementProps[]>([]);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [currentAnnouncement, setCurrentAnnouncement] = useState<AnnouncementProps | null>(null);

	useEffect(() => {
		const loadAnnouncements = async () => {
			const announcements = await fetchAnnouncements();
			setData(announcements);
		};

		loadAnnouncements();
	}, []);

	const handleDelete = async (id: string) => {
		setData((prevState) => prevState.filter((announcement) => announcement.id !== id));
		try {
			await deleteAnnouncement(id);
		} catch (error) {
			alert('Failed to delete announcement');
		}
	};

	const handleSave = async (updatedAnnouncement: AnnouncementProps) => {
		try {
			await updateAnnouncement(updatedAnnouncement);
			setData((prevState) =>
				prevState.map((item) => (item.id === updatedAnnouncement.id ? updatedAnnouncement : item)),
			);
		} catch (error) {
			alert('Failed to update announcement.');
		}
	};

	const handleEdit = (announcement: AnnouncementProps) => {
		setCurrentAnnouncement(announcement);
		setIsModalVisible(true);
	};

	return (
		<div>
			{data.map((announcement) => (
				<AnnouncementItem
					key={announcement.id}
					announcement={announcement}
					onDelete={handleDelete}
					onEdit={handleEdit}
				/>
			))}
			<AnnouncementActionModal
				isModalVisible={isModalVisible}
				closeModal={() => setIsModalVisible(false)}
				currentAnnouncement={currentAnnouncement}
				onSave={handleSave}
			/>
		</div>
	);
}
