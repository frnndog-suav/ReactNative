import { TUserDTO } from "@dtos/UserDTO";
import { api } from "@services/api";
import {
  storageAuthTokenGet,
  storageAuthTokenRemove,
  storageAuthTokenSave,
} from "@storage/storageAuthToken";
import {
  storageUserGet,
  storageUserRemove,
  storageUserSave,
} from "@storage/storageUser";
import { createContext, useEffect, useState } from "react";

export type TAuthContextDataProps = {
  user: TUserDTO;
  isLoadingUserStorageData: boolean;
  setNewUser(value: TUserDTO): void;
  signIn(email: string, password: string): Promise<void>;
  loadUserData(): Promise<void>;
  signOut(): Promise<void>;
  updateUserProfile(userUpdated: TUserDTO): Promise<void>;
};

export const AuthContext = createContext<TAuthContextDataProps>(
  {} as TAuthContextDataProps
);

type TAuthContextProviderProps = {
  children: React.ReactNode;
};

export function AuthContextProvider({ children }: TAuthContextProviderProps) {
  const [user, setUser] = useState<TUserDTO>({} as TUserDTO);
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] =
    useState(true);

  async function userAndTokenUpdate({
    token,
    userData,
  }: {
    userData: TUserDTO;
    token: string;
  }) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setUser(userData);
  }

  async function storageUserAndTokenSave({
    token,
    userData,
    refresh_token,
  }: {
    userData: TUserDTO;
    token: string;
    refresh_token: string;
  }) {
    try {
      setIsLoadingUserStorageData(true);
      await storageUserSave(userData);
      await storageAuthTokenSave({ refresh_token, token });
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  function setNewUser(value: TUserDTO) {
    setUser(value);
  }

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post("/sessions", { email, password });

      if (data.user && data.token && data.refresh_token) {
        await storageUserAndTokenSave({
          token: data.token,
          userData: data.user,
          refresh_token: data.refresh_token,
        });
        userAndTokenUpdate({ token: data.token, userData: data.user });
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

  async function loadUserData() {
    try {
      setIsLoadingUserStorageData(true);
      const userLogged = await storageUserGet();
      const { token } = await storageAuthTokenGet();

      if (token && userLogged) {
        userAndTokenUpdate({ token, userData: userLogged });
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function signOut() {
    try {
      setIsLoadingUserStorageData(true);
      setUser({} as TUserDTO);
      await storageUserRemove();
      await storageAuthTokenRemove();
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function updateUserProfile(userUpdated: TUserDTO) {
    try {
      setUser(userUpdated);

      await storageUserSave(userUpdated);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    loadUserData();
  }, []);

  useEffect(() => {
    const subscribe = api.registerInterceptTokenManager(signOut);

    return () => {
      subscribe();
    };
  }, [signOut]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoadingUserStorageData,
        setNewUser,
        signIn,
        signOut,
        loadUserData,
        updateUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
