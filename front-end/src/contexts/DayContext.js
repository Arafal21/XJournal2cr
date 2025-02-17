'use client';
const initialDay = 'Monday';

import { createContext, useState } from 'react';

export const DayContext = createContext({
	day: initialDay,
	setDay: () => {},
});

export default function DayContextProvider({ children }) {
	const [day, setDay] = useState(initialDay);

	return <DayContext.Provider value={{ day, setDay }}>{children}</DayContext.Provider>;
}
