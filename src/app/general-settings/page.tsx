import React from 'react'
import Header from './_components/Header'
import NavGeneralSetting from './_components/NavGeneralSetting'

function page() {
  return (
    <div className="size-full flex flex-col p-3 gap-0">
      <Header />
      <div className="flex-auto flex py-5 gap-3">
        <NavGeneralSetting />
      </div>
    </div>
  )
}

export default page
