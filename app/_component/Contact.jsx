'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [mail, setMail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappMessage = `Name: ${name}%0AEmail: ${mail}%0AMessage: ${message}`
    const whatsappUrl = `https://wa.me/211926000224?text=${whatsappMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto max-w-md md:max-w-lg lg:max-w-xl">
        <form onSubmit={handleSubmit} className="mb-8 space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="outline-none text-black pl-4 py-3 rounded-md w-full"
              placeholder="Enter your name"
            />
            <input
              type="email"
              id="email"
              required
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              className="outline-none text-black pl-4 py-3 rounded-md w-full"
              placeholder="Enter your email"
            />
          </div>
          <textarea
            id="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="outline-none text-black pl-4 py-3 rounded-md w-full h-32"
            placeholder="Enter your message"
          />
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center text-sm gap-8 p-6 md:p-10 lg:p-12 bg-gray-800 rounded-lg" id="con">
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="font-bold text-xl">Contact</h2>
            <div className="flex gap-6">
              <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <svg width="32" height="32" fill="currentColor" className="text-white hover:text-green-500 transition duration-300">
                  <path d="M18 8h-3V6c0-.8.4-1 1-1h2V1h-3c-3 0-5 2-5 5v2H8v4h2v10h5V12h3l1-4z" />
                </svg>
              </a>
              <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
                <svg width="32" height="32" fill="currentColor" className="text-white hover:text-green-500 transition duration-300">
                  <path d="M16 0C7.2 0 0 7.2 0 16c0 2.8.7 5.5 2 7.9L0 32l8.1-2.1c2.4 1.3 5.1 2 7.9 2 8.8 0 16-7.2 16-16S24.8 0 16 0zm8.7 23.4c-.4 1.1-2.2 2.1-3.1 2.2-.8.1-1.5.4-4.9-.9-4.1-1.6-6.7-5.7-6.9-6-.2-.3-1.6-2.1-1.6-4 0-1.9 1-2.8 1.4-3.2.4-.4.9-.5 1.2-.5.3 0 .6 0 .9.1.3.1.7-.1 1.1.8.4.9 1.4 3.1 1.5 3.3.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.4.5-.6.7-.2.2-.4.4-.2.7.2.3 1 1.6 2.2 2.6 1.5 1.3 2.7 1.7 3 .2.3-.5.7-.9.9-1.2.2-.3.4-.3.6-.2.2.1 1.4.7 1.6.8.2.1.3.1.4.2.1.1.1.8-.3 1.9z" />
                </svg>
              </a>
              <a href="skype:yourusername?chat" target="_blank" rel="noopener noreferrer">
                <svg width="32" height="32" fill="currentColor" className="text-white hover:text-green-500 transition duration-300">
                  <path d="M16 0C7.2 0 0 7.2 0 16c0 2.8.7 5.5 2 7.9L0 32l8.1-2.1c2.4 1.3 5.1 2 7.9 2 8.8 0 16-7.2 16-16S24.8 0 16 0zm8.7 23.4c-.4 1.1-2.2 2.1-3.1 2.2-.8.1-1.5.4-4.9-.9-4.1-1.6-6.7-5.7-6.9-6-.2-.3-1.6-2.1-1.6-4 0-1.9 1-2.8 1.4-3.2.4-.4.9-.5 1.2-.5.3 0 .6 0 .9.1.3.1.7-.1 1.1.8.4.9 1.4 3.1 1.5 3.3.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.4.5-.6.7-.2.2-.4.4-.2.7.2.3 1 1.6 2.2 2.6 1.5 1.3 2.7 1.7 3 .2.3-.5.7-.9.9-1.2.2-.3.4-.3.6-.2.2.1 1.4.7 1.6.8.2.1.3.1.4.2.1.1.1.8-.3 1.9z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <Link href="mailto:wlove@gmail.com" className="block hover:underline">wlove@gmail.com</Link>
            <Link href="tel:+211926000224" className="block hover:underline">+211926000224</Link>
            <Link href="tel:+211910088823" className="block hover:underline">+211910088823</Link>
          </div>
        </div>
      </div>
    </div>
  )
}