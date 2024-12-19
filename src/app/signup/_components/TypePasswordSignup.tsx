import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Logo } from "@/public/logo"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { FC } from "react"
import ActionsSignup from "./ActionsSignup"
import GoToLogin from "./GoToLogin"

interface TypePasswordSignupProps {
  setIsTypingPassword: () => void
}

const TypePasswordSignup: FC<TypePasswordSignupProps> = ({
  setIsTypingPassword,
}) => {
  return (
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
        <p
          className="font-bold text-2xl flex items-center gap-[8px] cursor-pointer"
          onClick={setIsTypingPassword}
        >
          <ArrowLeft />
          Create a Retion account
        </p>
        <p className="text-sm">One last step before starting your free trial</p>
      </div>
      <div className="space-y-[12px]">
        <div className="space-y-[4px]">
          <p className="font-medium text-sm">Email</p>
          <Input placeholder="Enter your email" />
        </div>
        <div className="flex justify-between">
          <div className="space-y-[4px]">
            <p className="font-medium text-sm">First name</p>
            <Input placeholder="Enter your first name" />
          </div>
          <div className="space-y-[4px]">
            <p className="font-medium text-sm">Last name</p>
            <Input placeholder="Enter your last name" />
          </div>
        </div>
        <div className="space-y-[4px]">
          <p className="font-medium text-sm">Password</p>
          <Input placeholder="Enter your password" type="password" />
        </div>
        <div className="space-y-[4px]">
          <p className="font-medium text-sm">Confirm new password</p>
          <Input placeholder="Enter your password" type="password" />
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
