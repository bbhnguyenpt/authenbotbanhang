import React from 'react'
import MessagesBox from './MessagesBox'
import Icons from '@/Svgs/Icons'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const suggest_dumb_data = [
  'Hà Nội',
  'Chatbot',
  'Đã mua hàng',
  'Trả hàng',
  'Không tiềm năng',
  'Spam',
  'Close',
]

function Chatbox() {
  return (
    <section className="w-full flex flex-col">
      <MessagesBox />
      <div className="flex flex-col gap-2 py-2">
        <div className="flex items-center gap-1">
          {suggest_dumb_data.map((suggest, index) => (
            <span
              key={index}
              className={cn(
                'h-6 py-1 px-2 rounded-[6px] bg-white text-xs cursor-pointer content-center text-center ',
                index === 0
                  ? 'bg-orange-500 text-white'
                  : index === 1
                  ? 'bg-green-500 text-white'
                  : ''
              )}
            >
              {suggest}
            </span>
          ))}
        </div>
        <div className="flex items-center h-12 px-4 py-2 gap-2 rounded-3xl bg-white">
          <span className="cursor-pointer">{Icons.attach}</span>
          <Input
            placeholder="Bình luận dưới tên Bot Bán Hàng"
            className="border-none shadow-none p-0 "
          />
          <span className="cursor-pointer">{Icons.emoji}</span>
          <span className="cursor-pointer">{Icons.square_slash}</span>
        </div>
      </div>
    </section>
  )
}

export default Chatbox
