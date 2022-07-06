import Logo from "../../components/Logo";
import Profile from "./Profile";

export default ({ children }) => (
	<div className="flex flex-col items-center justify-between p-2 absolute h-[calc(100%-80px)] w-[200px] bg-dark text-white">
		{children}
		<Logo />
		<Profile />
	</div>
)