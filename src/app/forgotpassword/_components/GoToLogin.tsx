import Link from 'next/link'
import React from 'react'

const GoToLogin = () => {
  return (
    <div className="flex text-sm gap-3 items-center">
      <Link
        href={'/signin'}
        className="flex items-center gap-1 text-blue-700 cursor-pointer hover:underline"
      >
        Return to login
      </Link>
    </div>
  )
}

export default GoToLogin
