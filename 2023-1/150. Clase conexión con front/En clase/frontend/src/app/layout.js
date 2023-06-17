"use client"

import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import 'bootstrap/dist/js/bootstrap.bundle.js' ;

import './globals.css'
import { Inter } from 'next/font/google'
import { useEffect } from 'react';
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ['latin'] })

function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>

      </head>
      <body className={inter.className}>{children}
      
      </body>
    </html>
  )
}

export default dynamic(() => Promise.resolve(RootLayout), {
  ssr: false,
});