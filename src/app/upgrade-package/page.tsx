/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { X } from 'lucide-react'
import PaymentInfomation from '@/app/upgrade-package/_components/PaymentInfomation'
import CofirmButtons from '@/app/upgrade-package/_components/CofirmButtons'
import PaymentMethod from '@/app/upgrade-package/_components/payment-method/PaymentMethod'
import BillInfomation from '@/app/upgrade-package/_components/BillInfomation'
import { useState } from 'react'
import { cn } from '@/lib/utils'

function page() {
  const [show_bill, set_show_bill] = useState(false)
  const [show_payment, set_show_payment] = useState(false)

  return (
    <section className="size-full center-child p-[17px] ">
      <div className="modal flex flex-col w-full max-w-[760px] rounded-xl border border-slate-200 p-6 gap-4 relative">
        <X
          className="absolute right-4 top-4"
          size={16}
        />
        <div
          className={cn(
            'flex flex-col gap-0',
            (show_bill || show_payment) && 'border-b-2 border-dashed'
          )}
        >
          <span className="text-lg font-semibold leading-relaxed">
            Xác nhận thanh toán
          </span>
          <PaymentInfomation set_show_bill={set_show_bill} />
        </div>
        <BillInfomation show_bill={show_bill} />
        {show_payment && <PaymentMethod />}
        <CofirmButtons
          show_payment={show_payment}
          set_show_payment={set_show_payment}
        />
      </div>
    </section>
  )
}

export default page
