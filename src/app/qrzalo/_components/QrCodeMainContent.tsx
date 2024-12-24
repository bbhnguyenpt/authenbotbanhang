import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import PersonalZaloTab from './PersonalZaloTab'

const QrCodeMainContentTabs = [
  {
    value: 'personalZalo',
    label: 'Zalo Cá nhân',
  },
  {
    value: 'companyZalo',
    label: 'Zalo Doanh nghiệp (OA)',
  },
]

function QrCodeMainContent() {
  return (
    <div className="size-full bg-white rounded-lg p-2 flex flex-col gap-0">
      <span className="p-2 border-b border-slate-200 font-semibold leading-6">
        Kết nối với Zalo
      </span>
      <Tabs
        defaultValue="personalZalo"
        className="size-full center-child relative"
      >
        <TabsList className=" absolute top-2 left-2">
          {QrCodeMainContentTabs.map(tab => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="py-1 px-3 rounded text-sm font-medium"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <PersonalZaloTab />
        <TabsContent value="companyZalo">companyZalo</TabsContent>
      </Tabs>
    </div>
  )
}

export default QrCodeMainContent
