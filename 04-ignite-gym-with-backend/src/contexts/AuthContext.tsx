import { TUserDTO } from "@dtos/UserDTO";
import { api } from "@services/api";
import { createContext, useState } from "react";

export type TAuthContextDataProps = {
  user: TUserDTO;
  setNewUser(value: TUserDTO): void;
  signIn(email: string, password: string): Promise<void>;
};

export const AuthContext = createContext<TAuthContextDataProps>(
  {} as TAuthContextDataProps
);

type TAuthContextProviderProps = {
  children: React.ReactNode;
};

export function AuthContextProvider({ children }: TAuthContextProviderProps) {
  const [user, setUser] = useState<TUserDTO>({} as TUserDTO);

  function setNewUser(value: TUserDTO) {
    setUser(value);
  }

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post("/sessions", { email, password });

      console.log("signIn", data);

      if (data.user) {
      }
    } catch (error) {
      throw error;
    }

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
