import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Logo } from "@/public/logo"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { FC } from "react"
import Actions from "./Actions"
import GoToSignup from "./GoToSignup"
import Link from "next/link"

interface TypePasswordLoginProps {
  setIsTypingPassword: () => void
}

const TypePasswordLogin: FC<TypePasswordLoginProps> = ({
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
          Log in
        </p>
        <p className="text-sm">Continue to Bot Bán Hàng</p>
      </div>
      <div className="space-y-[12px]">
        <div className="space-y-[4px]">
          <p className="font-medium text-sm">Email</p>
          <Input placeholder="Enter your email" />
        </div>
        <div className="space-y-[4px]">
          <p className="font-medium text-sm">Password</p>
          <Input placeholder="Enter your password" type="password" />
        </div>
        <div className="space-y-[4px]">
          <Link
            href={"/forgotpassword"}
            className="font-medium text-sm text-blue-700"
          >
            Forgot password?
          </Link>
        </div>
        <Button className="text-base font-semibold w-full">Log in</Button>
      </div>
      <GoToSignup />
      <Actions />
    </div>
  )
}

export default TypePasswordLogin
