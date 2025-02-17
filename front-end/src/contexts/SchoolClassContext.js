'use client';

import { createContext, useState } from 'react';

const initialClassName = '1st Class';

export const SchoolClassContext = createContext({
	schoolClass: initialClassName,
	setSchoolClass: (className) => {},
});


export default function SchoolClassContextProvider({ children }) {
	const [schoolClass, setSchoolClass] = useState(initialClassName);

	return (
		<SchoolClassContext.Provider value={{ schoolClass, setSchoolClass }}>{children}</SchoolClassContext.Provider>
	);
}
