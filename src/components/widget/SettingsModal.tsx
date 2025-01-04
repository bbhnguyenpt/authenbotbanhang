import {
  Cog8ToothIcon,
  RectangleStackIcon,
  Square3Stack3DIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/solid'

import SettingItem, { SettingItemProps } from '@/components/widget/SettingItem'

const SETTINGS_DUMB_DATA: SettingItemProps[] = [
  {
    icon: <Square3Stack3DIcon />,
    label: 'Chỉnh sửa vị trí',
  },
  {
    icon: <RectangleStackIcon />,
    label: 'Luôn hiển thị',
    show_arrow_down: true,
  },
  {
    icon: <Cog8ToothIcon />,
    label: 'Cài đặt ứng dụng',
  },
  {
    icon: <Squares2X2Icon />,
    label: 'Chợ ứng dụng',
  },
]

function SettingsModal() {
  return (
    <div className="w-52 rounded-lg z-[60] shadow-sm">
      <div className="p-1 flex flex-col gap-1">
        {SETTINGS_DUMB_DATA.map((setting, index) => (
          <div
            key={index}
            className="flex flex-col gap-0"
          >
            {index === SETTINGS_DUMB_DATA.length - 1 && (
              <span className="flex pt-1 pb-2 px-3">
                <span className="bg-slate-200 h-[1px] w-full"></span>
              </span>
            )}
            <SettingItem
              icon={setting.icon}
              label={setting.label}
              show_arrow_down={setting.show_arrow_down}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SettingsModal
