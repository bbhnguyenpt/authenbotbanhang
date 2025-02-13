import { Button } from '@/components/ui/button'
import { CommentProfilePicture } from '@/public/dumb-data'
import { Logo } from '@/public/logo'
import GeneralSettingIcons from '@/Svgs/GeneralSettingIcons'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className="flex items-center flex-shrink-0 justify-between rounded-lg bg-white py-3 px-6">
      <div className="flex items-center gap-3">
        <Image
          alt="logo"
          src={Logo}
          className="w-9 h-11 object-contain"
        />
        <span className="text-2xl font-semibold hidden lg:block">Bot Bán Hàng</span>
      </div>
      <div className="flex items-center gap-10">
        <Button
          className="bg-blue-600 h-9 hover:bg-blue-500 gap-2"
          size={'sm'}
        >
          <span>{GeneralSettingIcons.top_up_money}</span>
          <span className="text-sm font-semibold">{'Nạp tiền'}</span>
        </Button>
        <Image
          alt="profile picture"
          src={CommentProfilePicture}
          className="size-9 rounded-full object-contain"
        />
      </div>
    </div>
  )
}

export default Header
