import Divider from "@/components/authentication-modal/Divider"
import ThirdPartyButton from "@/components/authentication-modal/ThirdPartyButton"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Logo } from "@/public/logo"
import Image from "next/image"
import { FC } from "react"
import Actions from "./Actions"
import GoToLogin from "./GoToLogin"

interface TypeEmailSignupProps {
  setIsTypingPassword: () => void
}

const TypeEmailSignup: FC<TypeEmailSignupProps> = ({ setIsTypingPassword }) => {
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
        <p className="font-bold text-2xl">Create a Retion account</p>
        <p className="text-sm">One last step before starting your free trial</p>
      </div>
      <div className="space-y-[12px]">
        <div className="space-y-[4px]">
          <p className="font-medium text-sm">Email</p>
          <Input placeholder="Enter your email" />
        </div>
        <Button
          className="text-base font-semibold w-full"
          onClick={setIsTypingPassword}
        >
          Sign up with email
        </Button>
      </div>
      <Divider />
      <div className="flex flex-col gap-[12px]">
        <ThirdPartyButton target="Apple" />
        <ThirdPartyButton target="Google" />
        <ThirdPartyButton target="Facebook" />
      </div>
      <GoToLogin />
      <Actions />
    </div>
  )
}

export default TypeEmailSignup