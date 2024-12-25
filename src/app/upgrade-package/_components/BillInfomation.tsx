import { cn } from '@/lib/utils'
import React from 'react'

interface BillInfomationProps {
  show_bill: boolean
}

function BillInfomation({ show_bill }: BillInfomationProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3 px-4 text-sm transition-all',
        show_bill ? 'pb-4' : 'h-0 pb-0'
      )}
    >
      <div className="flex flex-col gap-1 size-full overflow-hidden">
        <span className="font-semibold">Thông tin xuất hoá đơn</span>
        <span className="font-semibold">
          CTCP Công nghệ Chatbot Việt Nam - MST: 0108514811
        </span>
        <div className="flex">
          <span className="w-[120px]">Địa chỉ:</span>
          <span>Toà nhà Tây Hà Tower, Nam Từ Liêm, Hà Nội</span>
        </div>
        <div className="flex">
          <span className="w-[120px]">Người đại diện:</span>
          <span>Lê Anh Tiến</span>
        </div>
        <div className="flex">
          <span className="w-[120px]">Số điện thoại:</span>
          <span>0988123123</span>
        </div>
        <div className="flex">
          <span className="w-[120px]">Email: </span>
          <span>minh@botbanhang.vn</span>
        </div>
      </div>
      <ul className="list-disc pl-5 text-sm text-slate-700 flex flex-col gap-0 size-full overflow-hidden">
        <li>
          Doanh nghiệp nhập đúng thông tin và cung cấp các thông tin khác chính
          xác bằng Tiếng Việt có dấu (đối với thông tin tiếng Việt). Bot Bán
          Hàng sẽ không chịu trách nhiệm hoặc sẽ hủy bỏ hóa đơn đã xuất nếu có
          sai sót thông tin
        </li>
        <li>
          Dữ liệu doanh nghiệp sẽ được Bot Bán Hàng sử dụng để liên lạc và hỗ
          trợ doanh nghiệp.{' '}
        </li>
      </ul>
    </div>
  )
}

export default BillInfomation
