import { cn } from '@/lib/utils'
import React from 'react'

interface TransferInfomationItemProps {
  label: string
  value: string
  includeGap?: boolean
}

function TransferInfomationItem({
  label,
  value,
  includeGap = false,
}: TransferInfomationItemProps) {
  return (
    <div className="flex gap-1.5 items-end text-nowrap">
      <div className={cn('flex flex-col', includeGap ? 'gap-2.5' : 'gap-0')}>
        <span className="text-sm leading-5 text-slate-700">{label}</span>
        <span className="rounded-lg py-2 px-3 bg-green-50 border border-green-800 font-semibold">
          {value}
        </span>
      </div>
      <span className="py-2 text-sm text-blue-700">Sao chép</span>
    </div>
  )
}

export default TransferInfomationItem
