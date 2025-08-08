import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Truck, Package, Clock, MapPin, CreditCard } from 'lucide-react';

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-accent-600 hover:text-accent-700 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-accent-600 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent mb-2">
              Shipping Policy
            </h1>
            <p className="text-gray-600">
              Fast, secure, and reliable delivery across India
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            
            {/* Shipping Overview */}
            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
                  <Package className="h-5 w-5 text-accent-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Shipping Overview</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Sakthisai, we are committed to delivering your herbal products safely and efficiently. 
                We partner with trusted courier services to ensure your orders reach you in perfect condition.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-green-800 mb-1">Fast Delivery</h3>
                  <p className="text-green-700 text-sm">3-7 business days nationwide</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-blue-800 mb-1">Secure Packaging</h3>
                  <p className="text-blue-700 text-sm">Eco-friendly & protective</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-purple-800 mb-1">Pan India</h3>
                  <p className="text-purple-700 text-sm">Delivery to all major cities</p>
                </div>
              </div>
            </section>

            {/* Shipping Options */}
            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Shipping Options</h2>
              </div>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Standard Shipping</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      FREE on orders ₹500+
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Delivery Time</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Metro cities: 3-5 business days</li>
                        <li>• Tier 2 cities: 4-6 business days</li>
                        <li>• Remote areas: 5-7 business days</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Shipping Cost</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Orders below ₹500: ₹50</li>
                        <li>• Orders ₹500 and above: FREE</li>
                        <li>• Remote areas: Additional ₹25</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Express Shipping</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      ₹100 extra
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Delivery Time</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Metro cities: 1-2 business days</li>
                        <li>• Tier 2 cities: 2-3 business days</li>
                        <li>• Available in major cities only</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Features</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Priority processing</li>
                        <li>• Real-time tracking</li>
                        <li>• Dedicated customer support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Processing Time */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Processing</h2>
              
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mt-1">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-yellow-800 mb-3">Processing Timeline</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-yellow-700 mb-2">Order Confirmation</h4>
                        <p className="text-yellow-600 text-sm">
                          Orders are confirmed within 2 hours of payment verification. 
                          You'll receive an email confirmation with order details.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-yellow-700 mb-2">Dispatch Time</h4>
                        <p className="text-yellow-600 text-sm">
                          Most orders are dispatched within 24-48 hours. 
                          You'll receive tracking information once shipped.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Delivery Areas */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delivery Coverage</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-3">Serviceable Areas</h3>
                  <ul className="text-green-700 space-y-2 text-sm">
                    <li>• All major metro cities</li>
                    <li>• Tier 2 and Tier 3 cities</li>
                    <li>• Most PIN codes across India</li>
                    <li>• Selected rural areas</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-3">Non-Serviceable Areas</h3>
                  <ul className="text-red-700 space-y-2 text-sm">
                    <li>• Remote hill stations</li>
                    <li>• Island territories (except major ones)</li>
                    <li>• Military/restricted areas</li>
                    <li>• Areas with courier restrictions</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> You can check if your area is serviceable by entering your PIN code 
                  during checkout. If your area is not serviceable, we'll notify you before order confirmation.
                </p>
              </div>
            </section>

            {/* Packaging */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Packaging Standards</h2>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Eco-Friendly Materials</h3>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Recyclable cardboard boxes</li>
                      <li>• Biodegradable bubble wrap</li>
                      <li>• Minimal plastic usage</li>
                      <li>• Sustainable packaging inserts</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Product Protection</h3>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Leak-proof sealing for liquids</li>
                      <li>• Cushioned packaging for fragile items</li>
                      <li>• Temperature-controlled for sensitive products</li>
                      <li>• Tamper-evident packaging</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Tracking */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Tracking</h2>
              
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-800 mb-2">How to Track</h3>
                  <ol className="text-purple-700 space-y-1 text-sm list-decimal list-inside">
                    <li>Check your email for tracking information</li>
                    <li>Visit the "My Orders" section in your account</li>
                    <li>Use the tracking number on courier website</li>
                    <li>Contact our support team for assistance</li>
                  </ol>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Package className="h-4 w-4 text-white" />
                    </div>
                    <h4 className="font-medium text-gray-800">Order Placed</h4>
                    <p className="text-gray-600 text-xs">Confirmation received</p>
                  </div>
                  
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Truck className="h-4 w-4 text-white" />
                    </div>
                    <h4 className="font-medium text-gray-800">In Transit</h4>
                    <p className="text-gray-600 text-xs">On the way to you</p>
                  </div>
                  
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <h4 className="font-medium text-gray-800">Delivered</h4>
                    <p className="text-gray-600 text-xs">Successfully delivered</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Special Instructions */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Important Information</h2>
              
              <div className="space-y-4">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-800 mb-2">Delivery Requirements</h3>
                  <ul className="text-orange-700 space-y-1 text-sm">
                    <li>• Someone must be available to receive the package</li>
                    <li>• Valid ID may be required for delivery</li>
                    <li>• Accurate address and contact details are essential</li>
                    <li>• Delivery attempts are limited (usually 3 attempts)</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-2">Delivery Issues</h3>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Undelivered packages will be returned to us</li>
                    <li>• Return shipping charges may apply</li>
                    <li>• Refunds processed after package return</li>
                    <li>• Contact us immediately for delivery issues</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping Support</h2>
              <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Need help with your shipment? Our customer support team is here to assist you.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 text-gray-600">
                    <p>📧 <strong>Email:</strong> shipping@sakthisai.com</p>
                    <p>📞 <strong>Phone:</strong> +91 9876543210</p>
                    <p>⏰ <strong>Hours:</strong> Mon-Sat, 9 AM - 6 PM</p>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p>💬 <strong>Live Chat:</strong> Available on website</p>
                    <p>📱 <strong>WhatsApp:</strong> +91 9876543210</p>
                    <p>📍 <strong>Address:</strong> Chennai, Tamil Nadu</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}