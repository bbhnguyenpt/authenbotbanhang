'use client'

import { cn } from '@/lib/utils'
import Icons from '@/Svgs/Icons'
import { useState } from 'react'

function HeaderConversations() {
  const [tracker_className] = useState('w-[81px] left-[77px]')
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
          <span className="text-[10px] rounded-full py-[2px] px-1 bg-slate-200">
            32
          </span>
        </p>
        <p
          className="flex items-center gap-1 cursor-pointer p-[6px]"
          // onClick={trackTab}
        >
          <span className="text-sm font-bold">{'Bài viết'}</span>
          <span className="text-[10px] rounded-full py-[2px] px-1 bg-red-600 text-white">
            21
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
