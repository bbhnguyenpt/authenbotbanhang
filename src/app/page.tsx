import Link from 'next/link'

import { Button } from '@/components/ui/button'
export default function Home() {
  return (
    <div className="flex flex-wrap items-center justify-center p-4 gap-4 h-full">
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
      <Button>
        <Link
          href={'/upgrade-package'}
          className="size-full"
        >
          Upgrade Package
        </Link>
      </Button>
      <Button>
        <Link
          href={'/general-settings'}
          className="size-full"
        >
          General Settings
        </Link>
      </Button>
      <Button>
        <Link
          href={'/general-settings-group'}
          className="size-full"
        >
          Group
        </Link>
      </Button>
      <Button>
        <Link
          href={'/skeleton'}
          className="size-full"
        >
          Loading
        </Link>
      </Button>
    </div>
  )
}
