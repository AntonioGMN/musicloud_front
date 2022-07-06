
import Sidebar from "../SidebarLayout/SidebarLayout";
import PlayerSession from "./PlayerSession";
import ContentWrapper from "./ContentWrapper";
import DashboardCommon from "./DashboardCommon";

export default ({ children }) => (
	<ContentWrapper>
		<Sidebar />
		<DashboardCommon>
			{children}
		</DashboardCommon>
		<PlayerSession />
	</ContentWrapper>
)