import { CommentProfilePicture } from '@/public/dumb-data'
import { Logo } from '@/public/logo'
import { PlusCircleIcon, SquaresPlusIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'

function HeaderSkeleton() {
  return (
    <div className="py-3 px-6 flex items-center justify-between rounded-lg bg-white">
      <div className="flex items-center gap-2.5">
        <Image
          src={Logo}
          alt="lgo"
          className="w-9 h-11 object-contain"
        />
        <span className="text-2xl font-semibold">Bot Bán Hàng</span>
      </div>
      <div className="flex items-center gap-7">
        <button className="flex items-center py-1.5 px-2 gap-1 rounded bg-slate-200 text-xs font-medium">
          <PlusCircleIcon className="size-3.5 " />
          <span>Kết nối trang</span>
        </button>
        <button className="flex items-center py-1.5 px-2 gap-1 rounded bg-slate-200 text-xs font-medium">
          <SquaresPlusIcon className="size-3.5 " />
          <span>Kết nối trang</span>
        </button>
        <div className="relative">
          <Image
            src={CommentProfilePicture}
            alt="ava"
            className="size-9 rounded-full"
          />
          <span className="bg-red-500 border border-white rounded-full size-5 absolute top-1 right-1 flex items-center justify-center text-white translate-x-1/2 -translate-y-1/2 text-xxs font-medium leading-5">
            2
          </span>
        </div>
      </div>
    </div>
  )
}

export default HeaderSkeleton
