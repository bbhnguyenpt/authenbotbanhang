import { ChevronDown } from 'lucide-react'
import React, { ReactElement } from 'react'

export interface SettingItemProps {
  icon: ReactElement
  label: string
  show_arrow_down?: boolean
}

function SettingItem({
  icon,
  label,
  show_arrow_down = false,
}: SettingItemProps) {
  return (
    <div className="flex items-center py-1.5 px-2 gap-3">
      <span className="size-8 rounded-3xl flex items-center justify-center bg-slate-100">
        {icon}
      </span>
      <div className="flex items-center flex-auto justify-between">
        <span className="text-sm font-medium leading-5">{label}</span>
        {show_arrow_down && <ChevronDown size={16} />}
      </div>
    </div>
  )
}

export default SettingItem
