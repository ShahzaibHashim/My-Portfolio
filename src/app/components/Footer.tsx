import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='bg-blue-200'>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-600 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Shahzaib Hashim</span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Shahzaibhashim
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-2">
                        <a href="https://www.facebook.com/shahzaibjunejo.junejo.5?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className='text-xl text-gray-500 hover:text-blue-700' />
                        </a>
                        <a href="https://www.instagram.com/shahzaib___hashim?igsh=bGUxdWllcTF2aGpw" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='text-xl text-gray-500 hover:text-pink-700' />
                        </a>
                        <a href="https://www.linkedin.com/in/shahzaibhashim" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='text-xl text-gray-500 hover:text-blue-900' />
                        </a>
                        <a href="https://wa.me/qr/WTMYPBXVKC4RN1" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className='text-xl text-gray-500 hover:text-green-600' />
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Footer
