import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-accent-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-secondary-600 hover:text-secondary-700 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-secondary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent mb-2">
              Terms of Service
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            
            {/* Introduction */}
            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <Scale className="h-5 w-5 text-secondary-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Agreement to Terms</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Welcome to Sakthisai! These Terms of Service ("Terms") govern your use of our website and services. 
                By accessing or using our website, you agree to be bound by these Terms. If you disagree with any 
                part of these terms, then you may not access our service.
              </p>
            </section>

            {/* Acceptance */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Acceptance of Terms</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="text-green-800 font-medium mb-2">By using our services, you confirm that:</p>
                    <ul className="text-green-700 space-y-1 text-sm">
                      <li>• You are at least 18 years old or have parental consent</li>
                      <li>• You have the legal capacity to enter into these Terms</li>
                      <li>• You will comply with all applicable laws and regulations</li>
                      <li>• All information you provide is accurate and truthful</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Products and Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Products and Services</h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-secondary-50 to-accent-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Product Information</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• All products are 100% natural herbal formulations</li>
                    <li>• Product descriptions and images are for informational purposes</li>
                    <li>• We reserve the right to modify or discontinue products</li>
                    <li>• Availability is subject to stock and may vary</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Pricing and Availability</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• All prices are in Indian Rupees (INR) and include applicable taxes</li>
                    <li>• Prices may change without notice</li>
                    <li>• We reserve the right to correct pricing errors</li>
                    <li>• Product availability is not guaranteed until order confirmation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Orders and Payments */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Orders and Payments</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Order Process</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Orders are subject to acceptance and availability</li>
                    <li>• We may cancel orders for any reason</li>
                    <li>• Order confirmation does not guarantee acceptance</li>
                    <li>• Bulk orders may require special approval</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Payment Terms</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Payment is required at the time of order</li>
                    <li>• We accept major credit cards and digital payments</li>
                    <li>• All transactions are processed securely</li>
                    <li>• Failed payments may result in order cancellation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Shipping and Delivery */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping and Delivery</h2>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">Delivery Information</h3>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• Standard delivery: 3-7 business days</li>
                      <li>• Express delivery: 1-3 business days</li>
                      <li>• Free shipping on orders above ₹500</li>
                      <li>• Delivery times may vary by location</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">Shipping Policies</h3>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• Accurate address information is required</li>
                      <li>• Risk of loss passes upon delivery</li>
                      <li>• Delivery attempts are limited</li>
                      <li>• Additional charges may apply for remote areas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Returns and Refunds */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Returns and Refunds</h2>
              
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">Return Policy</h3>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• 30-day return policy for unopened products</li>
                    <li>• Products must be in original packaging</li>
                    <li>• Return shipping costs may apply</li>
                    <li>• Damaged or defective items are fully refundable</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">Refund Process</h3>
                  <ul className="text-yellow-700 space-y-1 text-sm">
                    <li>• Refunds processed within 5-7 business days</li>
                    <li>• Original payment method will be credited</li>
                    <li>• Shipping charges are non-refundable</li>
                    <li>• Partial refunds may apply for used products</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Responsibilities</h2>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-800 mb-2">Prohibited Activities</h3>
                    <ul className="text-red-700 space-y-1 text-sm">
                      <li>• Providing false or misleading information</li>
                      <li>• Using the service for illegal purposes</li>
                      <li>• Attempting to hack or disrupt our systems</li>
                      <li>• Reselling products without authorization</li>
                      <li>• Violating intellectual property rights</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Account Security</h3>
                <p className="text-gray-600 text-sm">
                  You are responsible for maintaining the confidentiality of your account credentials and 
                  for all activities that occur under your account. Please notify us immediately of any 
                  unauthorized use of your account.
                </p>
              </div>
            </section>

            {/* Disclaimers */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclaimers and Limitations</h2>
              
              <div className="space-y-4">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-800 mb-2">Product Disclaimers</h3>
                  <ul className="text-orange-700 space-y-1 text-sm">
                    <li>• Products are not intended to diagnose, treat, cure, or prevent any disease</li>
                    <li>• Individual results may vary</li>
                    <li>• Consult healthcare professionals before use if pregnant or nursing</li>
                    <li>• Discontinue use if adverse reactions occur</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-800 mb-2">Service Limitations</h3>
                  <ul className="text-purple-700 space-y-1 text-sm">
                    <li>• Services provided "as is" without warranties</li>
                    <li>• We do not guarantee uninterrupted service</li>
                    <li>• Technical issues may occasionally occur</li>
                    <li>• Third-party services are beyond our control</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <div className="bg-gradient-to-r from-secondary-50 to-accent-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>📧 <strong>Email:</strong> legal@sakthisai.com</p>
                  <p>📞 <strong>Phone:</strong> +91 9876543210</p>
                  <p>📍 <strong>Address:</strong> Sakthisai Herbal Products, Chennai, Tamil Nadu, India</p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    These terms constitute the entire agreement between you and Sakthisai regarding 
                    the use of our services and supersede all prior agreements.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}