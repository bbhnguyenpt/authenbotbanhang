import { Button } from '@/components/ui/button'
import { DialogContent } from '@/components/ui/dialog'
import useModal from '@/hooks/useModal'
import React from 'react'

const MovePageModal = () => {
    const { closeModal, data } = useModal()
    return (
        <DialogContent className="w-[90dvw] max-w-[458px] m-0 border flex flex-col gap-4 p-6 rounded-xl">
            <div className="flex flex-col gap-0">
                <span className="text-lg font-semibold">Chú ý</span>
                <span className="py-3 text-sm">Bạn muốn chuyển trang <span className="font-semibold">“{data}”</span> từ nhóm <span className="font-semibold">“Nhóm 2”</span> sang nhóm hiện tại.</span>
            </div>
            <div className="flex justify-between">
                <Button
                    className="py-2 px-4 bg-slate-100 hover:bg-slate-200 text-sm text-black font-medium shadow-none"
                    size={'sm'}
                    onClick={closeModal}
                >
                    Hủy
                </Button>
                <Button
                    className="py-2 px-4 bg-blue-700 hover:bg-blue-800 text-sm text-white font-medium shadow-none"
                    size={'sm'}
                >
                    Xác nhận
                </Button>
            </div>
        </DialogContent>
    )
}

export default MovePageModal