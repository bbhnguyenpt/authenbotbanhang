/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import TypeEmailLogin from '@/app/signin/_components/TypeEmailLogin'
import TypePasswordLogin from '@/app/signin/_components/TypePasswordLogin'

const page = () => {
  const searchParams = useSearchParams()
  const [isTypingPassword, setIsTypingPassword] = useState(false)

  useEffect(() => {
    if (Boolean(searchParams.get('reset'))) {
      setIsTypingPassword(true)
    }
  }, [])

  function renderModal() {
    if (isTypingPassword) {
      return (
        <TypePasswordLogin
          setIsTypingPassword={() => setIsTypingPassword(false)}
        />
      )
    } else {
      return (
        <TypeEmailLogin setIsTypingPassword={() => setIsTypingPassword(true)} />
      )
    }
  }
  return (
    <section className="size-full center-child p-[17px]">
      {renderModal()}
    </section>
  )
}

export default page
