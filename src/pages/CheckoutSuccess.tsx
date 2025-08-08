import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Package, Truck, Home, ShoppingBag } from 'lucide-react';

export default function CheckoutSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate order confirmation
    const timer = setTimeout(() => {
      // Auto redirect after 10 seconds
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-primary-50 to-secondary-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-in shadow-2xl">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <div className="absolute inset-0 w-24 h-24 bg-green-400 rounded-full mx-auto animate-ping opacity-20"></div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-2 animate-slide-up">
            Order Placed Successfully!
          </h1>
          <p className="text-gray-600 animate-fade-in">
            Thank you for your purchase. Your order has been confirmed.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border border-green-100 animate-slide-up">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Order Confirmation</h2>
            <div className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-lg p-4">
              <p className="text-sm text-gray-600">Order ID</p>
              <p className="text-lg font-bold text-primary-600">#ORD{Date.now().toString().slice(-8)}</p>
            </div>
          </div>

          {/* Order Status Steps */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">Order Confirmed</p>
                <p className="text-sm text-gray-500">Your order has been placed successfully</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                <Package className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">Processing</p>
                <p className="text-sm text-gray-500">We're preparing your order</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-400">Shipping</p>
                <p className="text-sm text-gray-400">Your order will be shipped soon</p>
              </div>
            </div>
          </div>

          {/* Estimated Delivery */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Estimated Delivery</p>
                <p className="font-semibold text-gray-800">
                  {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
              <Truck className="h-8 w-8 text-primary-600" />
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">What's Next?</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• You'll receive an email confirmation shortly</li>
              <li>• Track your order in the "My Orders" section</li>
              <li>• We'll notify you when your order ships</li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 animate-fade-in">
          <Link
            to="/orders"
            className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center block font-medium"
          >
            Track Your Order
          </Link>
          
          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/products"
              className="bg-white text-primary-600 py-3 px-4 rounded-xl border-2 border-primary-200 hover:bg-primary-50 transition-all duration-300 text-center flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Continue Shopping</span>
            </Link>
            
            <Link
              to="/"
              className="bg-white text-gray-600 py-3 px-4 rounded-xl border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300 text-center flex items-center justify-center space-x-2"
            >
              <Home className="h-4 w-4" />
              <span>Go Home</span>
            </Link>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="text-center mt-8 animate-fade-in">
          <p className="text-gray-500 text-sm">
            Thank you for choosing Sakthisai! 🌿
          </p>
          <p className="text-gray-400 text-xs mt-1">
            For any questions, contact us at support@sakthisai.com
          </p>
        </div>
      </div>
    </div>
  );
}