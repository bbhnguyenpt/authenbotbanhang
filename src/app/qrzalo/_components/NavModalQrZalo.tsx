import React from 'react'
import NavQrZaloIcons from '@/Svgs/NavQrZaloIcons'
import NavItemQrZalo, { NavItemQrZaloProps } from './NavItemQrZalo'

const NAV_QRZALO_DUMB_DATA: NavItemQrZaloProps[] = [
  {
    icon: NavQrZaloIcons.clock,
    label: 'Kích hoạt trang',
  },
  {
    icon: NavQrZaloIcons.facebook,
    label: 'Facebook',
  },
  {
    icon: NavQrZaloIcons.insta,
    label: 'Instagram',
  },
  {
    icon: NavQrZaloIcons.zalo,
    label: 'Zalo',
  },
  {
    icon: NavQrZaloIcons.phone,
    label: 'Whatsapp',
  },
  {
    icon: NavQrZaloIcons.message,
    label: 'Website',
  },
  {
    icon: NavQrZaloIcons.tiktok,
    label: 'Tiktok',
  },
  {
    icon: NavQrZaloIcons.shoppee,
    label: 'Shopee',
  },
  {
    icon: NavQrZaloIcons.lazada,
    label: 'Lazada',
  },
]

function NavModalQrZalo() {
  return (
    <div className="bg-white rounded-md p-2 flex flex-col gap-1">
      {NAV_QRZALO_DUMB_DATA.map((navItem, index) => (
        <NavItemQrZalo
          key={index}
          icon={navItem.icon}
          label={navItem.label}
        />
      ))}
    </div>
  )
}

export default NavModalQrZalo
