import HeaderSkeleton from '@/app/skeleton/_components/HeaderSkeleton'
import NavSkeleton from './_components/NavSkeleton'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import LoadingCpns from './_components/LoadingCpns'

function page() {
  return (
    <div className="h-screen p-3 flex flex-col gap-0">
      <HeaderSkeleton />
      <div className="flex-auto flex py-3 gap-3">
        <NavSkeleton />
        <div className="flex-auto flex flex-col gap-2.5">
          <div className="flex justify-between items-center">
            <div className="w-full max-w-[280px] flex items-center rounded-[20px] bg-white gap-2.5 py-2 px-3">
              <MagnifyingGlassIcon className="size-5 text-slate-500" />
              <input
                type="text"
                className="focus:border-none focus:outline-none text-sm"
                placeholder="Tìm kiếm"
              />
            </div>
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
          </div>
          <LoadingCpns />
        </div>
      </div>
    </div>
  )
}

export default page
