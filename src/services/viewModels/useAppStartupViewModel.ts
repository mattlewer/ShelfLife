import {useEffect, useState} from 'react';
import useAuth from '../hooks/useAuth';

const useAppStartupViewModel = () => {
  const database = useAuth();
  const [checkedAuth, setcheckedAuth] = useState<boolean>(false)

  useEffect(() => {
    const checkLoggedIn = async() => {
      await database.isLoggedIn()
      const timer = setTimeout(() => {
        setcheckedAuth(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
    checkLoggedIn();
  }, []);

  return {
    checkedAuth,
  }
};

export default useAppStartupViewModel;
