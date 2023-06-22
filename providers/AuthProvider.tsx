import { User, onAuthStateChanged } from "firebase/auth";
import { FC, createContext, useEffect, useMemo, useState } from "react";
import { auth, db, login, logout, register } from "../src/auth/firebase";
import { addDoc, collection } from '@firebase/firestore';

interface IContext {
  user: User | null,
  isLoading: boolean,
  register: (email: string, password: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = createContext<IContext>({} as IContext);

export function AuthProvider({ children }: { children: any}) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const registerHanderl = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const { user } = await register(email, password);

      await addDoc(collection(db, 'users'), {
        _id: user.uid,
        displayName: 'No name',
      });
    } catch (error: any) {
      console.log('Error reg: ', error);
    } finally {
      setIsLoading(false);
    }
  }

  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      await login(email, password);
    } catch (error: any) {
      console.log('Error login: ', error);
    } finally {
      setIsLoading(false);
    }
  }

  const logoutHandler = async () => {
    setIsLoading(true);

    try {
      await logout();
    } catch (error: any) {
      console.log('Error logout: ', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => onAuthStateChanged(auth, user => {
    setUser(user || null);
    setIsLoadingInitial(false);
  }), []);

  const value = useMemo(() => ({
    user,
    isLoading,
    login: loginHandler,
    logout: logoutHandler,
    register: registerHanderl,
  }), [user, isLoading]);

  return <AuthContext.Provider value={value}>
    {!isLoadingInitial && children}
  </AuthContext.Provider>;
}