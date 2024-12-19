import { ArrowRight } from "lucide-react"
import Link from "next/link"
import React from "react"

const GoToSignup = () => {
  return (
    <div className="flex text-sm gap-[12px] items-center">
      <span>New to Bot Bán Hàng?</span>
      <Link
        href={"/signup"}
        className="flex items-center gap-[4px] text-blue-700 cursor-pointer hover:underline"
      >
        Get Started <ArrowRight size={16} />
      </Link>
    </div>
  )
}

export default GoToSignup
