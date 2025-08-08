import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { addToCart } from '../../store/slices/cartSlice';
import { toggleWishlist } from '../../store/slices/wishlistSlice';
import { RootState } from '../../store';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  
  const isInWishlist = wishlistItems.includes(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: selectedSize.price,
      size: selectedSize.size,
      quantity: 1,
      imageUrl: product.imageUrl,
      maxStock: product.stock,
    }));
    toast.success('Added to cart!');
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(toggleWishlist(product.id));
    toast.success(isInWishlist ? 'Removed from wishlist' : 'Added to wishlist');
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col space-y-1">
            {product.new && (
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">New</span>
            )}
            {product.bestSeller && (
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">Best Seller</span>
            )}
            {product.featured && (
              <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">Featured</span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleToggleWishlist}
            className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-200 ${
              isInWishlist 
                ? 'bg-red-100 text-red-600' 
                : 'bg-white/80 text-gray-600 hover:bg-red-100 hover:text-red-600'
            }`}
          >
            <Heart className={`h-5 w-5 ${isInWishlist ? 'fill-current' : ''}`} />
          </button>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem]">
            {product.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold text-emerald-600">
                ₹{selectedSize.price}
              </span>
              {product.stock < 10 && (
                <span className="text-xs text-red-600 font-medium">
                  Only {product.stock} left!
                </span>
              )}
            </div>
            
            {/* Size Options */}
            {product.sizes.length > 1 && (
              <div className="flex space-x-2">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedSize(size);
                    }}
                    className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                      selectedSize.size === size.size
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-white text-gray-600 border-gray-300 hover:border-emerald-600'
                    }`}
                  >
                    {size.size} - ₹{size.price}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>

      {/* Action Buttons */}
      <div className="px-4 pb-4 space-y-2">
        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>{product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
        </button>
        
        <Link
          to={`/product/${product.id}`}
          className="w-full bg-white text-emerald-600 py-2 px-4 rounded-lg border border-emerald-600 hover:bg-emerald-50 transition-colors text-center block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}