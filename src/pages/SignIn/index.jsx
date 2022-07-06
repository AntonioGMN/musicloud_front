import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import UserContext from '../../contexts/UserContext';

import useSignIn from '../../hooks/api/useSignIn';

import AuthLayout from '../../layouts/AuthLayout';
import Main from '../../layouts/AuthLayout/Main';
import Footer from '../../layouts/AuthLayout/Footer';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from '../../components/Link';

export default function SignIn () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loadingSignIn, signIn } = useSignIn();
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  async function submit (event) {
    event.preventDefault();

    if (password.length < 8) {
      toast.error('Minimum of 8 characters!');
    } else if (!email || !password) {
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
    <AuthLayout>
      <Main>
        <p className="text-5xl my-2">Login</p>
        <form onSubmit={submit}>
          <Input placeholder="E-mail" type="text" value={email} onChange={e => setEmail(e.target.value)} />
          <Input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <Button type="submit" disabled={loadingSignIn}>Sign In</Button>
        </form>
      </Main>
      <Footer>
        <span className="mr-2">Not a member yet?</span>
        <Link to="/sign-up">Register!</Link>
      </Footer>
    </AuthLayout>
  );
}
