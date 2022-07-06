import { useContext } from 'react';

import { Link } from 'react-router-dom';

import UserContext from '../../contexts/UserContext';

import DefaultPicture from '../../layouts/SidebarLayout/DefaultPicture';

export default function Profile () {
  const { user } = useContext(UserContext);

  return (
    <div className="flex pb-[5px] w-full items-start">
      <div className="h-[48px] w-[48px] mr-2">
        {user?.avatar ? <img src={`${user?.avatar}`} alt="profile picture" className="h-full w-full" /> : <DefaultPicture />}
      </div>
      <div className="flex flex-col items-start">
        <p className="text-[16px]">{user?.name ? user.name : 'User Name'}</p>
        <Link className="text-blue-link text-[12px]" to={`/user?${user?.id}`}>My Profile</Link>
      </div>
    </div>
  );
}
