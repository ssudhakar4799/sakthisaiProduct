import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArrowRight, Leaf, Shield, Award, Truck } from 'lucide-react';
import { RootState } from '../store';
import ProductCard from '../components/ProductCard/ProductCard';

export default function HomePage() {
  const { items: products } = useSelector((state: RootState) => state.products);
  
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);
  const bestSellers = products.filter(product => product.bestSeller).slice(0, 4);
  const newProducts = products.filter(product => product.new).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-100/20 to-secondary-100/20 animate-pulse-slow"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-slide-up">
                Natural Beauty,
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent block">Pure Heritage</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in">
                Discover Sakthisai's premium herbal products crafted with nature's finest ingredients 
                for your hair and skin care needs.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-bounce-in">
                <Link
                  to="/products"
                  className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-3 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 hover:shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Herbal Products"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Leaf className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">100% Natural</h3>
              <p className="text-gray-600">Pure herbal ingredients sourced from nature</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-secondary-100 to-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Shield className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Tested</h3>
              <p className="text-gray-600">Rigorously tested for purity and effectiveness</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-accent-100 to-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Award className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Trusted by thousands of satisfied customers</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Truck className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and secure shipping across India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/products?category=hair" className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Hair Care"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center group-hover:from-primary-900/60 transition-all duration-300">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Hair Care</h3>
                  <p className="text-lg">Nourish and strengthen your hair naturally</p>
                </div>
              </div>
            </Link>
            <Link to="/products?category=skin" className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Skin Care"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center group-hover:from-secondary-900/60 transition-all duration-300">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Skin Care</h3>
                  <p className="text-lg">Reveal your natural glow and radiance</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
            <Link
              to="/products"
              className="text-primary-600 hover:text-primary-700 flex items-center space-x-2 group transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-gradient-to-br from-secondary-50 to-accent-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Best Sellers</h2>
            <Link
              to="/products"
              className="text-secondary-600 hover:text-secondary-700 flex items-center space-x-2 group transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">New Arrivals</h2>
            <Link
              to="/products"
              className="text-accent-600 hover:text-accent-700 flex items-center space-x-2 group transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-secondary-600/90"></div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Stay Updated</h2>
          <p className="text-primary-100 mb-8 text-lg relative z-10">
            Get the latest updates on new products and exclusive offers
          </p>
          <div className="max-w-md mx-auto flex space-x-4 relative z-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}