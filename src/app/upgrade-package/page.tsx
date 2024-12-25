'use client'
import { X } from 'lucide-react'
import BillInfomation from './_components/BillInfomation'
import CofirmButtons from './_components/CofirmButtons'

function page() {
  return (
    <section className="size-full center-child p-[17px] ">
      <div className="modal flex flex-col w-full max-w-[760px] rounded-xl border border-slate-200 p-6 gap-4 relative">
        <X
          className="absolute right-4 top-4"
          size={16}
        />
        <div className="flex flex-col gap-0">
          <span className="text-lg font-semibold leading-relaxed">
            Xác nhận thanh toán
          </span>
          <BillInfomation />
        </div>
        <CofirmButtons />
      </div>
    </section>
  )
}

export default page
