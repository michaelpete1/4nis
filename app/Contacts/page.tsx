"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Need help? Reach out to us via phone, email, or visit our office!
        </p>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Phone className="text-blue-500 w-6 h-6" />
            <span className="text-gray-700 font-semibold">
              +234 801 234 5678
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="text-green-500 w-6 h-6" />
            <span className="text-gray-700 font-semibold">
              support@4nis.com
            </span>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-4">
            <MapPin className="text-red-500 w-6 h-6" />
            <span className="text-gray-700 font-semibold">
              123 Market Road, Lagos, Nigeria
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
