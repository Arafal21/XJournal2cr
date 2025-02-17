import Image from 'next/image';
import styles from './ModalHeader.module.scss';
import ExtendIcon from '/public/icons/show-more-details.svg';
import DecreaseIcon from '/public/icons/show-less-details.svg';
import closeIcon from '/public/icons/x-icon.svg';
import { ModalHeaderProps } from '../../types/announcementProps';

export const ModalHeader = ({ title, isExtended, toggleExtended, closeModal }: ModalHeaderProps) => {
	return (
		<div className={styles.actionMenuDesktop}>
			<button aria-label='Extend button' onClick={toggleExtended}>
				<Image
					src={isExtended ? DecreaseIcon : ExtendIcon}
					alt={isExtended ? 'Decrease icon' : 'Extend icon'}
				/>
			</button>
			<p className={styles.heading}>{title}</p>
			<button aria-label='Close button' onClick={closeModal}>
				<Image src={closeIcon} alt='Close icon'></Image>
			</button>
		</div>
	);
};
