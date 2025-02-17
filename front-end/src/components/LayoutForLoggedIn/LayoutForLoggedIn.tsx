import { MainContent } from '../MainContent/MainContent';
import { SideNavBar } from '../SideNavBar/SideNavBar';
import { type ReactNode } from 'react';

export function LayoutForLoggedIn({ children }: { children: ReactNode }) {
	return (
		<>
			<MainContent>{children}</MainContent>
			<SideNavBar />
		</>
	);
}
