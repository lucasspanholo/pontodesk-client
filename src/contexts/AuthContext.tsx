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
  admin: boolean;
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
      const { 'pontodesk.token': token } = await parseCookies();

      if (token) {
        await api.get('auth_token')
          .then((response) => {
            console.log(response.data)
            setUser(response.data);
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
    await api.post("auth", { email, password })
      .then((response) => {
        console.log(response)

        if (response.data.errors) {
          toast({
            title: 'Usuário ou senha inválidos!',
            position: 'top-right',
            status: 'error',
            isClosable: true,
          })
        } else {
          const token = response.data.token
          setUser(response.data.user)

          setCookie(undefined, 'pontodesk.token', token,
            { maxAge: 60 * 60 * 1 } // 1 hour
          );

          toast({
            title: 'Login realizado com sucesso!',
            position: 'top-right',
            status: 'success',
            isClosable: true,
          })

          if (user.admin) {
            Router.push('dashboard')
          } else {
            Router.push('calls')
          }
        }
      }).catch(() => {
        toast({
          title: 'Não foi possível se conectar ao servidor!',
          position: 'top-right',
          status: 'error',
          isClosable: true,
        })
      })
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}