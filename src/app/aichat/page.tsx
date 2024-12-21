import { Button } from '@/components/ui/button'
import Link from 'next/link'

function page() {
  return (
    <div className="flex size-full p-2 gap-3 bg-gradient-post">
      <Button>
        <Link
          href={'/aichat/comment'}
          className="size-full"
        >
          comment
        </Link>
      </Button>
      <Button>
        <Link
          href={'/aichat/aisugguest'}
          className="size-full"
        >
          aisugguest
        </Link>
      </Button>
    </div>
  )
}

export default page
