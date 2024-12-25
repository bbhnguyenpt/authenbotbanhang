import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CommentProfilePicture } from '@/public/dumb-data'

import Icons from '@/Svgs/Icons'

function CRMWidget() {
  return (
    <div className="bg-white shadow-sm flex-auto flex flex-col gap-0 py-2 rounded-lg">
      <div className="flex items-center gap-3 px-3 pb-2 border-b">
        <span className="flex-auto font-semibold text-sm leading-5 text-slate-900 ">
          CRM
        </span>
        <ChevronDown className="text-slate-500" />
      </div>
      <div className="flex flex-col gap-2.5 p-3">
        <div className="flex items-start gap-2.5">
          <Image
            alt=""
            src={CommentProfilePicture}
            className="size-8 rounded-xl flex-shrink-0"
          />
          <div className="flex flex-col gap-2 items-start flex-auto text-sm">
            <div className="w-full flex justify-between items-center py-1 border-b border-gray-200">
              <span className="font-medium">
                Nguyễn Văn A (@hoang.manh.2923)
              </span>
              <span>{Icons.arrow_up_right}</span>
            </div>
            <div className="flex flex-col gap-0">
              <span className="text-blue-600">số điện thoại</span>
              <span>******1058, ******1293</span>
            </div>
          </div>
        </div>
        <Tabs
          defaultValue="responsible-employee"
          className="bg-slate-50 pb-1 pt-3 px-3 rounded-lg"
        >
          <TabsList className="grid w-full grid-cols-2 pb-2 border-b bg-slate-200 border-gray-200">
            <TabsTrigger value="responsible-employee">
              Nhân sự phụ trách
            </TabsTrigger>
            <TabsTrigger value="order">Đơn hàng</TabsTrigger>
          </TabsList>
          <TabsContent
            value="responsible-employee"
            className="flex flex-col gap-0"
          >
            {new Array(2).fill(0).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-gray-200 py-2"
              >
                <div className="flex items-start gap-2">
                  <Image
                    alt="profile picture"
                    src={CommentProfilePicture}
                    className="size-8 rounded-lg"
                  />
                  <div className="flex flex-col gap-0 text-sm">
                    <span>Hoàng Đức Mạnh</span>
                    <span className="text-slate-500">BU Hà Nội</span>
                  </div>
                </div>
                <span className="bg-green-600 text-white text-xs rounded-md center-child h-5 w-10">
                  Dev
                </span>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="order"></TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default CRMWidget
