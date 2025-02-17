import { CalendarPage } from '../../_views/CalendarPage/CalendarPage';

export const metadata = {  
    title: "Calendar - Plan Your Schedule with XJournal",  
    description: "Stay on top of exams, quizzes, and important school events with the XJournal calendar. Organize your time and never miss a date!",  
};  


export default function CalendarRoute() {
	return (
		<>
			<CalendarPage />
		</>
	);
}
