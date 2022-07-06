import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import UserContext from '../../contexts/UserContext';

import useSignIn from '../../hooks/api/useSignIn';

import Container from '../../layouts/Container';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loadingSignIn, signIn } = useSignIn();

  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();
  
  async function submit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords must be equal!');
    } else if (password.length < 8) {
      toast.error('Minimum of 8 characters!');
    } else if(!name || !email || !password) {
      toast.error('All fields are required!');
    } else {
      try {
        const userData = await signIn(email, password);
				setUserData(userData);
        toast.success('Login successful');
        navigate('/');
      } catch (error) {
        toast.error('Unable to login');
      }
    }
  }

  return (
    <Container>
      <div className='flex flex-col h-full justify-around items-center'>
        <div className='flex items-center'>
          <p className='font-logo'>Musicloud</p>
          <svg alt="Event Logo" width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.3334 10.6666V14.6666H22V21.4799C19.5467 22.0399 17.68 24.1199 17.3867 26.6666H5.33335C4.62611 26.6666 3.94783 26.3856 3.44774 25.8855C2.94764 25.3854 2.66669 24.7072 2.66669 23.9999V7.99992C2.66669 6.51992 3.85335 5.33325 5.33335 5.33325H13.3334L16 7.99992H26.6667C27.3739 7.99992 28.0522 8.28087 28.5523 8.78097C29.0524 9.28106 29.3334 9.95934 29.3334 10.6666ZM24.6667 17.3333V24.2799C24.2125 24.081 23.7196 23.9859 23.224 24.0016C22.7283 24.0173 22.2425 24.1433 21.8017 24.3706C21.361 24.5979 20.9765 24.9206 20.6763 25.3153C20.3761 25.71 20.1678 26.1666 20.0664 26.652C19.9651 27.1375 19.9733 27.6394 20.0906 28.1212C20.2078 28.603 20.431 29.0526 20.744 29.4372C21.057 29.8218 21.4518 30.1318 21.8998 30.3444C22.3477 30.5571 22.8375 30.6672 23.3334 30.6666C24.2174 30.6666 25.0653 30.3154 25.6904 29.6903C26.3155 29.0652 26.6667 28.2173 26.6667 27.3333V19.9999H29.3334V17.3333H24.6667Z" fill="#01A63C"/>
          </svg>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-5xl my-2'>Login</p>
          <form onSubmit={submit}>
            <input className="bg-gray border border-slate-400 rounded-lg py-2 px-4 block w-full appearance-none my-4 focus:outline-none" placeholder="E-mail" type="text"  value={email} onChange={e => setEmail(e.target.value)} />
            <input className="bg-gray border border-slate-400 rounded-lg py-2 px-4 block w-full appearance-none my-4 focus:outline-none" placeholder="Password" type="password"  value={password} onChange={e => setPassword(e.target.value)} />
            <button className='bg-transparent border border-green rounded-lg py-2 px-4 block w-full appearance-none leading-normal text-green focus:outline-none' type="submit" disabled={loadingSignIn}>Register</button>
          </form>
        </div>
        <div className='h-1/6 flex justify-center items-center w-full'>
          <span className='mr-2'>Not a member yet? </span>
          <a className='text-blue-link' href='/sign-up'>Register!</a>
        </div>
      </div>
    </Container>
  );
}
