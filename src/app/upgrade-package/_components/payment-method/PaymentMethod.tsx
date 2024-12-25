import React from 'react'
import TransferMethod from '@/app/upgrade-package/_components/payment-method/TransferMethod'
import { Button } from '@/components/ui/button'
import { RadioGroup } from '@/components/ui/radio-group'

function PaymentMethod() {
  return (
    <div className="flex flex-col gap-0">
      <span className="py-1 px-4 gap-4 font-medium">Thanh toán</span>
      <div className="flex flex-col p-4 pt-0 gap-5">
        <RadioGroup>
          <TransferMethod />
        </RadioGroup>
        <span className="text-sm text-slate-700">
          Sau khi Quý khách đã thanh toán, hệ thống sẽ tự động kích hoạt sau 1-2
          phút. <br />
          Quý khách có thể liên hệ với Bot Bán Hàng khi thanh toán thành công
          nhưng hệ thống chưa kích hoạt.
        </span>
        <div>
          <Button
            size={'sm'}
            className="bg-blue-700 py-2 px-4 hover:bg-blue-600 h-9"
          >
            Hỗ trợ thanh toán
          </Button>
        </div>
        <ul className="py-3 px-5 bg-yellow-50 rounded-lg text-sm">
          <span className="font-semibold">Lưu ý:</span>
          <ul className="px-5 list-disc">
            <li>
              Quý khách vui lòng đọc kỹ hướng dẫn sử dụng Chuyển khoản nhanh tại{' '}
              <u>ĐÂY</u>
            </li>
            <li>
              Bot Bán Hàng không chịu trách nhiệm cho bất kỳ tổn thất nào xảy ra
              nếu khách hàng không nhập chính xác thông tin chuyển khoản.
            </li>
            <li>Quý khách vui lòng giữ biên lai để đối chứng khi cần thiết.</li>
            <li>
              Quý khách vui lòng không chỉnh sửa số tài khoản và tên tài khoản
              thụ hưởng được cung cấp.
            </li>
          </ul>
        </ul>
      </div>
    </div>
  )
}

export default PaymentMethod
