import { Button } from '@/components/ui/button'
import { DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useModal from '@/hooks/useModal'

import GroupItem from '@/components/modal/_components/GroupItem'

function ModifyGroupModal() {
  const { closeModal } = useModal()
  return (
    <DialogContent className="flex flex-col gap-0 p-0 m-0 border h-full max-h-[90vh] max-w-[95vw] lg:max-w-[1296px]">
      <span className="py-3 px-6 text-lg font-semibold">Chỉnh sửa Nhóm</span>
      <div className="h-full flex flex-col gap-4 py-4 px-5 bg-slate-100 border-y border-slate-300 overflow-auto">
        <div className="flex flex-col gap-1">
          <Label className="text-sm font-medium">
            Tên nhóm <span className="text-red-600">*</span>
          </Label>
          <Input
            placeholder="Nhập tên nhóm"
            className="bg-white py-2 px-3 shadow-sm"
          />
        </div>
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Thành viên</span>
              <span className="font-medium text-sm">Đã chọn: 1 Thành viên</span>
            </div>
            {new Array(4).fill(0).map((_, index) => (
              <GroupItem key={index} />
            ))}
            <span className="text-xs text-slate-700">
              Lưu ý: Chức năng Nhóm chỉ áp dụng cho Thành viên. Quản trị viên
              mặc định sẽ xem được toàn bộ các Trang.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Thành viên</span>
              <span className="font-medium text-sm">Đã chọn: 1 Trang</span>
            </div>
            {new Array(4).fill(0).map((_, index) => (
              <GroupItem
                key={index}
                isPage={true}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between py-3 px-6">
        <Button
          className="py-2 px-4 bg-slate-100 hover:bg-slate-200 text-sm text-black font-medium shadow-none"
          size={'sm'}
          onClick={closeModal}
        >
          Đóng
        </Button>
        <Button
          className="py-2 px-4 bg-blue-700 hover:bg-blue-800 text-sm text-white font-medium shadow-none"
          size={'sm'}
        >
          Cập nhật
        </Button>
      </div>
    </DialogContent>
  )
}

export default ModifyGroupModal
