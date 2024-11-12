import { TUserDTO } from "@dtos/UserDTO";
import { createContext } from "react";

export type TAuthContextDataProps = {
  user: TUserDTO;
};

export const AuthContext = createContext<TAuthContextDataProps>(
  {} as TAuthContextDataProps
);

type TAuthContextProviderProps = {
  children: React.ReactNode;
};

export function AuthContextProvider({ children }: TAuthContextProviderProps) {
  return (
    <AuthContext.Provider
      value={{
        user: {
          avatar: "",
          email: "",
          id: "",
          name: "",
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
