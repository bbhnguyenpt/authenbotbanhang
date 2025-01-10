import React from 'react'

function LoadingCpns() {
  return (
    <div className="animate-pulse rounded-lg flex gap-3 py-3 px-4 bg-white">
      <span className="size-5 rounded-full bg-gray-200 dark:bg-gray-100"></span>
      <div className="flex-auto flex flex-col gap-3">
        <span className="my-0.5 w-40 h-4 rounded bg-gray-200 dark:bg-gray-100"></span>
        <div className="grid grid-cols-4 gap-3">
          {new Array(6).fill(0).map((_, index) => (
            <div
              key={index}
              className="rounded-lg flex items-center p-2 gap-2 border border-slate-200 dark:border-slate-100"
            >
              <span className="size-8 rounded-2xl bg-gray-200 dark:bg-gray-100"></span>
              <div className="flex-auto flex flex-col gap-1">
                <span className="w-full h-4 rounded bg-gray-200 dark:bg-gray-100"></span>
                <span className="w-28 h-4 rounded bg-gray-100 dark:bg-gray-200"></span>
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
