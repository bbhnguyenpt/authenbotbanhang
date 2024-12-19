import SelectLanguage from "@/components/authentication-modal/SelectLanguage"
import React from "react"

const Actions = () => {
  return (
    <div>
      <span className="text-xs text-slate-500">
        By proceeding, you agree to the <u>Terms and Conditions</u> and{" "}
        <u>Privacy Policy</u>
      </span>
      <div className="flex justify-between pt-[12px]">
        <p className="flex items-center gap-[12px]">
          <span className="text-xs text-slate-500 hover:cursor-pointer hover:underline">
            Privacy
          </span>
          <span className="text-xs text-slate-500 cursor-pointer hover:underline">
            Terms
          </span>
        </p>
        <SelectLanguage />
      </div>
    </div>
  )
}

export default Actions