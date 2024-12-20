import { cn } from '@/lib/utils'
import Icons from '@/Svgs/Icons'
import Image, { StaticImageData } from 'next/image'

export interface UserConversationProps {
  name: string
  last_message: {
    is_my_message: boolean
    message: string
    last_message_time: string
  }
  unread_messages?: number
  profile_picture: StaticImageData
  blue_dot?: boolean
  red_dot?: boolean
  green_dot?: boolean
}

function UserConversation({
  name,
  profile_picture,
  last_message,
  unread_messages,
  blue_dot = false,
  green_dot = false,
  red_dot = false,
}: UserConversationProps) {
  return (
    <div className="group flex items-center pl-2 gap-1 rounded-xl cursor-pointer transition-all hover:bg-slate-200">
      <Image
        src={profile_picture}
        alt="ava"
        className="size-10"
      />
      <div className="flex flex-col gap-[2px] border-b border-slate-200 p-2 transition-all group-hover:border-transparent">
        <p className="flex items-center">
          <span
            className={cn('flex-auto text-sm', unread_messages && 'font-bold')}
          >
            {name}
          </span>
          <span className={cn('text-sm', unread_messages && 'font-bold')}>
            {last_message.last_message_time}
          </span>
        </p>
        <p className="flex items-center gap-[17px]">
          <span
            className={cn(
              'flex-auto text-sm line-clamp-1',
              unread_messages && 'font-bold'
            )}
          >
            {(last_message.is_my_message ? 'Bạn: ' : '') + last_message.message}
          </span>
          {unread_messages !== 0 && (
            <span className="text-[10px] bg-red-600 rounded-full size-5 flex items-center justify-center flex-shrink-0 text-white">
              {unread_messages}
            </span>
          )}
        </p>
        <p className="flex items-center">
          <span className="flex-auto flex items-center gap-1">
            <span>{Icons.left_arrow}</span>
            {red_dot && (
              <span className="size-3 rounded-full bg-red-500"></span>
            )}
            {blue_dot && (
              <span className="size-3 rounded-full bg-blue-600"></span>
            )}
            {green_dot && (
              <span className="size-3 rounded-full bg-green-500"></span>
            )}
          </span>
          <span>{Icons.phone}</span>
        </p>
      </div>
    </div>
  )
}

export default UserConversation
