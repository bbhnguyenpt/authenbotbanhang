import { TabsContent } from '@/components/ui/tabs'
import { LogoChatbot, LogoZalo, QrZalo } from '@/public/dumb-data'
import Icons from '@/Svgs/Icons'
import NavQrZaloIcons from '@/Svgs/NavQrZaloIcons'
import Image from 'next/image'
import React from 'react'

function PersonalZaloTab() {
  return (
    <TabsContent
      value="personalZalo"
      className="flex items-center w-full p-2"
    >
      <div className="center-child flex-1 px-6">
        <Image
          alt="qr zalo "
          src={QrZalo}
          className="size-[260px] aspect-square"
        />
      </div>
      <div className="flex flex-col flex-1 items-center gap-2 ">
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-5">
            <Image
              alt="logo chatbot"
              src={LogoChatbot}
              className="size-10 object-contain"
            />
            <span>{Icons.loading}</span>
            <Image
              alt="logo zalo"
              src={LogoZalo}
              className="size-10 object-contain"
            />
          </div>
          <span className="font-semibold text-base leading-6">
            Kết nối Bot Bán Hàng với Zalo cá nhân
          </span>
        </div>
        <div className="text-slate-500 text-xs">
          <ul className="list-decimal pb-2 pl-4 border-b border-slate-200">
            <li>
              <div className="flex items-center gap-1">
                <span>
                  Mở ứng dụng <b>Zalo</b>
                </span>
                <span>{NavQrZaloIcons.logo_zalo_in_text}</span> trên điện thoại.
              </div>
            </li>
            <li>
              <div className="flex items-center gap-1">
                <span>
                  Trên mục <b>Tìm kiếm</b>
                </span>
                <span>{NavQrZaloIcons.search_icon_in_text}</span> , ấn vào{' '}
                <b>biểu tượng QR</b>
                <span>{NavQrZaloIcons.qr_icon_in_text}</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-1">
                <span>
                  <b>Quét mã QR</b> để đăng nhập.
                </span>
              </div>
            </li>
          </ul>
          <div className="pt-2 flex gap-2.5">
            <span className="size-3">{NavQrZaloIcons.exclamation_circle}</span>
            <span>
              Sau khi đăng nhập Zalo trên Bot Bán Hàng, vui lòng không quét mã
              QR đăng nhập Zalo trên phiên bản Website (https://chat.zalo.me) để
              làm ảnh hưởng đồng bộ tin nhắn về Bot Bán Hàng.{' '}
            </span>
          </div>
        </div>
      </div>
    </TabsContent>
  )
}

export default PersonalZaloTab
