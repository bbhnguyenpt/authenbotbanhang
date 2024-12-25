'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

import Tooltip from '@/components/Tooltip'

import Icons from '@/Svgs/Icons'

const PLUGINS_DUMB_DATA = [
  {
    icon: Icons.pluginStar,
    label: '/dich',
    detail: 'Tính năng AI: Tự động dịch văn bản chat sang Tiếng Anh',
  },
  {
    icon: Icons.pluginStar,
    label: '/hoanthanh',
    detail: 'Tính năng AI: Tự động hoàn thành câu.',
  },
  {
    icon: Icons.pluginBar,
    label: '/banhang',
    detail: 'Tiếc quá giải pháp bên em lại phù hợp với các bên kinh với các...',
  },
  {
    icon: Icons.pluginBar,
    label: '/congty',
    detail:
      'Trụ sở chính Hà nội: - Địa chỉ: Tòa nhà Tây, 19 P. Tố Hữu, Hà - Quận, Nam Từ Liêm, Hà Nội',
  },
  {
    icon: Icons.pluginBar,
    label: '/muahang',
    detail:
      'Trụ sở chính Hà nội: - Địa chỉ: Tòa nhà Tây, 19 P. Tố Hữu, Hà - Quận, Nam Từ Liêm, Hà Nội',
  },
  {
    icon: Icons.pluginBar,
    label: '/feedback',
    detail:
      'Trụ sở chính Hà nội: - Địa chỉ: Tòa nhà Tây, 19 P. Tố Hữu, Hà - Quận, Nam Từ Liêm, Hà Nội',
  },
]

function PluginOptions() {
  const [selectted_plugin, set_selectted_plugin] = useState<number>(0)

  function handleSelectPlugin(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      set_selectted_plugin(selectted_plugin => {
        return selectted_plugin === PLUGINS_DUMB_DATA.length - 1
          ? 0
          : selectted_plugin + 1
      })
    }
    if (event.key === 'ArrowUp') {
      set_selectted_plugin(selectted_plugin => {
        return selectted_plugin === 0
          ? PLUGINS_DUMB_DATA.length - 1
          : selectted_plugin - 1
      })
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleSelectPlugin)

    return () => {
      window.removeEventListener('keydown', handleSelectPlugin)
    }
  }, [])

  return (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-4 bg-white w-[528px] py-1 px-3 rounded-xl shadow-lg">
      <div className="flex items-center justify-between py-1.5 border-b border-slate-200">
        <span className="text-sm font-semibold leading-5 text-black">
          Enter để chọn
        </span>
        <div className="flex items-center gap-3">
          <span>Dùng ↑ hoặc ↓ để di chuyển</span>
          <Tooltip tooltipContent="Cài đặt">
            <span>{Icons.settings}</span>
          </Tooltip>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-2">
        {PLUGINS_DUMB_DATA.map((plugin, index) => (
          <div
            key={index}
            className={cn(
              'flex gap-3 py-1 px-2 rounded-lg ',
              index === selectted_plugin && 'bg-slate-100'
            )}
          >
            <span className="border border-s-slate-200 rounded-lg size-11 flex items-center justify-center flex-shrink-0">
              {plugin.icon}
            </span>
            <div className="flex flex-col">
              <span className="text-black text-sm font-semibold leading-5">
                {plugin.label}
              </span>
              <span className="line-clamp-1 text-sm font-medium leading-5">
                {plugin.detail}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PluginOptions
