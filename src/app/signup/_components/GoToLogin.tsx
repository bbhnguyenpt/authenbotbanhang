import Link from 'next/link'

import { ArrowRightIcon } from '@heroicons/react/24/solid'

const GoToLogin = () => {
  return (
    <div className="flex text-sm gap-3 items-center">
      <span>Already have a Retion account?</span>
      <Link
        href={'/signin'}
        className="flex items-center gap-1 text-blue-700 cursor-pointer hover:underline"
      >
        Log in <ArrowRightIcon className="size-4" />
      </Link>
    </div>
  )
}

export default GoToLogin
