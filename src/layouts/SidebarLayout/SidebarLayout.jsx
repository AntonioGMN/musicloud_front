import Logo from "../../components/Logo";
import Profile from "../../components/Sidebar/Profile";

import Navigation from "../../components/Sidebar/Navigation";

export default () => (
	<div className="flex flex-col items-center justify-between p-[10px] absolute h-[calc(100%-80px)] w-[200px] bg-dark text-white">
		<Logo />

    <Navigation />

		<Profile />
	</div>
)