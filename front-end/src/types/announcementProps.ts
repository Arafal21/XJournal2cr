export interface AnnouncementProps {
    id: string;
    text: string;
    postedByUserId: string;
    userRoleId: string;
    postedAt: string;
    avatar: string;
}

export interface UserAnnouncementProps {
	id: string;
	text: string;
	postedByUserId: string;
	userRoleId: string;
	postedAt: string;
	avatar: string;
}

export interface AnnouncementItemProps {
	announcement: UserAnnouncementProps;
	onDelete: (id: string) => void;
	onEdit: (announcement: UserAnnouncementProps) => void;
}

export interface UserAnnouncementModalProps {
	isModalVisible: boolean;
	closeModal: () => void;
	currentAnnouncement?: UserAnnouncementProps | null;
	onSave: (updatedAnnouncement: UserAnnouncementProps) => void;
}

export interface AddNewAnnouncementModalProps {
	isModalVisible: boolean;
	closeModal: () => void;
	currentAnnouncement?: UserAnnouncementProps | null;
	onSave: (updatedAnnouncement: UserAnnouncementProps) => void;
}

export interface AddNewAnnouncementButtonProps {
	addNewAnnoucement: () => void;
}

export interface UserInfoProps {
	name: string;
	role: string;
	date: string;
}

export interface ModalHeaderProps {
	title: string;
	isExtended: boolean;
	toggleExtended: () => void;
	closeModal: () => void;
}