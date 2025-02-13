import { Button } from '@/components/ui/button'
import { UsersIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

import { CommentProfilePicture } from '@/public/dumb-data'

function Members() {
  return (
    <div>
      <UsersIcon className="size-5 flex-shrink-0" />
      <div className="flex-auto flex flex-col gap-3">
        <div className="flex justify-between">
          <span className="text-sm font-medium">Thành viên (8/20)</span>
          <Button
            className="bg-blue-600 text-sm hover:bg-blue-500 py-2 px-4 h-7"
            size={'sm'}
          >
            Thêm
          </Button>
        </div>
        <div className="grid lg:grid-cols-4">
          {new Array(8).fill(0).map((_, index) => (
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
                <span className="text-sm font-medium">Nguyễn Văn A</span>
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
  )
}

export default Members
