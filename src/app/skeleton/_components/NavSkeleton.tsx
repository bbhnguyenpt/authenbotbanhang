import React from 'react'
import NavItemSkeleton, { NavItemSkeletonProps } from './NavItemSkeleton'
import NavQrZaloIcons from '@/Svgs/NavQrZaloIcons'
const NAV_QRZALO_DUMB_DATA: NavItemSkeletonProps[] = [
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
function NavSkeleton() {
  return (
    <div className="bg-white rounded-md p-2 flex flex-col gap-1 w-[230px]">
      {NAV_QRZALO_DUMB_DATA.map((navItem, index) => (
        <NavItemSkeleton
          key={index}
          icon={navItem.icon}
          label={navItem.label}
        />
      ))}
    </div>
  )
}

export default NavSkeleton
