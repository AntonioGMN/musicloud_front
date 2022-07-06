import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import useSignUp from '../../hooks/api/useSignUp';

import AuthLayout from '../../layouts/AuthLayout';
import Main from '../../layouts/AuthLayout/Main';
import Footer from '../../layouts/AuthLayout/Footer';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from '../../components/Link';

export default function SignUp () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { loadingSignUp, signUp } = useSignUp();

  const navigate = useNavigate();

  async function submit (event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords must be equal!');
    } else if (password.length < 8) {
      toast.error('Minimum of 8 characters!');
    } else if (!name || !email || !password) {
      toast.error('All fields are required!');
    } else {
      try {
        await signUp(name, email, password);
        toast.success('Registered!');
        navigate('/sign-in');
      } catch (error) {
        toast.error('Unable to register');
      }
    }
  }

  return (
    <AuthLayout>
      <Main>
        <p className="text-5xl my-2">Register</p>
        <form onSubmit={submit}>
          <Input placeholder="Name" type="text" value={name} onChange={e => setName(e.target.value)} />
          <Input placeholder="E-mail" type="text" value={email} onChange={e => setEmail(e.target.value)} />
          <Input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <Input placeholder="Repeat your password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          <Button type="submit" disabled={loadingSignUp}>Register</Button>
        </form>
      </Main>
      <Footer>
        <span className="mr-2">Already registered? </span>
        <Link to="/sign-in">Sign-In</Link>
      </Footer>
    </AuthLayout>
  );
}
