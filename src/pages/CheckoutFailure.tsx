import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle, RefreshCw, Home, ShoppingCart, AlertTriangle } from 'lucide-react';

export default function CheckoutFailure() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Failure Animation */}
        <div className="text-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-in shadow-2xl">
              <XCircle className="h-12 w-12 text-white" />
            </div>
            <div className="absolute inset-0 w-24 h-24 bg-red-400 rounded-full mx-auto animate-ping opacity-20"></div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-2 animate-slide-up">
            Payment Failed
          </h1>
          <p className="text-gray-600 animate-fade-in">
            We couldn't process your payment. Please try again.
          </p>
        </div>

        {/* Error Details Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border border-red-100 animate-slide-up">
          <div className="text-center mb-6">
            <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-lg p-4 mb-4">
              <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Transaction ID</p>
              <p className="text-lg font-bold text-red-600">#TXN{Date.now().toString().slice(-8)}</p>
            </div>
          </div>

          {/* Common Reasons */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Common reasons for payment failure:</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Insufficient funds in your account</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Incorrect card details or expired card</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Network connectivity issues</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Bank security restrictions</span>
              </li>
            </ul>
          </div>

          {/* What to do next */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">What you can do:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Check your card details and try again</li>
              <li>• Try using a different payment method</li>
              <li>• Contact your bank if the issue persists</li>
              <li>• Reach out to our support team for help</li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 animate-fade-in">
          <Link
            to="/checkout"
            className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center block font-medium flex items-center justify-center space-x-2"
          >
            <RefreshCw className="h-5 w-5" />
            <span>Try Again</span>
          </Link>
          
          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/cart"
              className="bg-white text-primary-600 py-3 px-4 rounded-xl border-2 border-primary-200 hover:bg-primary-50 transition-all duration-300 text-center flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>View Cart</span>
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

        {/* Support Information */}
        <div className="bg-white rounded-xl shadow-lg p-4 mt-6 border border-gray-100 animate-fade-in">
          <h3 className="font-semibold text-gray-800 mb-2">Need Help?</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>📧 Email: support@sakthisai.com</p>
            <p>📞 Phone: +91 9876543210</p>
            <p>💬 Live Chat: Available 24/7</p>
          </div>
        </div>

        {/* Reassurance Message */}
        <div className="text-center mt-6 animate-fade-in">
          <p className="text-gray-500 text-sm">
            Don't worry! Your cart items are still saved. 🛒
          </p>
          <p className="text-gray-400 text-xs mt-1">
            No amount has been deducted from your account.
          </p>
        </div>
      </div>
    </div>
  );
}