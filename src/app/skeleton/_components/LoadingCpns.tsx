import React from 'react'

function LoadingCpns() {
  return (
    <div className=" rounded-lg flex gap-3 py-3 px-4 bg-white">
      <span className="size-5 rounded-full bg-slate-200 dark:bg-slate-100 animate-pulse"></span>
      <div className="flex-auto flex flex-col gap-3">
        <span className="flex py-0.5">
          <span className="animate-pulse rounded h-4 w-40 bg-slate-200 dark:bg-slate-100"></span>
        </span>
        <div className=" grid grid-cols-4 gap-y-3 gap-x-6">
          {new Array(6).fill(0).map((_, index) => (
            <div
              key={index}
              className="rounded-lg flex items-center p-2 gap-2 border border-slate-200 dark:border-slate-100"
            >
              <span className="animate-pulse size-8 mask is-squircle bg-slate-200 dark:bg-slate-100"></span>
              <div className="animate-pulse flex-auto flex flex-col gap-1 ">
                <span className="w-full h-4 rounded bg-slate-200 dark:bg-slate-100"></span>
                <span className="w-28 h-3 rounded bg-slate-100 dark:bg-slate-200"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LoadingCpns
//bg-gray-200 dark:bg-gray-700
