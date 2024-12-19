import { ArrowRight } from "lucide-react"
import Link from "next/link"
import React from "react"

const GoToLogin = () => {
  return (
    <div className="flex text-sm gap-[12px] items-center">
      <span>Already have a Retion account?</span>
      <Link
        href={"/signin"}
        className="flex items-center gap-[4px] text-blue-700 cursor-pointer hover:underline"
      >
        Log in <ArrowRight size={16} />
      </Link>
    </div>
  )
}

export default GoToLogin