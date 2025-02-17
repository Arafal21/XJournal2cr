import { H1Company } from "../../../components/H1Company/H1Company";
import { Header } from "../../../components/Header/Header";
import { MVPInformationMobile } from "../../../components/MVPInformation/MVPInformationMobile";

import { WrapperLogged } from "../../../components/WrapperLogged/WrapperLogged";

export function PrincipalPanelPage() {
	return (
		<>
			<Header isFullHeader={false} isMobileHeaderShowed={false} />
			<WrapperLogged>
				<main>
					<H1Company />
					<MVPInformationMobile/>
				</main>
			</WrapperLogged>
		</>
	);
}
