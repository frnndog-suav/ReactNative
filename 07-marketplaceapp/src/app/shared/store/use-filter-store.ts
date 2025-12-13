import { create } from "zustand";

export type TFilterState = {
  valueMin: number | null;
  valueMax: number | null;
  selectedCategories: number[];
  searchText: string;
};

type TFilterStore = {
  appliedFilterState: TFilterState;
  filterState: TFilterState;

  updateFilter: (params: {
    key: keyof TFilterState;
    value: string | number | number[];
  }) => void;

  resetFilter: () => void;

  applyFilters: () => void;
};

const DEFAULT_FILTER_VALUES = {
  searchText: "",
  selectedCategories: [],
  valueMax: null,
  valueMin: null,
};

export const useFilterStore = create<TFilterStore>((set) => ({
  appliedFilterState: DEFAULT_FILTER_VALUES,
  filterState: DEFAULT_FILTER_VALUES,
  updateFilter: ({ key, value }) => {
    set((state) => ({
      filterState: { ...state.filterState, [key]: value },
    }));
  },
  resetFilter: () =>
    set({
      appliedFilterState: DEFAULT_FILTER_VALUES,
      filterState: DEFAULT_FILTER_VALUES,
    }),

  applyFilters: () =>
    set((state) => ({
      appliedFilterState: state.filterState,
    })),
}));
