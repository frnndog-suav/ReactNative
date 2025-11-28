import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { TUser } from "../types/user";

export const USER_DATA_KEY = "marketplace-auth";

type TSetSessionParams = {
  user: TUser | null;
  token: string | null;
  refreshToken: string | null;
};

type TUpdateTokensParams = {
  token: string;
  refreshToken: string;
};

export type TUserStore = {
  user: TUser | null;
  token: string | null;
  refreshToken: string | null;

  logout: () => void;
  setSession: (data: TSetSessionParams) => void;
  updateTokens: (data: TUpdateTokensParams) => void;
};

export const useUserStore = create<TUserStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      refreshToken: null,

      logout: () => set({ user: null, token: null, refreshToken: null }),
      setSession: (sessionData) => {
        set({ ...sessionData });
      },
      updateTokens: (updateTokensParams) => {
        set({ ...updateTokensParams });
      },
    }),
    {
      name: USER_DATA_KEY,
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
