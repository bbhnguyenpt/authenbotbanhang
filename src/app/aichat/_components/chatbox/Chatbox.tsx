import { cn } from '@/lib/utils'

import MessagesBox from '@/app/aichat/_components/chatbox/MessagesBox'
import InputSection from '@/app/aichat/_components/chatbox/InputSection'

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
    <section className="flex-auto flex flex-col">
      <MessagesBox type={type} />
      <div className="flex flex-col gap-2 py-2 w-full">
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
        <InputSection type={type} />
      </div>
    </section>
  )
}

export default Chatbox
