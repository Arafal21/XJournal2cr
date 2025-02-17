export interface Semesters {
	'Fall / Winter': Subjects;
	'Spring / Summer': Subjects;
}

export interface Subjects {
	OOP: number[];
	[subject: string]: number[];
}

export interface Student {
	name: string;
	grades: number[];
}

export interface isTeacherOrAdminProps {
	isTeacherOrAdmin: boolean;
}

export interface GradesActionModalProps {
	isModalVisible: boolean;
	closeModal: () => void;
	selectedGrade: number | null;
	setSelectedGrade: (grade: number) => void;
}

export interface GradesForStudentProps {
	studentGrades: {
		'Fall / Winter': Record<string, number[]>;
		'Spring / Summer': Record<string, number[]>;
	};
}

export interface Student {
	name: string;
	avatar: string;
	grades: number[];
}

export interface MarkButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
}
