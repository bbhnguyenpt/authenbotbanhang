import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import React from 'react'

function BillInfomation() {
  return (
    <div className="flex gap-2.5 text-sm ">
      <div className="flex-1 py-3 flex flex-col gap-2.5">
        <span>
          <b>Thông tin gói</b>
        </span>
        <span>
          Gói nâng cấp:
          <b> Pro</b>
        </span>
        <span>
          Thời gian:
          <b> 1 Tháng</b>
        </span>
        <span>
          Giá:
          <b> 480.000đ</b>
        </span>
      </div>
      <div className="flex-1 py-3 flex flex-col gap-2.5">
        <span>
          <b>Thông tin thanh toán</b>
        </span>
        <RadioGroup
          defaultValue="without-bill"
          className="flex gap-5"
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem
              value="without-bill"
              id="without-bill"
            />
            <Label
              className="cursor-pointer"
              htmlFor="without-bill"
            >
              Không xuất hoá đơn
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem
              value="with-bill"
              id="with-bill"
            />
            <Label
              className="cursor-pointer"
              htmlFor="with-bill"
            >
              Xuất hoá đơn
            </Label>
          </div>
        </RadioGroup>
        <span>
          Tổng tiền:
          <b> 480.000đ</b>
        </span>
        <div className="flex flex-col gap-1 items-start w-[278px]">
          <span>Mã giảm giá, khuyến mại</span>
          <Input
            placeholder="Nhập mã giảm giá, khuyến mại"
            className="h-11"
          />
        </div>
        <span>
          Số tiền thanh toán:
          <b> 480.000đ</b>
        </span>
      </div>
    </div>
  )
}

export default BillInfomation
