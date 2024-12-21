import { cn } from '@/lib/utils'

import MessagesBox from '@/app/aichat/_components/chatbox/MessagesBox'
import { Input } from '@/components/ui/input'

import Icons from '@/Svgs/Icons'

const SUGGEST_DUMB_DATA = [
  'Hà Nội',
  'Chatbot',
  'Đã mua hàng',
  'Trả hàng',
  'Không tiềm năng',
  'Spam',
  'Close',
]

function Chatbox({ type }: { type: 'post' | 'aisugguest' }) {
  return (
    <section className="w-full flex flex-col">
      <MessagesBox type={type} />
      <div className="flex flex-col gap-2 py-2">
        <div className="flex items-center gap-1">
          {SUGGEST_DUMB_DATA.map((suggest, index) => (
            <span
              key={index}
              className={cn(
                'h-6 py-1 px-2 rounded-[6px] bg-white text-xs cursor-pointer content-center text-center border border-slate-200 leading-4',
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
          <span className="h-6 w-[26px] text-center bg-white border border-slate-500 p-1 rounded font-semibold text-xs leading-4 text-slate-700">
            +2
          </span>
        </div>
        <div className="flex flex-col gap-1 px-4 py-2 rounded-xl bg-white">
          <div className="flex">
            <p className="size-6 p-1 rounded-full border border-slate-200 bg-white flex items-center justify-center">
              <span className="text-base size-4  text-blue-700">
                {Icons.loading}
              </span>
            </p>
          </div>
          <div className="flex items-center h-8 gap-2">
            <span className="cursor-pointer">{Icons.stars}</span>
            <span className="cursor-pointer">{Icons.attach}</span>
            <Input
              placeholder="Bình luận dưới tên Bot Bán Hàng"
              className="border-none shadow-none p-0 "
            />
            <span className="cursor-pointer">{Icons.emoji}</span>
            <span className="cursor-pointer">{Icons.square_slash}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chatbox
