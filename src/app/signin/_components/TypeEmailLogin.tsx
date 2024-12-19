import Divider from "@/components/authentication-modal/Divider"
import ThirdPartyButton from "@/components/authentication-modal/ThirdPartyButton"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Logo } from "@/public/logo"
import Image from "next/image"
import { FC } from "react"
import Actions from "./Actions"
import GoToSignup from "./GoToSignup"

interface TypeEmailLoginProps {
  setIsTypingPassword: () => void
}

const TypeEmailLogin: FC<TypeEmailLoginProps> = ({ setIsTypingPassword }) => {
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
        <p className="font-bold text-2xl">Log in</p>
        <p className="text-sm">Continue to Bot Bán Hàng</p>
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
          Continue with email
        </Button>
      </div>
      <Divider />
      <div className="flex flex-col gap-[12px]">
        <ThirdPartyButton target="Facebook" />
      </div>
      <GoToSignup />
      <Actions />
    </div>
  )
}

export default TypeEmailLogin