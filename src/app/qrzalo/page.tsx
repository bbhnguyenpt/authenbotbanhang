import React from 'react'
import NavModalQrZalo from '@/app/qrzalo/_components/NavModalQrZalo'
import { X } from 'lucide-react'
import QrCodeMainContent from '@/app/qrzalo/_components/QrCodeMainContent'

function page() {
  return (
    <section className="size-full center-child p-[17px]">
      <div className="modal qrzalo-modal w-full flex flex-col p-2 gap-0">
        <div className="flex items-center justify-between px-3 ">
          <span className="font-semibold text-lg leading-[30px]">
            Thêm Trang
          </span>
          <X size={28} />
        </div>
        <div className="size-full flex py-2 gap-2">
          <NavModalQrZalo />
          <QrCodeMainContent />
        </div>
      </div>
    </section>
  )
}

export default page
