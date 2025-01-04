import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

import Actions from '@/components/authentication-modal/Actions'
import Divider from '@/components/authentication-modal/Divider'
import ThirdPartyButton from '@/components/authentication-modal/ThirdPartyButton'

import { Logo } from '@/public/logo'

const page = () => {
  return (
    <section className="size-full center-child p-[17px]">
      <div className="modal">
        <div className="flex items-center gap-2">
          <Image
            alt="logo bot ban hang"
            src={Logo}
            className="h-7 w-[23px] object-cover"
          />
          <h1 className="text-base font-semibold">Bot Bán Hàng</h1>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold text-2xl">Log in</p>
          <p className="text-sm">Continue to Bot Bán Hàng</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-sm">Email</p>
            <Input placeholder="Enter your email" />
          </div>
          <Button className="text-base font-medium leading-6 w-full">
            Continue with email
          </Button>
        </div>
        <Divider />
        <div className="flex flex-col gap-3">
          <ThirdPartyButton target="Apple" />
          <ThirdPartyButton target="Google" />
          <ThirdPartyButton target="Facebook" />
        </div>
        <div className="flex text-sm gap-3 items-center">
          <span>New to Bot Bán Hàng?</span>
          <span className="flex items-center gap-1 text-blue-700">
            Get Started <ArrowRightIcon className="size-4" />
          </span>
        </div>
        <Actions />
      </div>
    </section>
  )
}

export default page
