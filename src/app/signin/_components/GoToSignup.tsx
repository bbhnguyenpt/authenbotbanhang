import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const GoToSignup = () => {
  return (
    <div className="flex text-sm gap-3 items-center">
      <span>New to Bot Bán Hàng?</span>
      <Link
        href={'/signup'}
        className="flex items-center gap-1 text-blue-700 cursor-pointer hover:underline"
      >
        Get Started <ArrowRightIcon className="size-4" />
      </Link>
    </div>
  )
}

export default GoToSignup
