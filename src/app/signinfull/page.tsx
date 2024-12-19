import Divider from "@/components/authentication-modal/Divider"
import ThirdPartyButton from "@/components/authentication-modal/ThirdPartyButton"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Logo } from "@/public/logo"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import React from "react"
import Actions from "../../components/authentication-modal/Actions"

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
            Continue with email
          </Button>
        </div>
        <Divider />
        <div className="flex flex-col gap-[12px]">
          <ThirdPartyButton target="Apple" />
          <ThirdPartyButton target="Google" />
          <ThirdPartyButton target="Facebook" />
        </div>
        <div className="flex text-sm gap-[12px] items-center">
          <span>New to Bot Bán Hàng?</span>
          <span className="flex items-center gap-[4px] text-blue-700">
            Get Started <ArrowRight size={16} />
          </span>
        </div>
        <Actions />
      </div>
    </section>
  )
}

export default page
