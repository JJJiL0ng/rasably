'use client'
import { useState } from 'react'

export default function Sorry() {
  const [couponCode] = useState('RASABLY25')

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 gradient-bg">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Logo and Title */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">
            RASABLY
          </h1>
        </div>

        {/* Main Content */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            We&apos;re Almost There!
          </h2>
          
          <p className="text-gray-600">
            We apologize, but our service hasn&apos;t launched yet. We&apos;re working hard to bring you the best Korean fashion experience in India.
          </p>

          <div className="space-y-4">
            <p className="text-gray-600">
              Don&apos;t forget to save your exclusive discount code for our launch:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-2xl font-mono font-bold text-[#FC7E7A]">
                {couponCode}
              </p>
            </div>
            <p className="text-sm text-gray-500">
              Get 25% off on your first purchase when we launch!
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-sm text-white/80">
          Stay tuned - We&apos;re launching soon!
        </p>
      </div>
    </div>
  )
}
