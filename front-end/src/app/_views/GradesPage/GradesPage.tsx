import styles from './GradesPage.module.scss';

import SemestrContextProvider from '../../../contexts/SeasonContext';

import { ClassSelectMobile } from '../../../components/ClassSelectMobile/ClassSelectMobile';
import { H1Company } from '../../../components/H1Company/H1Company';
import { Header } from '../../../components/Header/Header';
import { SchoolSubjects } from '../../../components/SchoolSubjects/SchoolSubjects';
import { WrapperLogged } from '../../../components/WrapperLogged/WrapperLogged';
import { GradesDisplaying } from '../../../components/GradesDisplaying/GradesDisplaying';
import { SchoolSemesterSeasonManaging } from '../../../components/SchoolSemesterSeasonManaging/SchoolSemesterSeasonManaging';
import { GradesManaging } from '../../../components/GradesManaging/GradesManaging';
import SubjectContextProvider from '../../../contexts/SubjectContext';
import SchoolClassContextProvider from '../../../contexts/SchoolClassContext';

export function GradesPage() {
	let isTeacherOrAdmin = true;
	// let isTeacherOrAdmin = false;

	return (
		<>
			<SchoolClassContextProvider>
				<Header isFullHeader={isTeacherOrAdmin ? true : false} isMobileHeaderShowed={true} />
				<WrapperLogged>
					<main>
						<H1Company />

						<SubjectContextProvider>
							<SemestrContextProvider>
								<div className={styles.reverse}>
									<div className={styles.row}>
										<SchoolSemesterSeasonManaging isTeacherOrAdmin={isTeacherOrAdmin} />
									</div>

									{isTeacherOrAdmin && <ClassSelectMobile />}
								</div>

								{isTeacherOrAdmin && (
									<>
										<SchoolSubjects />
										<div className={styles.line}></div>
									</>
								)}

								{isTeacherOrAdmin && <GradesManaging />}
								{!isTeacherOrAdmin && <GradesDisplaying />}
							</SemestrContextProvider>
						</SubjectContextProvider>
					</main>
				</WrapperLogged>
			</SchoolClassContextProvider>
		</>
	);
}
