import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Users } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
              Privacy Policy
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
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Eye className="h-5 w-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                At Sakthisai, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                website or make a purchase from us.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-secondary-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Information We Collect</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Personal Information</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Name and contact information (email, phone number)</li>
                    <li>• Billing and shipping addresses</li>
                    <li>• Payment information (processed securely through our payment partners)</li>
                    <li>• Order history and preferences</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Automatically Collected Information</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• IP address and browser information</li>
                    <li>• Device information and operating system</li>
                    <li>• Website usage data and analytics</li>
                    <li>• Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
                  <Lock className="h-5 w-5 text-accent-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">How We Use Your Information</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-4">
                  <h3 className="font-semibold text-primary-800 mb-2">Order Processing</h3>
                  <p className="text-primary-700 text-sm">
                    To process and fulfill your orders, communicate about your purchases, and provide customer support.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-lg p-4">
                  <h3 className="font-semibold text-secondary-800 mb-2">Account Management</h3>
                  <p className="text-secondary-700 text-sm">
                    To create and manage your account, track your order history, and personalize your experience.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-lg p-4">
                  <h3 className="font-semibold text-accent-800 mb-2">Marketing Communications</h3>
                  <p className="text-accent-700 text-sm">
                    To send you promotional emails, newsletters, and updates about new products (with your consent).
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">Website Improvement</h3>
                  <p className="text-green-700 text-sm">
                    To analyze website usage, improve our services, and enhance user experience.
                  </p>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information Sharing and Disclosure</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-yellow-800 font-medium">
                  We do not sell, trade, or rent your personal information to third parties.
                </p>
              </div>
              
              <p className="text-gray-600 mb-4">We may share your information only in the following circumstances:</p>
              <ul className="text-gray-600 space-y-2">
                <li>• <strong>Service Providers:</strong> With trusted partners who help us operate our business (payment processors, shipping companies)</li>
                <li>• <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li>• <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li>• <strong>With Your Consent:</strong> When you explicitly agree to share your information</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">Our Security Measures</h3>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• SSL encryption for all data transmission</li>
                      <li>• Secure payment processing through certified partners</li>
                      <li>• Regular security audits and updates</li>
                      <li>• Limited access to personal information</li>
                      <li>• Secure data storage with backup systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights and Choices</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Access and Update</h3>
                  <p className="text-gray-600 text-sm">
                    You can access and update your personal information through your account settings.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Email Preferences</h3>
                  <p className="text-gray-600 text-sm">
                    You can unsubscribe from marketing emails at any time using the unsubscribe link.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Data Deletion</h3>
                  <p className="text-gray-600 text-sm">
                    You can request deletion of your personal data by contacting our support team.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Cookie Control</h3>
                  <p className="text-gray-600 text-sm">
                    You can manage cookie preferences through your browser settings.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>📧 <strong>Email:</strong> privacy@sakthisai.com</p>
                  <p>📞 <strong>Phone:</strong> +91 9876543210</p>
                  <p>📍 <strong>Address:</strong> Sakthisai Herbal Products, Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Policy Updates</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes 
                  by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                  We encourage you to review this Privacy Policy periodically.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}