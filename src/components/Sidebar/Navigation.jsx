import Button from "./Button";
import Search from "./Search";

import File from "../Icons/File";
import AddUser from "../Icons/AddUser";
import Link from "./Link";

export default function Navigaion() {
  return (
    <div className="px-1 grow my-4 font-normal">
      <div className="mb-4">
        <Search onSearch={(text) => console.log(`Searching "${text}"...`)} />
        <Button icon={<File width={16} height={16} />}>Upload Songs</Button>
        <Button icon={<AddUser width={16} height={16} />}>Invite Friends</Button>
      </div>

      <Link to="/">Timeline</Link>
      <Link to="/playlists">Playlists</Link>
      <Link active to="/allsongs">All songs</Link>
    </div> 
  );
}
