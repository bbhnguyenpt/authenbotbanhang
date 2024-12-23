import React from 'react'

function Widget() {
  return (
    <section className="w-[400px] bg-white rounded-lg overflow-hidden">
      <div className="py-2 px-3 content-center text-sm font-semibold leading-5 border-b border-slate-200">
        <span className="py-[2px]">Tổng quan bài viết</span>
      </div>
      <div className="h-full px-3 overflow-y-scroll no-scrollbar">
        <div className="whitespace-pre-line font-bold mb-12">
          {
            '\nThống kê chung: \n• Reaction: 14.154 \n• Bình luận: 14.257 \n\nThống kê AI:\n1. Cảm xúc \n• Thích: 14.154 \n• Vui vẻ: 14.154 \n• Buồn: 14.257 \n• Giận dữ:14.257 \n\n2. CTA \n• Lên đơn: 142 \n• Lập lịch: 142 \n\nThông tin Quảng cáo \n• ID Quảngcáo: 123123123 \n• Chi tiêu: 123.000đ \n\nThông tin bài viết \n• ID bài viết:21389218392183921 \n• Ngày tạo: 3/12/2024 \n• Người tạo: Nguyễn Văn A \n• Ngàycập nhật: 12/12/2024 \n• Người cập nhật: Nguyễn Văn B'
          }
        </div>
      </div>
    </section>
  )
}

export default Widget
