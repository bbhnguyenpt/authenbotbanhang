/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useState } from 'react'

import TypeEmailSignup from '@/app/signup/_components/TypeEmailSignup'
import TypePasswordSignup from '@/app/signup/_components/TypePasswordSignup'

const page = () => {
  const [isTypingPassword, setIsTypingPassword] = useState(false)

  function renderModal() {
    if (isTypingPassword) {
      return (
        <TypePasswordSignup
          setIsTypingPassword={() => setIsTypingPassword(false)}
        />
      )
    } else {
      return (
        <TypeEmailSignup
          setIsTypingPassword={() => setIsTypingPassword(true)}
        />
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
