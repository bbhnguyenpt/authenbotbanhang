'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'

import Icons from '@/Svgs/Icons'

function HeaderConversations() {
  const [tracker_className] = useState('w-[87px] left-[80px]')

  const TAB_BADGE_CLASS =
    'text-[10px] rounded-[99px] py-[2px] px-1 flex items-center justify-center border-white'
  // const [tracker_className, set_tracker_className] = useState("w-20 left-0")

  // function trackTab(event: MouseEvent<HTMLParagraphElement>) {
  //   const TAB_WIDTH = event.currentTarget.clientWidth
  //   const TAB_OFFSET_LEFT = event.currentTarget.offsetLeft

  //   set_tracker_className(`w-[${TAB_WIDTH}px] left-[${TAB_OFFSET_LEFT}px]`)
  //   console.log(`w-[${TAB_WIDTH}px] left-[${TAB_OFFSET_LEFT}px]`)
  // }
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3 relative">
        <p
          className="flex items-center gap-1 cursor-pointer p-[6px]"
          // onClick={trackTab}
        >
          <span className="text-sm">{'Chat'}</span>
          <span className={cn(TAB_BADGE_CLASS, 'bg-slate-200 ')}>
            <span className="size-[14px] text-[10px] text-center content-center">
              32
            </span>
          </span>
        </p>
        <p
          className="flex items-center gap-1 cursor-pointer p-[6px]"
          // onClick={trackTab}
        >
          <span className="text-sm font-bold">{'Bài viết'}</span>
          <span className={cn(TAB_BADGE_CLASS, 'bg-red-600')}>
            <span className="size-[14px] text-[10px] text-center content-center text-white">
              21
            </span>
          </span>
        </p>
        <span
          className={cn(
            'absolute bottom-0 h-[2px] bg-black transition-all',
            tracker_className
          )}
        ></span>
      </div>
      <span className="size-8 rounded-full bg-slate-100 flex items-center justify-center">
        {Icons.search}
      </span>
    </div>
  )
}

export default HeaderConversations
