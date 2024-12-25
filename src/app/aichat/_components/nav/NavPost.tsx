import Image from 'next/image'

import NavItem from '@/app/aichat/_components/nav/NavItem'
import NavIcons from '@/Svgs/NavIcons'

import Ava from '@/app/aichat/_components/ava.png'
import { Logo } from '@/public/logo'

function NavPost() {
  return (
    <nav className="w-11 flex-shrink-0 flex flex-col items-center text-slate-700">
      <div className="flex flex-col items-center gap-2 border-b-2 border-slate-700 py-1">
        <Image
          alt="logo"
          src={Logo}
          className="w-9 object-contain"
        />
        <NavItem icon={NavIcons[0].icon} />
      </div>
      <div className="flex flex-col gap-1 py-1 flex-auto overflow-y-scroll no-scrollbar">
        {NavIcons.slice(1).map((navItem, index) => (
          <NavItem
            key={index}
            icon={navItem.icon}
          />
        ))}
      </div>
      <div className="relative">
        <Image
          alt="logo"
          src={Ava}
          className="w-9"
        />
        <span className="absolute top-1.5 right-0 size-5 text-center translate-x-1/2 -translate-y-1/2 content-center bg-red-600 text-[10px] text-white border-2 border-white rounded-full">
          2
        </span>
      </div>
    </nav>
  )
}

export default NavPost
