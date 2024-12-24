import React, { ReactElement } from 'react'

export interface NavItemQrZaloProps {
  icon: ReactElement
  label: string
}

function NavItemQrZalo({ icon, label }: NavItemQrZaloProps) {
  return (
    <div className="py-1 px-3 flex items-center gap-[10px]">
      <span className="size-8 center-child rounded-full bg-gray-100">
        {icon}
      </span>
      <span className="text-sm font-medium leading-5 text-nowrap">{label}</span>
    </div>
  )
}

export default NavItemQrZalo
