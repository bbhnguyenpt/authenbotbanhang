import React, { ReactElement } from 'react'

export interface NavItemSkeletonProps {
  icon: ReactElement
  label: string
}

function NavItemSkeleton({ icon, label }: NavItemSkeletonProps) {
  return (
    <div className="py-1 px-3 flex items-center gap-2.5 hover:bg-slate-100 cursor-pointer transition-all rounded">
      <span className="size-8 center-child rounded-full bg-gray-100">
        {icon}
      </span>
      <span className="text-sm font-medium leading-5 text-nowrap">{label}</span>
    </div>
  )
}

export default NavItemSkeleton
