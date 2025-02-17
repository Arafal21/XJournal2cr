import { GradesPage } from '../../_views/GradesPage/GradesPage';

export const metadata = {  
    title: "Grades - Stay Updated with Academic Progress | XJournal",  
    description: "Easily access and review academic performance. XJournal helps you stay informed and organized with all your grades in one place.",  
};  

export default function GradesRoute() {
	return (
		<>
			<GradesPage />
		</>
	);
}
