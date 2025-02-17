'use client';
const initialSubject = 'OOP';

import { createContext, useState } from 'react';

export const SubjectContext = createContext({
	subject: initialSubject,
	setSubject: () => {},
});

export default function SubjectContextProvider({ children }) {
	const [subject, setSubject] = useState(initialSubject);

	return <SubjectContext.Provider value={{ subject, setSubject }}>{children}</SubjectContext.Provider>;
}
