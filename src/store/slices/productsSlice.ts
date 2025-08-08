import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, FilterOptions, SortOption } from '../../types';
import { products as mockProducts } from '../../data/products';

interface ProductsState {
  items: Product[];
  filteredItems: Product[];
  filters: FilterOptions;
  sortBy: string;
  loading: boolean;
  searchTerm: string;
}

const initialState: ProductsState = {
  items: mockProducts,
  filteredItems: mockProducts,
  filters: {},
  sortBy: 'featured',
  loading: false,
  searchTerm: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
      state.filteredItems = action.payload;
    },
    setFilters: (state, action: PayloadAction<FilterOptions>) => {
      state.filters = action.payload;
      state.filteredItems = applyFiltersAndSort(state.items, action.payload, state.sortBy, state.searchTerm);
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
      state.filteredItems = applyFiltersAndSort(state.items, state.filters, action.payload, state.searchTerm);
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.filteredItems = applyFiltersAndSort(state.items, state.filters, state.sortBy, action.payload);
    },
    clearFilters: (state) => {
      state.filters = {};
      state.searchTerm = '';
      state.filteredItems = applyFiltersAndSort(state.items, {}, state.sortBy, '');
    },
  },
});

// Helper function to apply filters and sorting
function applyFiltersAndSort(
  products: Product[],
  filters: FilterOptions,
  sortBy: string,
  searchTerm: string
): Product[] {
  let filtered = [...products];

  // Apply search
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
    );
  }

  // Apply category filter
  if (filters.category) {
    filtered = filtered.filter(product => product.category === filters.category);
  }

  // Apply subcategory filter
  if (filters.subcategory) {
    filtered = filtered.filter(product => product.subcategory === filters.subcategory);
  }

  // Apply price range filter
  if (filters.priceRange) {
    const [min, max] = filters.priceRange;
    filtered = filtered.filter(product => product.price >= min && product.price <= max);
  }

  // Apply rating filter
  if (filters.rating) {
    filtered = filtered.filter(product => product.rating >= filters.rating!);
  }

  // Apply sorting
  switch (sortBy) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      filtered.sort((a, b) => Number(b.new) - Number(a.new));
      break;
    case 'featured':
    default:
      filtered.sort((a, b) => Number(b.featured) - Number(a.featured));
      break;
  }

  return filtered;
}

export const { setProducts, setFilters, setSortBy, setSearchTerm, clearFilters } = productsSlice.actions;
export default productsSlice.reducer;