import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex items-center justify-center p-4 gap-4 h-full">
      <Button>
        <Link href={"/signinfull"}>Sign In Full</Link>
      </Button>
      <Button>
        <Link href={"/signin"}>Sign In</Link>
      </Button>
    </div>
  )
}
