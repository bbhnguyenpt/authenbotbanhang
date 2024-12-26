'use client'

import { Input } from '@/components/ui/input'

import Icons from '@/Svgs/Icons'
import { ChangeEvent, useRef } from 'react'

/* Test Purpose */

function InputSection() {
  const input_length = useRef<HTMLSpanElement>(null)
  function onInputChange(event: ChangeEvent<HTMLInputElement>) {
    const length = event.currentTarget.value.length
    console.log(length)
    console.log((input_length.current!.innerHTML = `${length}/1000`))
  }

  return (
    <div className="h-20 flex items-end">
      <div className="group relative w-full h-12 flex flex-col justify-end py-1 px-4 bg-white rounded-3xl hover:h-20 hover:rounded-xl transition-all">
        <span
          className="absolute top-2 transition-all text-sm text-gray-400 pl-1"
          ref={input_length}
        >
          0/1000
        </span>
        <div className="w-full flex items-center gap-2 bg-white z-20">
          {Icons.attach}
          <Input
            placeholder="Bình luận dưới tên Bot Bán Hàng"
            className="border-none shadow-none p-0"
            onChange={onInputChange}
          />
        </div>
      </div>
    </div>
  )
}

export default InputSection
