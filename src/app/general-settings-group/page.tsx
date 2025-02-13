import React from 'react'
import Header from './_components/Header'
import NavGeneralSetting from './_components/NavGeneralSetting'
import MainSetting from './_components/main-setting/MainSetting'

function page() {
  return (
    <main className="h-screen flex flex-col p-3 gap-0 bg-test">
      <Header />
      <div className="h-dvh flex py-5 gap-3 overflow-hidden">
        <NavGeneralSetting />
        <section className="flex-auto overflow-y-auto custom-scrollbar rounded-lg">
          <MainSetting />
        </section>
      </div>
    </main>
  )
}

export default page
