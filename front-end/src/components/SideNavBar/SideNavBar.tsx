'use client';

import styles from './SideNavBar.module.scss';
import Image from 'next/image';

import { useState } from 'react';

import SideNavItem from '../SideNavItem/SideNavItem';

import Logo from '/public/icons/logo-desktop-sidenavbar.svg';
import LogoutIcon from '/public/nav-icons/logout-icon.svg';
import ShowHideIcon from '/public/nav-icons/show-hide-sidebar-menu.svg';
import { HomeIcon } from '../../icons/HomeIcon';
import { CalendarIcon } from '../../icons/CalendarIcon';
import { ScheduleIcon } from '../../icons/ScheduleIcon';
import { PresenceIcon } from '../../icons/PresenceIcon';
import { GradesIcon } from '../../icons/GradesIcon';
import { AdminIcon } from '../../icons/AdminIcon';
import { ProfileIcon } from '../../icons/ProfileIcon';

import Avatar from '/public/icons/avatar.png';
import Link from 'next/link';

export function SideNavBar() {
	const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);

	function hideMobileMenu() {
		setIsMobileMoreOpen(false);
	}

	return (
		<nav className={`${styles.nav} ${!isMobileMoreOpen && styles.roundedRight}`}>
			<div className={styles.primaryItems}>
				<div className={styles.navHeading}>
					<Link href='/logged/announcements'>
						<Image src={Logo} width='148' height='40' alt='XJournal Logo' className={styles.logo} />
					</Link>
					<div className={styles.personalInfo}>
						<Image src={Avatar} width='48' height='48' alt='User Avatar' className={styles.avatarImg} />
						<div>
							<p className={styles.name}>John Doe</p>
							<p className={styles.position}>Headmaster</p>
						</div>
					</div>
				</div>

				<SideNavItem icon={HomeIcon} itemPath='announcements' onClick={hideMobileMenu}>
					Home
				</SideNavItem>

				<SideNavItem icon={CalendarIcon} itemPath='calendar' onClick={hideMobileMenu}>
					Calendar
				</SideNavItem>

				<SideNavItem icon={ScheduleIcon} itemPath='lesson-schedule' onClick={hideMobileMenu}>
					Schedule
				</SideNavItem>

				<SideNavItem icon={PresenceIcon} itemPath='presence' onClick={hideMobileMenu}>
					Presence
				</SideNavItem>

				<button
					className={styles.mobileExtendBtn}
					onClick={() => setIsMobileMoreOpen((prevState) => !prevState)}>
					<Image src={ShowHideIcon} width='24' height='24' alt='More button' />
					More
				</button>

				<div className={styles.desktopItems}>
					<SideNavItem icon={GradesIcon} itemPath='grades'>
						Grades
					</SideNavItem>

					<SideNavItem icon={AdminIcon} itemPath='principal-panel'>
						Admin
					</SideNavItem>
				</div>
			</div>

			{isMobileMoreOpen && (
				<div className={styles.mobileExtendedOptions}>
					<span className={styles.mobileExtendedOption} onClick={hideMobileMenu}>
						<SideNavItem icon={GradesIcon} itemPath='grades'>
							Grades
						</SideNavItem>
					</span>
					<span className={styles.mobileExtendedOption} onClick={hideMobileMenu}>
						<SideNavItem icon={AdminIcon} itemPath='principal-panel'>
							Admin
						</SideNavItem>
					</span>
					<span className={styles.mobileExtendedOption} onClick={hideMobileMenu}>
						<SideNavItem icon={ProfileIcon} itemPath='profile'>
							Profile
						</SideNavItem>
					</span>
					<span className={styles.mobileExtendedOption} onClick={hideMobileMenu}>
						<button className={styles.logoutBtn}>
							<Image src={LogoutIcon} alt='Logout button' />
							<span className={styles.linkText}>Logout</span>
						</button>
					</span>
				</div>
			)}

			<div className={styles.lowerDesktopItems}>
				<SideNavItem icon={ProfileIcon} itemPath='profile'>
					Profile
				</SideNavItem>

				<button onClick={() => console.log('You ve got logged out')} className={styles.logoutBtn}>
					<Image src={LogoutIcon} alt='Logout button' />
					<span className={styles.linkText}>Logout</span>
				</button>
			</div>
		</nav>
	);
}
