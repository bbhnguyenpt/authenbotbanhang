import { ReactNode } from 'react'

function Tooltip({
  children,
  tooltipContent,
}: {
  children: ReactNode
  tooltipContent: string
}) {
  return (
    <div className="relative group cursor-pointer">
      {/* Tooltip Trigger */}
      {children}
      {/* Tooltip Trigger */}

      {/* Tooltip */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-9 flex flex-col items-center gap-0 opacity-0 group-hover:opacity-100 transition-all">
        <span className="px-3 py-[6px] rounded-md text-white text-xs bg-black text-nowrap">
          {tooltipContent}
        </span>
        <span className="size-3 rounded-sm rotate-45 bg-black -translate-y-2"></span>
      </div>
      {/* Tooltip */}
    </div>
  )
}

export default Tooltip
