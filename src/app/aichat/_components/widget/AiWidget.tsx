'use client'
import Tooltip from '@/components/Tooltip'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import SettingsModal from '@/components/widget/SettingsModal'
import Icons from '@/Svgs/Icons'
import { ChevronDown, ChevronRight, MoreHorizontal } from 'lucide-react'

function AiWidget() {
  return (
    <section className="w-[400px] flex flex-col gap-2 overflow-y-scroll no-scrollbar">
      <div className="bg-white flex items-center gap-3 py-1 px-3 rounded-lg">
        <span>{Icons.bell}</span>
        <div className="flex flex-col gap-0 font-medium flex-auto">
          <p className="text-xs flex items-center gap-1">
            <span>Ghim - Nhắc lịch - Cảnh báo </span>
            <span className="bg-red-600 rounded-full size-3 text-white text-[8px] leading-3 text-center content-center font-medium">
              2
            </span>
          </p>
          <span className="text-[10px]">
            12:15 28/07 - Nhắc khách thanh toán
          </span>
        </div>
        <ChevronRight className="text-slate-500" />
      </div>

      <div className="bg-white flex-auto flex flex-col gap-3 py-2 rounded-lg">
        <div className="flex items-center gap-3 px-3 pb-2 border-b">
          <span className="flex-auto font-semibold text-sm leading-5 text-slate-900 ">
            CRM
          </span>
          <ChevronDown className="text-slate-500" />
        </div>
      </div>

      <div className="bg-white flex items-center gap-3 py-3 px-3 rounded-lg">
        <span className="flex-auto font-semibold text-sm leading-5 text-slate-900">
          Đơn hàng
        </span>
        <Popover>
          <PopoverTrigger>
            <Tooltip tooltipContent="Thiết lập">
              <MoreHorizontal />
            </Tooltip>
          </PopoverTrigger>
          <PopoverContent className="relative -translate-x-10 -translate-y-3 w-auto shadow-lg border-none p-0">
            <span className="size-8 rounded rotate-45 absolute -bottom-2 right-3 bg-white z-10"></span>
            <SettingsModal />
          </PopoverContent>
        </Popover>
        <ChevronRight className="text-slate-500" />
      </div>

      <div className="bg-white flex items-center gap-3 py-3 px-3 rounded-lg">
        <span className="flex-auto font-semibold text-sm leading-5 text-slate-900">
          Chatbot
        </span>
        <ChevronRight className="text-slate-500" />
      </div>

      <div className="bg-white flex items-center gap-3 py-3 px-3 rounded-lg">
        <span className="flex-auto font-semibold text-sm leading-5 text-slate-900">
          Ghi chú & Đặt lịch
        </span>
        <ChevronRight className="text-slate-500" />
      </div>
    </section>
  )
}

export default AiWidget
