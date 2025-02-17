'use client';

import { createContext, useState } from 'react';
import { firstSemester } from '../constants/other';

export const SeasonContext = createContext({
  season: firstSemester,
  setSeason: () => {},
});

export default function SemestrContextProvider({ children }) {
  const [season, setSeason] = useState(firstSemester);

  return (
    <SeasonContext.Provider value={{ season, setSeason }}>
      {children}
    </SeasonContext.Provider>
  );
}
