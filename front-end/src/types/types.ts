//  for active item
export interface NavActiveIconProps {
	isActive: boolean;
}

export interface SimpleInfoModalProps {
	isModalOpen: boolean;
	setIsModalOpen: (value: boolean) => void;
	modalText: string;
}

export interface SideNavItemProps {
	itemPath: string;
	children: React.ReactNode;
	icon: React.ElementType;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface NavLinkTypes {
	href: string;
	children: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface NextPreviousBtnSemestrProps {
	onClick: () => void;
}
