import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex items-center justify-center p-4 gap-4 h-full">
      <Button>
        <Link
          href={'/signinfull'}
          className="size-full"
        >
          Sign In Full
        </Link>
      </Button>
      <Button>
        <Link
          href={'/signin'}
          className="size-full"
        >
          Sign In
        </Link>
      </Button>
      <Button>
        <Link
          href={'/signup'}
          className="size-full"
        >
          Sign Up
        </Link>
      </Button>
      <Button>
        <Link
          href={'/aichat'}
          className="size-full"
        >
          Ai chat
        </Link>
      </Button>
      <Button>
        <Link
          href={'/qrzalo'}
          className="size-full"
        >
          QR Zalo
        </Link>
      </Button>
    </div>
  )
}
