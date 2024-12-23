import { cn } from '@/lib/utils'
import { CommentProfilePicture } from '@/public/dumb-data'
import Image from 'next/image'

type MESSAGE_ROLE = 'user' | 'bot'

const MESSAGES_DUMB_DATA: { role: MESSAGE_ROLE; content: string }[] = [
  {
    role: 'user',
    content: 'What should I wear?',
  },
  {
    role: 'bot',
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
    role: 'user',
    content: 'What should I wear?',
  },
  {
    role: 'bot',
    content: 'What should I wear?',
  },
]

function Messages() {
  return (
    <div className="size-full overflow-scroll no-scrollbar flex flex-col gap-1 py-3 px-4">
      {MESSAGES_DUMB_DATA.map((message, index) => (
        <div
          key={index}
          className={cn(
            'flex py-2 gap-1 ',
            message.role === 'user' && 'flex-row-reverse items-end'
          )}
        >
          <Image
            alt="profile picture"
            src={CommentProfilePicture}
            className="rounded-full size-6 object-contain"
          />
          <span className="rounded-lg p-2 flex flex-col gap-[10px] bg-white whitespace-pre-line">
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
      ))}
    </div>
  )
}

export default Messages
