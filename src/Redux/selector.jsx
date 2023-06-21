// Example: const [useSelectorValue] = (state) => state.[name_reducer in store].<key in initialState>

export const getCarouselData = (state) => state.carousel;

export const getValueSearch = (state) => state.search.value;

export const getDataFilter = (state) => state.filter.data;

export const getDataFilters = (state) => state.filter.data.results;

export const getGenesFilter = (state) => state.filter.genres;

export const getTotalFilter = (state) => state.filter.data.total_results;

export const getLoadingFilter = (state) => state.filter.loading;

export const getTypeMovie = (state) => state.filter.type;
