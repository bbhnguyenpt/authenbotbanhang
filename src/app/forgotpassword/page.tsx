import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import GoToLogin from '@/app/forgotpassword/_components/GoToLogin'
import Actions from '@/components/authentication-modal/Actions'
import { Logo } from '@/public/logo'

const page = () => {
  return (
    <section className="size-full center-child p-[17px]">
      <div className="modal ">
        <div className="flex items-center gap-2">
          <Image
            alt="logo bot ban hang"
            src={Logo}
            className="h-7 w-[23px] object-cover"
          />
          <h1 className="text-base font-semibold">Bot Bán Hàng</h1>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold text-2xl">Forgot your password?</p>
          <p className="text-sm">
            We’ll email instructions to reset your password.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-sm">Email</p>
            <Input placeholder="Enter your email" />
          </div>
          <Button className="text-base font-medium leading-6 w-full">
            <Link
              href={'/signin?reset=true'}
              className="size-full"
            >
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
