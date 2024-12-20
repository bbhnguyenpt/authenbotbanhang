import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Logo } from '@/public/logo'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'
import ActionsSignup from './ActionsSignup'
import GoToLogin from './GoToLogin'

interface TypePasswordSignupProps {
  setIsTypingPassword: () => void
}

const TypePasswordSignup: FC<TypePasswordSignupProps> = ({
  setIsTypingPassword,
}) => {
  return (
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
        <p
          className="font-bold text-2xl flex items-center gap-2 cursor-pointer"
          onClick={setIsTypingPassword}
        >
          <ArrowLeft />
          Create a Retion account
        </p>
        <p className="text-sm">One last step before starting your free trial</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <p className="font-medium text-sm">Email</p>
          <Input placeholder="Enter your email" />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-sm">First name</p>
            <Input placeholder="Enter your first name" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium text-sm">Last name</p>
            <Input placeholder="Enter your last name" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-medium text-sm">Password</p>
          <Input
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-medium text-sm">Confirm new password</p>
          <Input
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <Button className="text-base font-semibold w-full">
          Create Retion account
        </Button>
      </div>
      <GoToLogin />
      <ActionsSignup />
    </div>
  )
}

export default TypePasswordSignup
