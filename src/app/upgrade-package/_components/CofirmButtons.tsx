import { Button } from '@/components/ui/button'
import React from 'react'

function CofirmButtons() {
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
        className="bg-blue-700 py-2 px-4 hover:bg-blue-600 h-9"
      >
        Xác nhận
      </Button>
    </div>
  )
}

export default CofirmButtons
