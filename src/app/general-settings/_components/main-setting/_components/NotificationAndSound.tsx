import GeneralSettingIcons from '@/Svgs/GeneralSettingIcons'
import ConfigurationSetting, {
  ConfigurationSettingProps,
} from './ConfigurationSetting'

const NOTIFICATIONANDSOUND_DUMB_DATA: ConfigurationSettingProps[] = [
  {
    icon: GeneralSettingIcons.bell_alert,
    name: 'Thông báo khi có tin nhắn mới hoặc bình luận mới',
    description: 'Gửi thông báo khi có tin nhắn mới hoặc bình luận mới',
  },
  {
    icon: GeneralSettingIcons.speaker,
    name: 'Phát âm thanh',
    description: 'Phát âm thanh khi có thông báo mới',
  },
]

function NotificationAndSound() {
  return (
    <div>
      <span>{GeneralSettingIcons.bell_solid}</span>
      <div className="flex-auto flex flex-col gap-1">
        <div className="flex flex-col gap-0 justify-between pb-3">
          <span className="text-sm font-semibold">Thông báo & Âm Thanh</span>
          <span className="text-xs text-muted-foreground">
            Thiết lập Thông báo và Âm thanh khi ở chế độ Gộp trang.
          </span>
        </div>
        <div className="flex flex-col gap-0">
          {NOTIFICATIONANDSOUND_DUMB_DATA.map((configuration, index) => (
            <div
              key={index}
              className="flex flex-col gap-0"
            >
              <ConfigurationSetting {...configuration} />
              {index != 1 && (
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

export default NotificationAndSound
