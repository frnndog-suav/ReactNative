import { create } from "zustand";

type TFilterState = {
  valueMin: number | null;
  valueMax: number | null;
  selectedCategories: number[];
  searchText: string;
};

type TFilterStore = {
  appliedFilterState: TFilterState;

  updateFilter: (params: {
    key: keyof TFilterState;
    value: string | number | number[];
  }) => void;

  resetFilter: () => void;
};

const DEFAULT_FILTER_VALUES = {
  searchText: "",
  selectedCategories: [],
  valueMax: null,
  valueMin: null,
};

export const useUserFilterStore = create<TFilterStore>((set) => ({
  appliedFilterState: DEFAULT_FILTER_VALUES,
  updateFilter: ({ key, value }) => {
    set((state) => ({
      appliedFilterState: { ...state.appliedFilterState, [key]: value },
    }));
  },
  resetFilter: () => set({ appliedFilterState: DEFAULT_FILTER_VALUES }),
}));
