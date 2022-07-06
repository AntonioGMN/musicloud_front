import api from './api';

export async function signUp (name, email, password) {
  const response = await api.post('/users/sign-up', { name, email, password, provider: 'EMAIL' });
  return response.data;
}
