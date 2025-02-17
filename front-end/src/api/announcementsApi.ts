import { announcementsUrl } from '../constants/url';
import { AnnouncementProps, UserAnnouncementProps } from '../types/announcementProps';

export const fetchAnnouncements = async (): Promise<AnnouncementProps[]> => {
    const result = await fetch(announcementsUrl);
    return result.json();
};

export const deleteAnnouncement = async (id: string): Promise<void> => {
    await fetch(`${announcementsUrl}/${id}`, {
        method: 'DELETE',
    });
};

export const updateAnnouncement = async (updatedAnnouncement: AnnouncementProps): Promise<void> => {
    await fetch(`${announcementsUrl}/${updatedAnnouncement.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedAnnouncement),
    });
};

export const postNewAnnouncement = async (newAnnouncement: UserAnnouncementProps) => {
    try {
        await fetch('http://localhost:3000/announcements', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAnnouncement),
        });
    } catch (error) {
        throw new Error('Failed to add announcement.');
    }
};
