'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import useModal from '@/hooks/useModal'
import { UserGroupIcon, PencilSquareIcon } from '@heroicons/react/24/solid'
import { MinusCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

import { CommentProfilePicture } from '@/public/dumb-data'
import GeneralSettingIcons from '@/Svgs/GeneralSettingIcons'

const SOCIAL_MEDIA_DUMB_DATA = [
  GeneralSettingIcons.logo_instagram,
  GeneralSettingIcons.logo_facebook,
  GeneralSettingIcons.logo_zalo,
  GeneralSettingIcons.logo_phone,
]

function Group() {
  const [show_group, set_show_group] = useState(false)
  const { openModal } = useModal()
  return (
    <div className="relative">
      <button
        className=" absolute top-2 right-40 opacity-1"
        onClick={() => set_show_group(!show_group)}
      >
        test
      </button>
      <UserGroupIcon className="size-5 flex-shrink-0" />
      <div className="flex-auto flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium">Nhóm</span>
            <span className="text-xs text-muted-foreground">
              Mặc định sau khi Đăng nhập, Thành viên sẽ xem được toàn bộ Trang
              của Tổ chức.
            </span>
            <span className="text-xs text-muted-foreground">
              Chức năng Nhóm sẽ chỉ định Thành viên chỉ xem được Trang trong
              Nhóm sau khi đăng nhập. Lưu ý: Quản trị viên vẫn xem được toàn bộ
              Trang.
            </span>
          </div>
          <Button
            className="bg-blue-600 text-sm hover:bg-blue-500 py-2 px-4 h-7"
            size={'sm'}
            onClick={() => openModal('create-group')}
          >
            Thêm
          </Button>
        </div>
        {show_group && (
          <Tabs
            defaultValue="group1"
            className="space-y-2"
          >
            <TabsList>
              <TabsTrigger value="group1">Nhóm 1</TabsTrigger>
              <TabsTrigger value="group2">Nhóm 2</TabsTrigger>
              <TabsTrigger value="group3">Nhóm 3</TabsTrigger>
              <TabsTrigger value="group4">Nhóm 4</TabsTrigger>
            </TabsList>
            <TabsContent
              value="group1"
              className="flex flex-col gap-2"
            >
              <div className="flex flex-col gap-3">
                <div>
                  <span className="text-sm font-medium">Trang</span>
                  <div className="grid lg:grid-cols-4 lg:gap-6">
                    {SOCIAL_MEDIA_DUMB_DATA.map((social_media, index) => (
                      <div
                        key={index}
                        className="group p-2 flex gap-2 items-center hover:bg-slate-100 rounded-lg cursor-pointer"
                      >
                        <Image
                          src={CommentProfilePicture}
                          alt="profile"
                          className="size-8 rounded-xl"
                        />
                        <div className="flex flex-col gap-0 flex-auto">
                          <span className="text-sm font-medium">
                            Bot Bán Hàng
                          </span>
                          <div className="flex items-center gap-1">
                            <span>{social_media}</span>
                            <span className="text-xs text-slate-500">
                              1706801539392655
                            </span>
                          </div>
                        </div>
                        <div className="h-full">
                          <MinusCircleIcon className="w-5 text-slate-500 stroke-[1.5] stroke-slate-500 opacity-0 group-hover:opacity-100" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-sm font-medium">Thành viên</span>
                  <div className="grid lg:grid-cols-4 lg:gap-6">
                    {new Array(4).fill(0).map((_, index) => (
                      <div
                        key={index}
                        className="group p-2 flex gap-2 items-center hover:bg-slate-100 rounded-lg cursor-pointer"
                      >
                        <Image
                          src={CommentProfilePicture}
                          alt="profile"
                          className="size-8 rounded-xl"
                        />
                        <div className="flex flex-col gap-0 flex-auto">
                          <span className="text-sm font-medium">
                            Nguyễn Văn A
                          </span>
                          <div className="flex items-center gap-1">
                            <span className="text-xs text-slate-500">
                              Đã thêm 3 ngày trước
                            </span>
                          </div>
                        </div>
                        <div className="h-full">
                          <MinusCircleIcon className="w-5 text-slate-500 stroke-[1.5] stroke-slate-500 opacity-0 group-hover:opacity-100" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Button
                  size={'sm'}
                  className="bg-slate-200 text-black py-2 px-4 hover:bg-slate-300"
                  onClick={() => openModal('modify-group')}
                >
                  <PencilSquareIcon className="size-5" />
                  <span className="text-sm font-medium">Sửa Nhóm 1</span>
                </Button>
                <Button
                  size={'sm'}
                  className="bg-transparent border-none shadow-none text-red-500 py-2 px-4 hover:bg-slate-50"
                  onClick={() => openModal('delete-group')}
                >
                  <span className="text-sm font-medium">Xóa nhóm</span>
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="group2">Change your password here.</TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  )
}

export default Group
