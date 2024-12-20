import { Logo } from '@/public/logo'
import NavIcons from '@/Svgs/NavIcons'
import Image from 'next/image'
import Ava from './ava.png'

function NavComment() {
  return (
    <nav className="w-11 flex-shrink-0 flex flex-col items-center text-slate-700">
      <div className="flex flex-col items-center gap-2 border-b-2 border-slate-700 py-1">
        <Image
          alt="logo"
          src={Logo}
          className="w-9"
        />
        <span className="size-11 rounded-[8px] flex items-center justify-center cursor-pointer hover:text-slate-900 hover:bg-slate-300 transition-all">
          {NavIcons[0].icon}
        </span>
      </div>
      <div className="flex flex-col gap-1 py-1 flex-auto">
        {NavIcons.slice(1).map((navItem, index) => (
          <span
            key={index}
            className="size-11 rounded-[8px] flex items-center justify-center cursor-pointer hover:text-slate-900 hover:bg-slate-300 transition-all"
          >
            {navItem.icon}
          </span>
        ))}
      </div>
      <div className="relative">
        <Image
          alt="logo"
          src={Ava}
          className="w-9"
        />
        <span className="absolute top-0 right-0 size-5 text-center translate-x-1/2 -translate-y-1/2 content-center bg-red-600 text-[10px] text-white border-1 border-white rounded-full">
          2
        </span>
      </div>
    </nav>
  )
}

export default NavComment
