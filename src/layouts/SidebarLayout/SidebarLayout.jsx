import Profile from "../../components/Sidebar/Profile";
import SidebarLogo from "../../components/Sidebar/SidebarLogo";

export default () => (
	<div className="flex flex-col items-center justify-between p-[10px] absolute h-[calc(100%-80px)] w-[200px] bg-dark text-white">
		<SidebarLogo />
		<Profile />
	</div>
)
