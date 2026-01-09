import { useGetProductCategories } from "../../../../shared/queries/product/use-get-product-categories";
import { useBottomSheetStore } from "../../../../shared/store/use-bottom-sheet-store";
import { useFilterStore } from "../../../../shared/store/use-filter-store";

export const useFilterViewModel = () => {
  const { isLoading, data: productsCategories } =
    useGetProductCategories();
  const { close } = useBottomSheetStore();
  const { updateFilter, filterState, applyFilters, resetFilter } =
    useFilterStore();

  const handleValueMaxChange = (value: number) => {
    updateFilter({ key: "valueMax", value });
  };

  const handleValueMinChange = (value: number) => {
    updateFilter({ key: "valueMin", value });
  };

  const handleCategoryToggle = (categoryId: number) => {
    const categoryAlreadyInArray =
      filterState.selectedCategories.includes(categoryId);

    if (categoryAlreadyInArray) {
      updateFilter({
        key: "selectedCategories",
        value: filterState.selectedCategories.filter((id) => id !== categoryId),
      });
    } else {
      updateFilter({
        key: "selectedCategories",
        value: [...filterState.selectedCategories, categoryId],
      });
    }
  };

  const handleApplyFilters = () => {
    applyFilters();
    close();
  };

  const handleResetFilter = () => {
    close();
    resetFilter();
  };

  return {
    isLoading,
    productsCategories,
    selectedCategories: filterState.selectedCategories,
    handleResetFilter,
    handleApplyFilters,
    handleValueMaxChange,
    handleValueMinChange,
    handleCategoryToggle,
  };
};
