import React from 'react'
import { Button } from '../../ui/button'
import useModal from '@/hooks/useModal'

function DeleteGroupModal() {
  const { close_modal } = useModal()
  return (
    <div className="flex flex-col gap-4 p-6 w-[458px]">
      <div className="flex flex-col gap-0">
        <span className="text-lg font-semibold">Xác nhận xóa nhóm</span>
        <span className="py-3 text-sm">
          Xóa nhóm <span className="font-semibold">“Nhóm 1”</span> ra khỏi Tổ
          chức <span className="font-semibold">“Bot Bán Hàng”</span>
        </span>
      </div>
      <div className="flex items-center justify-between">
        <Button
          className="py-2 px-4 bg-slate-100 hover:bg-slate-200 text-sm text-slate-500 font-medium shadow-none"
          size={'sm'}
          onClick={close_modal}
        >
          Đóng
        </Button>
        <Button
          className="py-2 px-4 bg-red-100 hover:bg-red-200 text-sm text-red-500 font-medium shadow-none"
          size={'sm'}
        >
          Xóa
        </Button>
      </div>
    </div>
  )
}

export default DeleteGroupModal
