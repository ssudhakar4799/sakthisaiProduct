import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Heart, ArrowLeft } from 'lucide-react';
import { RootState } from '../store';
import ProductCard from '../components/ProductCard/ProductCard';

export default function WishlistPage() {
  const { items: wishlistItems } = useSelector((state: RootState) => state.wishlist);
  const { items: allProducts } = useSelector((state: RootState) => state.products);
  
  const wishlistProducts = allProducts.filter(product => 
    wishlistItems.includes(product.id)
  );

  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-8">Save items you love by clicking the heart icon on any product.</p>
          <Link
            to="/products"
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center space-x-2"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-4 mb-8">
        <Link
          to="/products"
          className="text-emerald-600 hover:text-emerald-700 flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Continue Shopping</span>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>
      </div>

      <div className="mb-6">
        <p className="text-gray-600">
          {wishlistProducts.length} product{wishlistProducts.length !== 1 ? 's' : ''} in your wishlist
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlistProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}