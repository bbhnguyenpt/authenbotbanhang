import React, { ReactElement } from 'react'

interface NavItemProps {
  icon: ReactElement
}

function NavItem({ icon }: NavItemProps) {
  return (
    <span className="size-11 rounded-lg flex items-center justify-center cursor-pointer hover:text-slate-900 hover:bg-slate-300 transition-all">
      <span className="size-6">{icon}</span>
    </span>
  )
}

export default NavItem
