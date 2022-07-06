
import Sidebar from "../SidebarLayout/SidebarLayout";
import ContentWrapper from "./ContentWrapper";
import DashboardCommon from "./DashboardCommon";
import Player from "../../components/Dashboard/Player";

export default ({ children }) => (
	<ContentWrapper>
		<Sidebar />
		<DashboardCommon>
			{children}
		</DashboardCommon>
		<Player />
	</ContentWrapper>
)