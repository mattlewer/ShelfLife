import {useEffect, useState} from 'react';
import useAuth from '../hooks/useAuth';
import useDatabase from '../hooks/useDatabase';

const useAppStartupViewModel = () => {
  const auth = useAuth();
  const database = useDatabase();
  const [checkedAuth, setcheckedAuth] = useState<boolean>(false)

  useEffect(() => {
    const checkLoggedIn = async() => {
      await auth.isLoggedIn()
      const timer = setTimeout(() => {
        setcheckedAuth(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
    checkLoggedIn();
  },[]);

  useEffect(()=> {
    database.getProducts();
  }, [auth.authState?.user_id])

  return {
    checkedAuth,
  }
};

export default useAppStartupViewModel;
