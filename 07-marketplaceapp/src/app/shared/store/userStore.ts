import { create } from "zustand";
import { TUser } from "../types/user";

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

export const useUserStore = create<TUserStore>((set) => ({
  user: null,
  token: null,
  refreshToken: null,
  logout: () => {},
  setSession: (data) => set({ ...data }),
  updateTokens: (data) => set({ ...data }),
}));
