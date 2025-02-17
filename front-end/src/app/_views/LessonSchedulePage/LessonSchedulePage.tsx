import { CalendarComponent } from '../../../components/CalendarComponent/CalendarComponent';
import { H1Company } from '../../../components/H1Company/H1Company';
import { Header } from '../../../components/Header/Header';

import { WrapperLogged } from '../../../components/WrapperLogged/WrapperLogged';
import SchoolClassContextProvider from '../../../contexts/SchoolClassContext';

export function LessonSchedulePage() {
	let isTeacherOrAdmin = true;
	// let isTeacherOrAdmin = false;

	return (
		<>
			<SchoolClassContextProvider>
				<Header isFullHeader={isTeacherOrAdmin ? true : false} isMobileHeaderShowed={true} />
				<WrapperLogged>
					<main>
						<H1Company />
						<CalendarComponent />
					</main>
				</WrapperLogged>
			</SchoolClassContextProvider>
		</>
	);
}
