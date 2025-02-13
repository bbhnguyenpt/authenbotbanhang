/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Switch } from '@/components/ui/switch'
import useModal from '@/hooks/useModal'
import { CommentProfilePicture } from '@/public/dumb-data'
import GeneralSettingIcons from '@/Svgs/GeneralSettingIcons'
import { UserGroupIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'


function GroupItem({ isPage = false, isMoved = false, name }: { isPage?: boolean; isMoved?: boolean; name: string }) {
  const { openModal } = useModal()

  return (
    <div className="rounded-xl bg-white p-3 flex items-center gap-2">
      <Image
        alt="profile"
        src={CommentProfilePicture}
        className="size-8 rounded-full"
      />
      <div className="flex-auto flex flex-col gap-0">
        <span className="text-sm font-medium">
          {name}
        </span>
        <span className="text-xs text-slate-500 ">
          {isPage ? (
            <div className="flex items-center gap-5">
              <span className=" flex items-center gap-1">
                {GeneralSettingIcons.logo_facebook}123123123123
              </span>
              {isMoved && <div className="flex items-center gap-1"><UserGroupIcon className="size-3.5" /><span>Nhóm 2</span></div>}
            </div>
          ) : (
            '123123123123 - Thành viên'
          )}
        </span>
      </div>
      <Switch size={"large"} onCheckedChange={() => { isMoved && openModal('move-page',name) }} />
    </div>
  )
}

export default GroupItem
