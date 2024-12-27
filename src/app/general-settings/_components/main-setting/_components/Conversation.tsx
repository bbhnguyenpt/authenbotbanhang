import GeneralSettingIcons from '@/Svgs/GeneralSettingIcons'
import ConfigurationSetting, {
  ConfigurationSettingProps,
} from './ConfigurationSetting'

const CONVERSATION_DUMB_DATA: ConfigurationSettingProps[] = [
  {
    icon: GeneralSettingIcons.inbox_stack,
    name: 'Chế độ hiển thị hội thoại',
    description: 'Thiết lập hiển thị hội thoại',
    select_placeholder: 'Hội thoại chưa đọc',
  },
  {
    icon: GeneralSettingIcons.swatch,
    name: 'Chế độ hiển thị gắn nhãn',
    description: 'Thiết lập chế độ hiển thị gắn nhãn trên hội thoại',
    select_placeholder: 'Hiện chấm màu có chú giải',
  },
  {
    icon: GeneralSettingIcons.users_solid,
    name: 'Hiện hội thoại theo nhân viên chỉ định',
    description:
      'Khi bật chế độ này, hệ thống chỉ hiện ra hội thoại cho nhân viên được chỉ định. \nĐối với Quản trị viên vẫn xem được toàn bộ hội thoại.',
  },
  {
    icon: GeneralSettingIcons.user_circle,
    name: 'Hiện ảnh đại diện của trang',
    description: 'Hiện ảnh đại diện của trang trên hội thoại',
  },
]

function Conversation() {
  return (
    <div>
      <span>{GeneralSettingIcons.bubble_chat}</span>
      <div className="flex-auto flex flex-col gap-1">
        <div className="flex flex-col gap-0 justify-between pb-3">
          <span className="text-sm font-semibold">Hội thoại</span>
          <span className="text-xs text-muted-foreground">
            Thiết lập hội thoại khi ở chế độ Gộp trang.
          </span>
        </div>
        <div className="flex flex-col gap-0">
          {CONVERSATION_DUMB_DATA.map((configuration, index) => (
            <div
              key={index}
              className="flex flex-col gap-0"
            >
              <ConfigurationSetting {...configuration} />
              {index != 3 && (
                <span className="flex py-3 pl-8">
                  <span className="bg-slate-200 h-[1px] w-full"></span>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Conversation