import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { CogIcon } from '@heroicons/react/24/solid'

import Conversation from '@/app/general-settings-group/_components/main-setting/_components/Conversation'
import CustomerInfomation from '@/app/general-settings-group/_components/main-setting/_components/CustomerInfomation'
import Group from '@/app/general-settings-group/_components/main-setting/_components/Group'
import Members from '@/app/general-settings-group/_components/main-setting/_components/Members'
import NotificationAndSound from '@/app/general-settings-group/_components/main-setting/_components/NotificationAndSound'
import SocialMedia from '@/app/general-settings-group/_components/main-setting/_components/SocialMedia'

function MainSetting() {
  return (
    <div className="flex flex-col gap-5 [&>div]:rounded-lg [&>div]:flex [&>div]:gap-3 [&>div]:py-3 [&>div]:px-4 [&>div]:bg-white">
      <Select>
        <SelectTrigger className="bg-white w-[242px]">
          <SelectValue
            placeholder="CTCP Công nghệ Chatbot "
            className="line-clamp-1"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <div>
        <CogIcon className="size-5" />
        <div className="flex-auto flex flex-col gap-3">
          <span className="text-sm font-medium text-zinc-950">
            Cài đặt chung
          </span>
          <div className="flex items-center gap-2">
            <Switch id="layer-authentication" />
            <Label htmlFor="layer-authentication">
              Yêu cầu bật xác thực 2 lớp
            </Label>
          </div>
        </div>
      </div>

      <SocialMedia />

      <Members />

      <Group />

      <Conversation />

      <NotificationAndSound />

      <CustomerInfomation />
    </div>
  )
}

export default MainSetting
