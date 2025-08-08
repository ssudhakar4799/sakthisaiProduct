import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Heart, Star, ShoppingCart, Minus, Plus, ArrowLeft, Check } from 'lucide-react';
import { RootState } from '../store';
import { addToCart } from '../store/slices/cartSlice';
import { toggleWishlist } from '../store/slices/wishlistSlice';
import toast from 'react-hot-toast';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  
  const [selectedSize, setSelectedSize] = useState<number>(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const product = useSelector((state: RootState) =>
    state.products.items.find(p => p.id === id)
  );
  
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const isInWishlist = product ? wishlistItems.includes(product.id) : false;

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-500">Product not found</p>
        <Link to="/products" className="block text-center mt-4 text-emerald-600 hover:text-emerald-700">
          Back to Products
        </Link>
      </div>
    );
  }

  const allImages = [product.imageUrl, ...product.images];
  const currentSize = product.sizes[selectedSize];
  const maxQuantity = Math.min(product.stock, 10);

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: currentSize.price,
      size: currentSize.size,
      quantity,
      imageUrl: product.imageUrl,
      maxStock: product.stock,
    }));
    toast.success('Added to cart!');
  };

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(product.id));
    toast.success(isInWishlist ? 'Removed from wishlist' : 'Added to wishlist');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-emerald-600">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-emerald-600">Products</Link>
        <span>/</span>
        <span className="capitalize">{product.category}</span>
        <span>/</span>
        <span className="text-gray-900">{product.name}</span>
      </div>

      {/* Back Button */}
      <Link
        to="/products"
        className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Products</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src={allImages[selectedImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Thumbnail Images */}
          {allImages.length > 1 && (
            <div className="flex space-x-2">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImageIndex === index ? 'border-emerald-600' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {product.new && (
              <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">New</span>
            )}
            {product.bestSeller && (
              <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full">Best Seller</span>
            )}
            {product.featured && (
              <span className="bg-emerald-500 text-white text-sm px-3 py-1 rounded-full">Featured</span>
            )}
          </div>

          {/* Title and Rating */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-lg font-medium text-gray-900">{product.rating}</span>
              </div>
              <span className="text-gray-600">({product.reviews} reviews)</span>
            </div>
          </div>

          {/* Price */}
          <div>
            <span className="text-4xl font-bold text-emerald-600">
              ₹{currentSize.price}
            </span>
          </div>

          {/* Size Selection */}
          {product.sizes.length > 1 && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(index)}
                    className={`px-4 py-2 border rounded-lg transition-colors ${
                      selectedSize === index
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-600'
                        : 'border-gray-300 text-gray-700 hover:border-emerald-600'
                    }`}
                  >
                    {size.size} - ₹{size.price}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">Quantity</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 border-x border-gray-300 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(maxQuantity, quantity + 1))}
                  className="p-2 hover:bg-gray-100"
                  disabled={quantity >= maxQuantity}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="text-sm text-gray-600">
                {product.stock < 10 && (
                  <span className="text-red-600">Only {product.stock} left in stock!</span>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1 bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>{product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
              </button>
              <button
                onClick={handleToggleWishlist}
                className={`p-3 rounded-lg border transition-colors ${
                  isInWishlist
                    ? 'border-red-300 bg-red-50 text-red-600'
                    : 'border-gray-300 text-gray-600 hover:border-red-300 hover:text-red-600'
                }`}
              >
                <Heart className={`h-6 w-6 ${isInWishlist ? 'fill-current' : ''}`} />
              </button>
            </div>
            <Link
              to="/checkout"
              state={{ directPurchase: {
                id: product.id,
                name: product.name,
                price: currentSize.price,
                size: currentSize.size,
                quantity,
                imageUrl: product.imageUrl,
                maxStock: product.stock,
              }}}
              className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors text-center block"
            >
              Buy Now
            </Link>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">Description</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">Benefits</h3>
            <ul className="space-y-2">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}