// components/Loader.jsx
'use client'
import { Loader2Icon } from 'lucide-react'
import React from 'react'

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[9999] bg-white/60 flex items-center justify-center">
      <Loader2Icon className="animate-spin w-8 h-8 text-black" />
    </div>
  )
}

export default Loader
