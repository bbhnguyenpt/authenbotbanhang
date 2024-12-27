import { Button } from '@/components/ui/button'
import GeneralSettingIcons from '@/Svgs/GeneralSettingIcons'

interface InfomationTagProps {
  label: string
  value: string
}

function InfomationTag({ label, value }: InfomationTagProps) {
  return (
    <div className="flex items-center text-sm font-medium">
      <div className="w-[120px]">{label}</div>
      <span>{value}</span>
    </div>
  )
}

const NOTIFICATIONANDSOUND_DUMB_DATA: InfomationTagProps[] = [
  {
    label: 'Mã khách hàng',
    value: 'BC-301123',
  },
  {
    label: 'Mã hợp đồng',
    value: 'BBH-28271/2024',
  },
  {
    label: 'Tên công ty',
    value: 'Chatbot VietNam .JSC',
  },
  {
    label: 'Mã số thuế',
    value: '0108514811',
  },
  {
    label: 'Người đại diện',
    value: 'Lê Anh Tiến',
  },
  {
    label: 'Địa chỉ',
    value: 'Biệt thự BT1, Ô AIV, khu đô thị mới Hạ Đình, Xã Tân Triều...',
  },
  {
    label: 'Số điện thoại',
    value: '0913176383',
  },
  {
    label: 'Email',
    value: 'hotro@botbanhang.vn',
  },
]

function CustomerInfomation() {
  return (
    <div>
      <span>{GeneralSettingIcons.briefcase}</span>
      <div className="flex-auto flex flex-col gap-3">
        <div className="flex justify-between">
          <span className="text-sm font-medium">Thông tin khách hàng</span>
          <Button
            className="bg-blue-600 hover:bg-blue-500 py-2 px-4 h-7"
            size={'sm'}
          >
            Sửa
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-y-3 gap-x-0">
          {NOTIFICATIONANDSOUND_DUMB_DATA.map((infomation, index) => (
            <InfomationTag
              key={index}
              {...infomation}
            />
          ))}
          <ul className="w-full list-disc col-span-2 text-xs text-slate-500">
            <li>
              Doanh nghiệp nhập đúng thông tin và cung cấp các thông tin khác
              chính xác bằng Tiếng Việt có dấu (đối với thông tin tiếng Việt).
              Bot Bán Hàng sẽ không chịu trách nhiệm hoặc sẽ hủy bỏ hóa đơn đã
              xuất nếu có sai sót thông tin.
            </li>
            <li>
              Dữ liệu doanh nghiệp sẽ được Bot Bán Hàng sử dụng để liên lạc và
              hỗ trợ doanh nghiệp. Để yêu cầu thu hồi thông tin này, vui lòng
              gửi email tới hotro@botbanhang.vn
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CustomerInfomation
