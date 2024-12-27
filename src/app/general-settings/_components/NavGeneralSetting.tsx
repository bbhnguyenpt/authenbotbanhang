'use client'

import { cn } from '@/lib/utils'
import GeneralSettingIcons from '@/Svgs/GeneralSettingIcons'
import React, { useState } from 'react'

const NAV_GENERAL_SETTING_DUMB_DATA = [
  {
    icon: GeneralSettingIcons.cog_solid,
    label: 'Cài đặt',
  },
  {
    icon: GeneralSettingIcons.credit_card_solid,
    label: 'Thanh toán',
  },
  {
    icon: GeneralSettingIcons.sparkles_solid,
    label: 'Ứng dụng',
  },
  {
    icon: GeneralSettingIcons.code_bracket,
    label: 'API',
  },
]

function NavGeneralSetting() {
  const [selected_item, set_selected_item] = useState(0)
  return (
    <nav className="w-[230px] rounded-md p-2 flex flex-col gap-1 bg-white">
      {NAV_GENERAL_SETTING_DUMB_DATA.map((nav_item, index) => (
        <div
          key={index}
          className={cn(
            'rounded py-1 px-3 flex items-center gap-2.5 cursor-pointer transition-all hover:bg-slate-50',
            index === selected_item && 'bg-slate-100'
          )}
          onClick={() => set_selected_item(index)}
        >
          <span className="size-8 center-child">{nav_item.icon}</span>
          <span className="text-sm font-medium">{nav_item.label}</span>
        </div>
      ))}
    </nav>
  )
}

export default NavGeneralSetting
