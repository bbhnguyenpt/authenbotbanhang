import React from "react"

const Divider = () => {
  return (
    <div className="flex items-center gap-[12px]">
      <span className="border-slate-200 border w-full"></span>
      <p className="font-medium text-sm flex-shrink-0 text-slate-500">or</p>
      <span className="border-slate-200 border w-full"></span>
    </div>
  )
}

export default Divider
