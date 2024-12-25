import Icons from '@/Svgs/Icons'
import SettingItem, { SettingItemProps } from '@/components/widget/SettingItem'

const SETTINGS_DUMB_DATA: SettingItemProps[] = [
  {
    icon: Icons.squaresStack,
    label: 'Chỉnh sửa vị trí',
  },
  {
    icon: Icons.rectangleStack,
    label: 'Luôn hiển thị',
    show_arrow_down: true,
  },
  {
    icon: Icons.setting,
    label: 'Cài đặt ứng dụng',
  },
  {
    icon: Icons.square2x2,
    label: 'Chợ ứng dụng',
  },
]

function SettingsModal() {
  return (
    <div className="w-52 rounded-lg z-[60] shadow-sm">
      <div className="p-1 flex flex-col gap-1">
        {SETTINGS_DUMB_DATA.map((setting, index) => (
          <SettingItem
            key={index}
            icon={setting.icon}
            label={setting.label}
            show_arrow_down={setting.show_arrow_down}
          />
        ))}
      </div>
    </div>
  )
}

export default SettingsModal
