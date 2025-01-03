import { Switch } from '@/components/ui/switch'
import { CommentProfilePicture } from '@/public/dumb-data'
import GeneralSettingIcons from '@/Svgs/GeneralSettingIcons'
import Image from 'next/image'
import React from 'react'

function GroupItem({ isPage = false }: { isPage?: boolean }) {
  return (
    <div className="rounded-xl bg-white p-3 flex items-center gap-2">
      <Image
        alt="profile"
        src={CommentProfilePicture}
        className="size-8 rounded-full"
      />
      <div className="flex-auto flex flex-col gap-0">
        <span className="text-sm font-medium">
          {isPage ? 'Page 1' : 'Nguyễn Văn A'}
        </span>
        <span className="text-xs text-slate-500">
          {isPage ? (
            <span className=" flex items-center gap-1">
              {GeneralSettingIcons.logo_facebook}123123123123
            </span>
          ) : (
            '123123123123 - Thành viên'
          )}
        </span>
      </div>
      <Switch />
    </div>
  )
}

export default GroupItem
