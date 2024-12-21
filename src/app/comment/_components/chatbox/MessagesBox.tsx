import Image from 'next/image'

import Post from '@/app/comment/_components/chatbox/Post'
import Icons from '@/Svgs/Icons'

import { Logo } from '@/public/logo'

const DUMB_DATA = {
  chat_box_name: 'PHẦN MỀM QUẢN LÝ TIN NHẮN TOÀN DIỆN DÀNH CHO CASI GÌ ĐẤY',
  chat_box_id: '123123123123',
  chat_box_profile_picture: Logo,
  post: {
    publisher: 'Bùi Thị Thủy',
    content:
      'PHẦN MỀM QUẢN LÝ TIN NHẮN TOÀN DIỆN DÀNH CHO NGÀNH SPA, THẨM MỸ VIỆN\n Bạn đang có nhiều fanpage và gặp khó khăn khi quản lý tin nhắn mỗi ngày? Mất khách hàng vì phản hồi chậm trễ? \nGiải pháp quản lý tin nhắn toàn diện giúp: ',
    reaction_count: 14882,
    share_count: 14482,
    comment_count: 1282,
  },
}

function MessagesBox() {
  return (
    <div className="flex-auto flex flex-col bg-[#00158106] overflow-hidden rounded-lg">
      <div className="py-2 px-3 bg-white flex items-center">
        <div className="flex items-center gap-[10px] flex-auto">
          <Image
            alt="profile picture"
            src={DUMB_DATA.chat_box_profile_picture}
            className="size-10 object-contain"
          />
          <p className="flex flex-col">
            <span className="line-clamp-1 text-sm uppercase font-bold">
              {DUMB_DATA.chat_box_name}
            </span>
            <span className="text-xs text-slate-500">
              {'ID: ' + DUMB_DATA.chat_box_id}
            </span>
          </p>
        </div>
        <span className="cursor-pointer">{Icons.options}</span>
      </div>
      <div className="flex-auto flex justify-center items-start p-1 overflow-y-scroll no-scrollbar">
        <Post post={DUMB_DATA.post} />
      </div>
      {/* <span className="whitespace-pre-line line">{DUMB_DATA.post.content}</span>
      <span>Xem them</span> */}
    </div>
  )
}

export default MessagesBox
