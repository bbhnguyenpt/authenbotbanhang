import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React, { Dispatch, SetStateAction } from 'react'

interface CofirmButtonsProps {
  show_payment: boolean
  set_show_payment: Dispatch<SetStateAction<boolean>>
}

function CofirmButtons({ set_show_payment, show_payment }: CofirmButtonsProps) {
  function handleProcessPayment() {
    if (!show_payment) {
      set_show_payment(true)
    }
  }
  return (
    <div className="flex justify-between text-sm font-medium">
      <Button
        size={'sm'}
        variant={'secondary'}
        className="text-slate-500 py-2 px-4 h-9"
      >
        Đóng
      </Button>
      <Button
        size={'sm'}
        className={cn(
          'py-2 px-4 h-9 text-sm font-medium',
          show_payment
            ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            : 'bg-blue-700 hover:bg-blue-600'
        )}
        onClick={handleProcessPayment}
      >
        {show_payment ? 'Đang chờ thanh toán' : 'Xác nhận'}
      </Button>
    </div>
  )
}

export default CofirmButtons
