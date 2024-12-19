import Image from "next/image"
import { Logo } from "@/public/logo"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import GoToLogin from "./_components/GoToLogin"
import Actions from "@/components/authentication-modal/Actions"
import Link from "next/link"

const page = () => {
  return (
    <section className="size-full center-child px-[17px]">
      <div className="modal min-h-40">
        <div className="flex items-center gap-[8px]">
          <Image
            alt="logo bot ban hang"
            src={Logo}
            className="h-[28px] w-[23px] object-cover"
          />
          <h1 className="text-base font-semibold">Bot Bán Hàng</h1>
        </div>
        <div className="space-y-[4px]">
          <p className="font-bold text-2xl">Log in</p>
          <p className="text-sm">Continue to Bot Bán Hàng</p>
        </div>
        <div className="space-y-[12px]">
          <div className="space-y-[4px]">
            <p className="font-medium text-sm">Email</p>
            <Input placeholder="Enter your email" />
          </div>
          <Button className="text-base font-semibold w-full">
            <Link href={"/signin?reset=true"} className="size-full">
              Reset password
            </Link>
          </Button>
        </div>
        <GoToLogin />
        <Actions />
      </div>
    </section>
  )
}

export default page
