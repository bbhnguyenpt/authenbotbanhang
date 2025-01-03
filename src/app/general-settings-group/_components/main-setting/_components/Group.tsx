'use client'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import useModal from '@/hooks/useModal'
import { CommentProfilePicture } from '@/public/dumb-data'
import GeneralSettingIcons from '@/Svgs/GeneralSettingIcons'
import Image from 'next/image'

import { useState } from 'react'

const SOCIAL_MEDIA_DUMB_DATA = [
  GeneralSettingIcons.logo_instagram,
  GeneralSettingIcons.logo_facebook,
  GeneralSettingIcons.logo_zalo,
  GeneralSettingIcons.logo_phone,
]

function Group() {
  const [show_group, set_show_group] = useState(false)
  const { open_modal } = useModal()
  return (
    <div className="relative">
      <button
        className=" absolute top-2 right-40 opacity-1"
        onClick={() => set_show_group(!show_group)}
      >
        test
      </button>
      <span>{GeneralSettingIcons.group_user}</span>
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
                  <div className="grid grid-cols-4">
                    {SOCIAL_MEDIA_DUMB_DATA.map((social_media, index) => (
                      <div
                        key={index}
                        className="p-2 flex gap-2 items-center"
                      >
                        <Image
                          src={CommentProfilePicture}
                          alt="profile"
                          className="size-8 rounded-xl"
                        />
                        <div className="flex flex-col gap-0">
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
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-sm font-medium">Thành viên</span>
                  <div className="grid grid-cols-4">
                    {new Array(4).fill(0).map((_, index) => (
                      <div
                        key={index}
                        className="p-2 flex gap-2 items-center"
                      >
                        <Image
                          src={CommentProfilePicture}
                          alt="profile"
                          className="size-8 rounded-xl"
                        />
                        <div className="flex flex-col gap-0">
                          <span className="text-sm font-medium">
                            Nguyễn Văn A
                          </span>
                          <div className="flex items-center gap-1">
                            <span className="text-xs text-slate-500">
                              Đã thêm 3 ngày trước
                            </span>
                          </div>
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
                >
                  {GeneralSettingIcons.pencil_square}{' '}
                  <span className="text-sm font-medium">Sửa Nhóm 1</span>
                </Button>
                <Button
                  size={'sm'}
                  className="bg-transparent border-none shadow-none text-red-500 py-2 px-4 hover:bg-slate-50"
                  onClick={() => open_modal('delete-group')}
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
