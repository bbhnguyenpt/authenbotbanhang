import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Dolla_Picture } from '@/public/dumb-data'
import Icons from '@/Svgs/Icons'
import Image from 'next/image'
import { ReactNode } from 'react'
import Comment from './Comment'
import { DUMB_DATA_COMMENT } from './Post'

interface CommentModalProps {
  children: ReactNode
}

function CommentModal({ children }: CommentModalProps) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="w-[602px] h-[650px] rounded-xl p-2 border border-gray-200 shadow-lg bg-gradient-comment">
        <DialogTitle className="hidden">Are you absolutely sure?</DialogTitle>
        <div className="flex-auto flex flex-col gap-0">
          <span className="font-medium leading-6 py-0.5">
            Xem bình luận bài viết
          </span>
          <div className="flex-auto pt-2">
            <div className="size-full bg-white rounded-lg p-2 flex flex-col gap-3">
              <div className="p-2 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xxs leading-3">
                    Đăng bởi Bùi Thị Thúy - 16/04
                  </span>
                  <span className="text-xs leading-3 text-blue-700">
                    Mở trên Facebook
                  </span>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={Dolla_Picture}
                    alt="dd"
                    className="h-10 w-14 object-cover rounded overflow-hidden"
                  />
                  <div className="flex flex-col gap-0">
                    <span className="text-sm">
                      Bot Ban Hang chiêu mộ nhân viên kinh doanh
                    </span>
                    <span className="flex items-center gap-1 text-xs text-orange-600">
                      {Icons.megaphone}
                      <span>Từ quảng cáo</span>
                    </span>
                  </div>
                </div>
                <span className="py-1 px-2 text-sm text-slate-900 bg-slate-100 rounded">
                  Mình cần hỗ trợ về sản phẩm, bên bạn có thể hỗ trợ được ko?
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {DUMB_DATA_COMMENT.map((comment, index) => (
                  <Comment
                    comment={comment}
                    key={index}
                  />
                ))}
              </div>
              <div className="pl-[60px]">
                <div className="h-12 w-full rounded-3xl flex items-center justify-between p-2 pl-4 border border-slate-200 shadow-sm">
                  <Input
                    placeholder="Bình luận với vai trò Bot Bán Hàng"
                    className="border-none shadow-none px-1"
                  />
                  <span className="text-slate-500">{Icons.sendIcon}</span>
                </div>
              </div>
              <span className="px-3 text-sm font-medium cursor-pointer hover:underline">
                Xem thêm bình luận
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CommentModal
