import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaGithub,
    FaDribbble,
  } from 'react-icons/fa';
  import './style/navbar.css'

  export default function Footer() {
    return (
      <section >
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            {['About', 'Blog', 'Team', 'Pricing', 'Contact', 'Terms'].map((item) => (
              <div key={item} className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                  {item}
                </a>
              </div>
            ))}
          </nav>
          <div className="flex justify-center mt-8 space-x-6 text-gray-400">
            <a href="#" className="hover:text-gray-500" aria-label="Facebook">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-500" aria-label="Instagram">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-500" aria-label="Twitter">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-500" aria-label="GitHub">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-500" aria-label="Dribbble">
              <FaDribbble className="w-6 h-6" />
            </a>
          </div>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400 m-10">
            © 2025 Chem Novaa, Inc. All rights reserved.
        </p>
        <p className='mt-6 text-base leading-6 text-center text-gray-500 m-10'>App Code Version : {__APP_VERSION__}</p>
      </section>
    );
  }
  