import {useState} from 'react';
import auth, {firebase} from '@react-native-firebase/auth';
import {useRecoilState} from 'recoil';
import {sessionState} from '../../state/auth';
import { handleLoginError } from '../helpers/handleError';

const useAuth = () => {
  const [error, setError] = useState('');
  const [authState, setAuthState] = useRecoilState(sessionState);

  const createUser = async (email: string, password: string) => {
    if (email !== '' && password !== '') {
      try {
        let response = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        if (response) {
          const token = await response.user.getIdToken()
          setAuthState({
            user_id: response.user.uid,
            token_id: token,
          });
        }
      } catch (e: any) {
        setError(handleLoginError(e.message));
      }
    } else {
      setError('Please enter your email and password');
    }
  };

  const signInUser = async (email: string, password: string) => {
    if (email !== '' && password !== '') {
      try {
        let response = await auth().signInWithEmailAndPassword(email, password);
        if (response && response.user) {
          const token = await response.user.getIdToken()
          setAuthState({
            user_id: response.user.uid,
            token_id: token,
          });
        }
      } catch (e: any) {
        setError(handleLoginError(e.message));
      }
    } else {
      setError('Please enter your email and password');
    }
  };

  const signOut = async () => {
    await firebase.auth().signOut();
    setAuthState(null)
  };

  return {
    createUser,
    signInUser,
    signOut,
    error,
    setError,
  };
};

export default useAuth;
