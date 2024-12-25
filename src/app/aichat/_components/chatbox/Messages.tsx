import { cn } from '@/lib/utils'
import { CommentProfilePicture } from '@/public/dumb-data'
import Image from 'next/image'

type MESSAGE_ROLE = 'user' | 'bot' | 'system'
interface MESSAGE {
  role: MESSAGE_ROLE
  content: string
  send_time?: string
}

const MESSAGES_DUMB_DATA: MESSAGE[] = [
  {
    role: 'user',
    content: 'What should I wear?',
  },
  {
    role: 'bot',
    send_time: '8:12',
    content: 'What is your gender? And how are you feeling right now? 😊',
  },
  {
    role: 'user',
    content: 'man and happy',
  },
  {
    role: 'bot',
    content: 'What should I wear?',
  },
  {
    role: 'system',
    send_time: '12:54',
    content: 'Hệ thống: Dương Quốc Tuấn đã gắn nhãn “Lead”',
  },
  {
    role: 'user',
    content: 'What should I wear?',
  },
]

function Messages() {
  return (
    <div className="size-full overflow-scroll no-scrollbar flex flex-col gap-1 py-3 px-4">
      {MESSAGES_DUMB_DATA.map((message, index) => (
        <div
          key={index}
          className="flex flex-col"
        >
          {message.send_time && (
            <span className="text-center text-xs font-medium text-slate-500">
              {message.send_time}
            </span>
          )}
          <div
            className={cn(
              'flex py-2 gap-1 ',
              message.role === 'user' && 'flex-row-reverse items-end'
            )}
          >
            {message.role != 'system' && (
              <Image
                alt="profile picture"
                src={CommentProfilePicture}
                className="rounded-full size-6 object-contain"
              />
            )}
            <span
              className={cn(
                message.role != 'system'
                  ? 'rounded-lg p-2 flex flex-col gap-2.5 bg-white whitespace-pre-line'
                  : 'text-slate-500 text-xs w-full text-center'
              )}
            >
              {message.content}
              {index === 3 && (
                <p className="bg-slate-200 py-1 px-2 rounded text-center text-sm leading-5">
                  {`{"gender":`}
                  <span className="text-green-500">{`"man"`}</span>
                  {`,"mood":`}
                  <span className="text-green-500">{`"happy"`}</span>
                  {'}'}
                </p>
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Messages
