"use client"

import { FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  const openWhatsApp = () => {
    const phoneNumber = "6355380795"
    const message = "Hello, I'm interested in your services!"
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

 return (
    <section className="border-t border-gray-200">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Company Logo and Description */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 md:w-1/3">
            <div className="flex items-center mb-4">
              {/* Replace with your actual logo */}
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold mr-2">
                CN
              </div>
              <span className="text-xl font-bold text-gray-800">Chem Novaa</span>
            </div>
            <p className="text-sm text-gray-500 text-center md:text-left">
              Providing innovative chemical solutions for a sustainable future. Our commitment to excellence drives
              everything we do.
            </p>
          </div>



          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-end md:w-1/3">
            <div className="text-gray-500 mb-4 text-center md:text-right">
              <p className="mb-2">
                <strong>Address:</strong> Vadodara, Gujarat, India
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> +91-6355380795
              </p>
              <p>
                <strong>Email:</strong> info@chemnovaa.com
              </p>
            </div>
            <div className="mt-4">
              <button
                onClick={openWhatsApp}
                className="flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                aria-label="Contact us on WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                Chat with us
              </button>
            </div>
          </div>
        </div>

        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2025 Chem Novaa, Inc. All rights reserved.
        </p>
        <p className='mt-6 text-base leading-6 text-center text-gray-500 m-10'>App Code Version : {__APP_VERSION__}</p>
        </div>
      </section>
    );
  }
  