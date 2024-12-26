import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'

import Icons from '@/Svgs/Icons'

export interface UserConversationProps {
  name: string
  last_message: {
    is_my_message: boolean
    message: string
    last_message_time: string
  }
  unread_messages?: number
  profile_picture: StaticImageData
  is_selectted?: boolean
  select_handler?: () => void
  blue_dot?: boolean
  red_dot?: boolean
  green_dot?: boolean
  addition?: boolean
}

function UserConversation({
  name,
  profile_picture,
  last_message,
  unread_messages,
  is_selectted,
  select_handler,
  blue_dot = false,
  green_dot = false,
  red_dot = false,
  addition = false,
}: UserConversationProps) {
  return (
    <div
      className={cn(
        'group flex items-center pl-2 gap-1 rounded-xl cursor-pointer transition-all hover:bg-slate-200',
        is_selectted && 'bg-slate-200'
      )}
      onClick={select_handler}
    >
      <Image
        src={profile_picture}
        alt="ava"
        className="size-10"
      />
      <div
        className={cn(
          'flex flex-col gap-0.5 border-b border-slate-200 p-2 transition-all group-hover:border-transparent',
          is_selectted && 'border-transparent'
        )}
      >
        <p className="flex items-center">
          <span
            className={cn(
              'flex-auto text-sm',
              unread_messages && 'font-semibold'
            )}
          >
            {name}
          </span>
          <span
            className={cn(
              'text-sm text-slate-500',
              unread_messages && 'font-medium text-black'
            )}
          >
            {last_message.last_message_time}
          </span>
        </p>
        <p className="flex items-center gap-[17px]">
          <span
            className={cn(
              'flex-auto text-sm line-clamp-1 font-medium text-slate-500',
              unread_messages && 'text-black'
            )}
          >
            {(last_message.is_my_message ? 'Bạn: ' : '') + last_message.message}
          </span>
          {unread_messages !== 0 && (
            <span className="text-xxs bg-red-600 font-medium rounded-full size-5 flex items-center justify-center flex-shrink-0 text-white">
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
            {addition && (
              <span className="w-6 h-4 rounded border border-slate-400 text-slate-600 text-[9px] leading-5 flex items-center justify-center">
                +2
              </span>
            )}
          </span>
          <span>{Icons.phone}</span>
        </p>
      </div>
    </div>
  )
}

export default UserConversation
