import {useState} from 'react';
import useAuth from '../../hooks/useAuth';

const useLandingScreenViewModel = () => {
  const useAuthHook = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (newEmail: string) => {
    setEmail(newEmail)
    useAuthHook.setError('');
  }

  const onPasswordChange = (newPassword: string) => {
    setPassword(newPassword)
    useAuthHook.setError('');
  }

  const onSignIn = () => {
    useAuthHook.signInUser(email, password)
  }

  const onSignUp = () => {
    useAuthHook.createUser(email, password)
  }

  return {
    useAuthHook,
    onEmailChange,
    onPasswordChange,
    onSignIn,
    onSignUp,
    email,
    password,
  };
};

export default useLandingScreenViewModel;