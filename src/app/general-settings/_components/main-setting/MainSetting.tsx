import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import GeneralSettingIcons from '@/Svgs/GeneralSettingIcons'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import SocialMedia from './_components/SocialMedia'
import Members from './_components/Members'

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
        <span>{GeneralSettingIcons.cog_mini}</span>
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
    </div>
  )
}

export default MainSetting
