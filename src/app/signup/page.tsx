/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useState } from "react"
import TypeEmailSignup from "./_components/TypeEmailSignup"
import TypePasswordSignup from "./_components/TypePasswordSignup"

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
    <section className="size-full center-child px-[17px]">
      {renderModal()}
    </section>
  )
}

export default page
