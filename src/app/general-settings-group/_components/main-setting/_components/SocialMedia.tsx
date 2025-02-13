import { Button } from '@/components/ui/button'
import { RectangleStackIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

import { CommentProfilePicture } from '@/public/dumb-data'
import GeneralSettingIcons from '@/Svgs/GeneralSettingIcons'

const SOCIAL_MEDIA_DUMB_DATA = [
  GeneralSettingIcons.logo_instagram,
  GeneralSettingIcons.logo_facebook,
  GeneralSettingIcons.logo_zalo,
  GeneralSettingIcons.logo_phone,
]

function SocialMedia() {
  return (
    <div>
      <RectangleStackIcon className="size-5 flex-shrink-0" />
      <div className="flex-auto flex flex-col gap-3">
        <div className="flex justify-between">
          <span className="text-sm font-medium">Trang (4/4)</span>
          <Button
            className="bg-blue-600 text-sm hover:bg-blue-500 py-2 px-4 h-7"
            size={'sm'}
          >
            Thêm
          </Button>
        </div>
        <div className="grid lg:grid-cols-4">
          {SOCIAL_MEDIA_DUMB_DATA.map((social_media, index) => (
            <div
              key={index}
              className="p-2 flex gap-2 items-center"
            >
              <Image
                src={CommentProfilePicture}
                alt="profile"
                className="size-8 rounded-xl"
              />
              <div className="flex flex-col gap-0">
                <span className="text-sm font-medium">Bot Bán Hàng</span>
                <div className="flex items-center gap-1">
                  <span>{social_media}</span>
                  <span className="text-xs text-slate-500">
                    1706801539392655
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SocialMedia
