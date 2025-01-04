import React, { ReactNode } from 'react'
import { Switch } from '@/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export interface ConfigurationSettingProps {
  icon: ReactNode
  name: string
  description: string
  select_placeholder?: string
}

function ConfigurationSetting({
  description,
  icon,
  name,
  select_placeholder,
}: ConfigurationSettingProps) {
  return (
    <div className="flex justify-between">
      <div className="w-full max-w-[732px] flex gap-3">
        <span className="size-5 text-slate-700">{icon}</span>
        <div className="flex flex-col gap-0">
          <span className="text-sm font-medium">{name}</span>
          <span className="text-sm text-muted-foreground whitespace-pre-line">
            {description}
          </span>
        </div>
      </div>

      {select_placeholder ? (
        <Select>
          <SelectTrigger className="w-[270px]">
            <SelectValue placeholder={select_placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      ) : (
        <Switch />
      )}
    </div>
  )
}

export default ConfigurationSetting
