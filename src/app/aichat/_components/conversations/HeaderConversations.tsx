'use client'

import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'

import Icons from '@/Svgs/Icons'

const TABS = [
  {
    label: 'Chat',
    count_unread_messages: 32,
  },
  {
    label: 'Bài viết',
    count_unread_messages: 21,
  },
]

function HeaderConversations() {
  const [tracker_className] = useState('')
  const [current_tab, set_current_tab] = useState(0)
  const marker = useRef<HTMLParagraphElement>(null)

  function changeMarker(start: number, width: number) {
    if (marker.current) {
      marker.current.style.left = `${start}px`
      marker.current.style.width = `${width}px`
    }
  }

  useEffect(() => {
    changeMarker(0, 70)
  }, [])

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3 relative">
        {TABS.map((tab, index) => (
          <p
            key={index}
            // ref={}
            className="flex items-center gap-1 cursor-pointer p-1.5"
            onClick={({ currentTarget }) => {
              set_current_tab(index)
              changeMarker(currentTarget.offsetLeft, currentTarget.offsetWidth)
            }}
          >
            <span
              className={cn(
                'text-sm leading-5',
                current_tab === index && 'font-semibold'
              )}
            >
              {tab.label}
            </span>
            <span
              className={cn(
                'text-[10px] rounded-[99px] py-[2px] px-1 flex items-center justify-center border-white',
                current_tab === index ? 'bg-red-600' : 'bg-slate-200 '
              )}
            >
              <span
                className={cn(
                  'size-3.5 text-[10px] text-center content-center',
                  current_tab === index ? 'text-white' : ''
                )}
              >
                {tab.count_unread_messages}
              </span>
            </span>
          </p>
        ))}
        <span
          ref={marker}
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
