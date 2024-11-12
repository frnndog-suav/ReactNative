import { TUserDTO } from "@dtos/UserDTO";
import { createContext, useState } from "react";

export type TAuthContextDataProps = {
  user: TUserDTO;
  setNewUser(value: TUserDTO): void;
  signIn(email: string, password: string): void;
};

export const AuthContext = createContext<TAuthContextDataProps>(
  {} as TAuthContextDataProps
);

type TAuthContextProviderProps = {
  children: React.ReactNode;
};

export function AuthContextProvider({ children }: TAuthContextProviderProps) {
  const [user, setUser] = useState<TUserDTO>({
    avatar: "",
    email: "",
    id: "",
    name: "",
  });

  function setNewUser(value: TUserDTO) {
    setUser(value);
  }

  function signIn(email: string, password: string) {
    setUser((current) => {
      return {
        ...current,
        email,
      };
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setNewUser,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
