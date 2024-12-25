import Image from 'next/image'

import Post from '@/app/aichat/_components/chatbox/Post'
import Icons from '@/Svgs/Icons'

import { Logo } from '@/public/logo'
import Messages from '@/app/aichat/_components/chatbox/Messages'
import { ChevronDown } from 'lucide-react'

const DUMB_DATA = {
  chat_box_name:
    'PHẦN MỀM QUẢN LÝ TIN NHẮN TOÀN DIỆN DÀNH CHO NGÀNH SPA, THẨM MỸ VIỆN',
  chat_box_id: '123123123123',
  chat_box_profile_picture: Logo,
  post: {
    publisher: 'Bùi Thị Thúy',
    content:
      'PHẦN MỀM QUẢN LÝ TIN NHẮN TOÀN DIỆN DÀNH CHO NGÀNH SPA, THẨM MỸ VIỆN\n Bạn đang có nhiều fanpage và gặp khó khăn khi quản lý tin nhắn mỗi ngày? Mất khách hàng vì phản hồi chậm trễ? \nGiải pháp quản lý tin nhắn toàn diện giúp: ',
    reaction_count: 14882,
    share_count: 14482,
    comment_count: 1282,
  },
}

const ICON_DUMB_DATA = [
  Icons.header_messages_box_phone,
  Icons.header_messages_box_location,
  Icons.header_messages_box_cake,
  Icons.header_messages_box_message,
]

function MessagesBox({ type }: { type: 'post' | 'aisugguest' }) {
  return (
    <div className="flex-auto flex flex-col bg-[#00158106] overflow-hidden rounded-lg ">
      <div className="py-2 px-3 bg-white flex items-center gap-3.5">
        <div className="flex items-center gap-2.5 flex-auto">
          <Image
            alt="profile picture"
            src={DUMB_DATA.chat_box_profile_picture}
            className="size-10 object-contain"
          />
          <p className="flex flex-col">
            <span className="line-clamp-1 text-sm font-bold">
              {type === 'post' ? DUMB_DATA.chat_box_name : 'Florising'}
            </span>
            <span className="text-xs text-slate-500 flex items-center">
              {type === 'post'
                ? 'ID: ' + DUMB_DATA.chat_box_id
                : 'Chọn nhân viên'}{' '}
              {type === 'aisugguest' && (
                <div className="flex items-center gap-2">
                  <ChevronDown
                    className="text-slate-500"
                    size={20}
                  />
                  <div className="flex items-center gap-2">
                    {ICON_DUMB_DATA.map((icon, index) => (
                      <span key={index}>{icon}</span>
                    ))}
                  </div>
                </div>
              )}
            </span>
          </p>
        </div>
        {type === 'aisugguest' && (
          <span className="cursor-pointer">{Icons.envelop_open}</span>
        )}
        <span className="cursor-pointer">{Icons.options}</span>
      </div>
      <div className="flex-auto flex justify-center items-start p-1 overflow-y-scroll no-scrollbar">
        {type === 'post' ? <Post post={DUMB_DATA.post} /> : <Messages />}
      </div>
    </div>
  )
}

export default MessagesBox
