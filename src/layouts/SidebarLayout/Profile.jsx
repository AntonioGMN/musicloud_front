import { useContext } from "react";

import UserContext from "../../contexts/UserContext";

import Link from "../../components/Link";
import DefaultPicture from "./DefaultPicture";

export default function Profile({ children }) {
	const { user } = useContext(UserContext);

	return (
	<div className="flex">
		{children}
		<div className="h-[48px] w-[48px] mr-2">
			{user?.avatar ? <img src="" alt="profile picture" className="h-full w-full" /> : <DefaultPicture />}
		</div>
		<div>
			<p>Fulano</p>
			<Link to="/user?USER_ID">My Profile</Link>
		</div>
	</div>
)}