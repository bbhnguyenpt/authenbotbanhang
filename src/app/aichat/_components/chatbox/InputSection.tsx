'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

import MessageInput from '@/app/aichat/_components/chatbox/MessageInput'
import Icons from '@/Svgs/Icons'

/* Test Purpose */
const SUGGEST_DUMB_DATA = [
  'Em cảm ơn anh ạ, em rất mong anh ủng hộ ạ!',
  'Anh có muốn tìm hiểu thêm các sản phẩm khác không ạ?',
  // 'Anh có muốn tìm hiểu thêm các sản phẩm khác không ạ?',
  // 'Anh có muốn tìm hfa sdfas dfiểu thêm các sản phẩm khác không ạ?',
]

type STATE_TYPE = 'loading' | 'suggested' | 'translate'

const TEST_STATE: STATE_TYPE[] = ['loading', 'suggested', 'translate']

function InputSection({ type }: { type: 'post' | 'aisugguest' }) {
  const [state, set_state] = useState<STATE_TYPE>('translate')
  const [input_value, set_input_value] = useState<string>('')

  function renderAiSugguest() {
    switch (state) {
      case 'loading':
        return (
          <p className="size-6 p-1 rounded-full border border-slate-200 bg-white flex items-center justify-center">
            <span className="text-base size-4  text-blue-700">
              {Icons.loading}
            </span>
          </p>
        )
      case 'suggested':
        return (
          <div className="flex gap-4">
            {SUGGEST_DUMB_DATA.map((suggest, index) => (
              <p
                key={index}
                className="text-xs leading-4 py-1 px-2 rounded-[50px] border border-slate-200 cursor-pointer"
              >
                <span className="text-nowrap">{suggest}</span>
              </p>
            ))}
          </div>
        )
      case 'translate':
        return (
          <div className="flex gap-2 items-center text-slate-400">
            {Icons.translate}
            <p className="text-xs leading-4 py-1 px-2 rounded-[50px] border border-slate-200 cursor-pointer">
              <span className="text-nowrap text-black">
                {'How can I help you?'}
              </span>
            </p>
            <p className="text-xs leading-4 py-1 px-2 rounded-[50px] cursor-pointer">
              <span className="text-nowrap ">{'Ấn Tab để sử dụng'}</span>
            </p>
          </div>
        )
    }
  }

  if (type === 'post') {
    return (
      <div className="flex flex-col gap-1 px-4 py-2 rounded-xl bg-white">
        <div className="flex items-center h-8 gap-2">
          {/* <span className="cursor-pointer text-slate-400">{Icons.stars}</span> */}
          <span className="cursor-pointer">{Icons.attach}</span>
          <Input
            placeholder="Bình luận dưới tên Bot Bán Hàng"
            className="border-none shadow-none p-0"
          />
          <span className="cursor-pointer">{Icons.emoji}</span>
          <span className="cursor-pointer">{Icons.square_slash}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="group relative flex flex-col justify-end gap-1 px-4 py-2 h-12 rounded-xl bg-white transition-all hover:h-20">
      {/* Test Purpose --------------- */}
      <button
        className="absolute -top-3 right-5 border border-black px-1 opacity-0"
        onClick={() => {
          const test = Math.floor(Math.random() * 3)
          set_state(TEST_STATE[test])
        }}
      >
        test
      </button>
      {/* Test Purpose --------------- */}
      <div className="min-h-[26px] w-[94%] flex gap-4 items-center absolute top-2 transition-all overflow-x-scroll no-scrollbar">
        {renderAiSugguest()}
      </div>
      <div className="flex items-end min-h-8 gap-2 text-slate-400 z-20 bg-white">
        <span
          className={cn(
            'h-8 flex items-center cursor-pointer',
            state === 'translate' && 'text-blue-700'
          )}
        >
          {Icons.stars}
        </span>

        <span className="h-8 flex items-center cursor-pointer">
          {Icons.attach}
        </span>
        <MessageInput
          input_value={input_value}
          set_input_value={set_input_value}
        />
        <span className="h-8 flex items-center cursor-pointer">
          {Icons.emoji}
        </span>
        <span className="h-8 flex items-center cursor-pointer text-slate-900">
          {input_value === '' ? Icons.square_slash : Icons.sendIcon}
        </span>
      </div>
    </div>
  )
}

export default InputSection
