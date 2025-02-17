import styles from './CalendarComponent.module.scss';

import DayContextProvider from '../../contexts/DayContext';

import { ClassSelectMobile } from '../ClassSelectMobile/ClassSelectMobile';

import { TimeBlocksDesktop } from '../TimeBlocksDesktop/TimeBlocksDesktop';
import { HoursAndPlanMobile } from '../HoursAndPlanMobile/HoursAndPlanMobile';
import { HoursDesktop } from '../HoursDesktop/HoursDesktop';
import { SchoolDaysMobile } from '../SchoolDays/SchoolDaysMobile';
import { ScheduleActionModal } from '../ScheduleActionModal/ScheduleActionModal';

export function CalendarComponent() {
	return (
		<>
			<DayContextProvider>
				<ClassSelectMobile />
				<SchoolDaysMobile />

				<div className={styles.calendarContainer}>
					<HoursAndPlanMobile />
					<HoursDesktop />
					<TimeBlocksDesktop />
				</div>
				<ScheduleActionModal isModalVisible={true}/>
			</DayContextProvider>
		</>
	);
}