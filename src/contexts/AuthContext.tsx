import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router'
import { useToast } from "@chakra-ui/react";

type User = {
  email: string;
  name: string;
  nickname: string;
  image: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => void;
}

type SignInData = {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null)
  const toast = useToast()

  const isAuthenticated = !!user;

  useEffect(() => {
    async function getValidatedUserToken() {
      const {
        'pontodesk.access_token': access_token,
        'pontodesk.uid': uid,
        'pontodesk.client': client
      } = parseCookies();

      if (access_token && uid && client) {
        await api.get('/auth/validate_token')
          .then((response) => {
            setUser(response.data);
            console.log('user', response.data);
          })
          .catch((error) => {
            toast({
              title: `${error.message}`,
              position: 'top-right',
              status: 'error',
              isClosable: true,
            })
          })
      }
    }

    getValidatedUserToken();
  }, [])

  async function signIn({ email, password }: SignInData) {
    try {
      const { data, headers } = await api.post("auth/sign_in", { email, password });

      setUser(data)
      const access_token = headers['access-token']
      const uid = headers['uid']
      const client = headers['client']

      setCookie(undefined, 'pontodesk.access_token', access_token,
        { maxAge: 60 * 60 * 1 } // 1 hour
      );

      setCookie(undefined, 'pontodesk.uid', uid,
        { maxAge: 60 * 60 * 1 } // 1 hour
      );

      setCookie(undefined, 'pontodesk.client', client,
        { maxAge: 60 * 60 * 1 } // 1 hour
      );

      api.defaults.headers['access_token'] = access_token;
      api.defaults.headers['uid'] = uid;
      api.defaults.headers['client'] = client;

      Router.push('dashboard')

      toast({
        title: 'Login realizado com sucesso!',
        position: 'top-right',
        status: 'success',
        isClosable: true,
      })
    } catch {
      toast({
        title: 'Usuário ou senha inválidos!',
        position: 'top-right',
        status: 'error',
        isClosable: true,
      })
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}