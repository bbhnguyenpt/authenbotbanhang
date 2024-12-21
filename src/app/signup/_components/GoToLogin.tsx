import Link from 'next/link'
import React from 'react'

import { ArrowRight } from 'lucide-react'

const GoToLogin = () => {
  return (
    <div className="flex text-sm gap-3 items-center">
      <span>Already have a Retion account?</span>
      <Link
        href={'/signin'}
        className="flex items-center gap-1 text-blue-700 cursor-pointer hover:underline"
      >
        Log in <ArrowRight size={16} />
      </Link>
    </div>
  )
}

export default GoToLogin
