import { Label } from '@/components/ui/label'
import { RadioGroupItem } from '@/components/ui/radio-group'
import TransferInfomationItem from './TransferInfomationItem'
import Image from 'next/image'
import { QrTransfer } from '@/public/dumb-data'

function TransferMethod() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <RadioGroupItem
          value="transfer"
          id="transfer"
        />
        <Label
          className="cursor-pointer"
          htmlFor="transfer"
        >
          Chuyển khoản
        </Label>
      </div>
      <div className="p-3 rounded-lg border border-slate-300 flex gap-5  bg-slate-100">
        <div className=" flex flex-col gap-2.5">
          <TransferInfomationItem
            label={'Số tài khoản thụ hưởng:'}
            value={'123123123123123'}
            includeGap={true}
          />
          <TransferInfomationItem
            label={'Tên tài khoản thụ hưởng:'}
            value={'CTCP Công nghệ Chatbot Việt Nam'}
          />
          <TransferInfomationItem
            label={'Số tiền'}
            value={'380.000'}
          />
          <div className="flex flex-col gap-0">
            <span className="text-sm leading-5 text-slate-700">
              Ngân hàng thụ hưởng:
            </span>
            <span className="text-sm leading-5 font-medium">
              Techcombank - Ngân hàng Kỹ thương Việt Nam - <br />
              Chi nhánh Hà Thành
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 rounded-lg bg-white size-full p-5 border border-slate-300">
          <span className="text-sm text-center">
            Hoặc quét mã QR bằng ứng dụng ngân hàng
          </span>
          <Image
            alt="qr transfer"
            src={QrTransfer}
            className="w-[179px] h-[176px] object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default TransferMethod
