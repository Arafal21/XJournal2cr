import styles from './SimpleInfoModal.module.scss';

import { type SimpleInfoModalProps } from '../../types/types';

export function SimpleInfoModal({ isModalOpen, setIsModalOpen, modalText }: SimpleInfoModalProps) {
	return (
		<div
			className={`${styles.modalContainer} ${isModalOpen ? styles.active : ''}`}
			onClick={() => setIsModalOpen(false)}>
			<span className={styles.overlay}></span>

			<div className={styles.modalOpened}>
				<p className={styles.modalText}>{modalText}</p>

				<button className={styles.closeModalBtn} onClick={() => setIsModalOpen(false)}>
					close
				</button>
			</div>
		</div>
	);
}
