import Actions from "@/components/form/Actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Logo } from "@/public/logo"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { FC } from "react"

interface TypePasswordModalProps {
  setIsTypingPassword: () => void
}

const TypePasswordModal: FC<TypePasswordModalProps> = ({
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
        <div className="space-y-[4px]">
          <p className="font-medium text-sm">Password</p>
          <Input placeholder="Enter your password" type="password" />
        </div>
        <div className="space-y-[4px]">
          <p className="font-medium text-sm text-blue-700">Forgot password?</p>
        </div>
        <Button className="text-base font-semibold w-full">Log in</Button>
      </div>
      <div className="flex text-sm gap-[12px] items-center">
        <span>New to Bot Bán Hàng?</span>
        <span className="flex items-center gap-[4px] text-blue-700">
          Get Started <ArrowRight size={16} />
        </span>
      </div>
      <Actions />
    </div>
  )
}

export default TypePasswordModal
