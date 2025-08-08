import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { RootState } from '../store';
import { setFilters, setSortBy, clearFilters } from '../store/slices/productsSlice';
import ProductCard from '../components/ProductCard/ProductCard';

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dispatch = useDispatch();
  
  const { filteredItems, filters, sortBy, searchTerm } = useSelector((state: RootState) => state.products);

  // Initialize filters from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      dispatch(setFilters({ ...filters, category: categoryParam }));
    }
  }, [searchParams]);

  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'hair', label: 'Hair Care' },
    { value: 'skin', label: 'Skin Care' },
  ];

  const subcategories = [
    { value: '', label: 'All Types' },
    { value: 'oil', label: 'Oils' },
    { value: 'face wash', label: 'Face Wash' },
    { value: 'shampoo', label: 'Shampoo' },
    { value: 'serum', label: 'Serum' },
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  const priceRanges = [
    { value: '', label: 'All Prices' },
    { value: '0-250', label: 'Under ₹250' },
    { value: '250-350', label: '₹250 - ₹350' },
    { value: '350-500', label: '₹350 - ₹500' },
    { value: '500+', label: 'Above ₹500' },
  ];

  const handleCategoryChange = (category: string) => {
    dispatch(setFilters({ ...filters, category: category || undefined }));
  };

  const handleSubcategoryChange = (subcategory: string) => {
    dispatch(setFilters({ ...filters, subcategory: subcategory || undefined }));
  };

  const handlePriceRangeChange = (range: string) => {
    if (!range) {
      dispatch(setFilters({ ...filters, priceRange: undefined }));
    } else if (range === '500+') {
      dispatch(setFilters({ ...filters, priceRange: [500, 1000] }));
    } else {
      const [min, max] = range.split('-').map(Number);
      dispatch(setFilters({ ...filters, priceRange: [min, max] }));
    }
  };

  const handleRatingChange = (rating: number) => {
    dispatch(setFilters({ ...filters, rating }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg"
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </button>
        </div>

        {/* Filters Sidebar */}
        <div className={`lg:w-80 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button
                onClick={() => dispatch(clearFilters())}
                className="text-emerald-600 hover:text-emerald-700 text-sm"
              >
                Clear All
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Category</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category.value} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={category.value}
                      checked={filters.category === category.value || (!filters.category && !category.value)}
                      onChange={() => handleCategoryChange(category.value)}
                      className="mr-3 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-gray-700">{category.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Subcategory Filter */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Type</h3>
              <div className="space-y-2">
                {subcategories.map(subcategory => (
                  <label key={subcategory.value} className="flex items-center">
                    <input
                      type="radio"
                      name="subcategory"
                      value={subcategory.value}
                      checked={filters.subcategory === subcategory.value || (!filters.subcategory && !subcategory.value)}
                      onChange={() => handleSubcategoryChange(subcategory.value)}
                      className="mr-3 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-gray-700">{subcategory.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Price Range</h3>
              <div className="space-y-2">
                {priceRanges.map(range => (
                  <label key={range.value} className="flex items-center">
                    <input
                      type="radio"
                      name="priceRange"
                      value={range.value}
                      checked={
                        (!filters.priceRange && !range.value) ||
                        (range.value === '0-250' && filters.priceRange && filters.priceRange[0] === 0 && filters.priceRange[1] === 250) ||
                        (range.value === '250-350' && filters.priceRange && filters.priceRange[0] === 250 && filters.priceRange[1] === 350) ||
                        (range.value === '350-500' && filters.priceRange && filters.priceRange[0] === 350 && filters.priceRange[1] === 500) ||
                        (range.value === '500+' && filters.priceRange && filters.priceRange[0] === 500)
                      }
                      onChange={() => handlePriceRangeChange(range.value)}
                      className="mr-3 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-gray-700">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Minimum Rating</h3>
              <div className="space-y-2">
                {[4.5, 4.0, 3.5, 3.0].map(rating => (
                  <label key={rating} className="flex items-center">
                    <input
                      type="radio"
                      name="rating"
                      value={rating}
                      checked={filters.rating === rating}
                      onChange={() => handleRatingChange(rating)}
                      className="mr-3 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-gray-700">{rating}+ Stars</span>
                  </label>
                ))}
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="rating"
                    value=""
                    checked={!filters.rating}
                    onChange={() => handleRatingChange(0)}
                    className="mr-3 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-gray-700">All Ratings</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {searchTerm ? `Search Results for "${searchTerm}"` : 'All Products'}
              </h1>
              <p className="text-gray-600">
                {filteredItems.length} product{filteredItems.length !== 1 ? 's' : ''} found
              </p>
            </div>
            
            {/* Sort Options */}
            <div className="mt-4 md:mt-0">
              <select
                value={sortBy}
                onChange={(e) => dispatch(setSortBy(e.target.value))}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters */}
          {(filters.category || filters.subcategory || filters.priceRange || filters.rating || searchTerm) && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {filters.category && (
                  <span className="inline-flex items-center bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full">
                    Category: {categories.find(c => c.value === filters.category)?.label}
                    <button
                      onClick={() => handleCategoryChange('')}
                      className="ml-2 hover:text-emerald-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {filters.subcategory && (
                  <span className="inline-flex items-center bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full">
                    Type: {subcategories.find(s => s.value === filters.subcategory)?.label}
                    <button
                      onClick={() => handleSubcategoryChange('')}
                      className="ml-2 hover:text-emerald-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {filters.priceRange && (
                  <span className="inline-flex items-center bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full">
                    Price: ₹{filters.priceRange[0]} - ₹{filters.priceRange[1]}
                    <button
                      onClick={() => handlePriceRangeChange('')}
                      className="ml-2 hover:text-emerald-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {filters.rating && (
                  <span className="inline-flex items-center bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full">
                    {filters.rating}+ Stars
                    <button
                      onClick={() => handleRatingChange(0)}
                      className="ml-2 hover:text-emerald-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {searchTerm && (
                  <span className="inline-flex items-center bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full">
                    Search: "{searchTerm}"
                    <button
                      onClick={() => dispatch({ type: 'products/setSearchTerm', payload: '' })}
                      className="ml-2 hover:text-emerald-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Products Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              <button
                onClick={() => dispatch(clearFilters())}
                className="mt-4 text-emerald-600 hover:text-emerald-700"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}