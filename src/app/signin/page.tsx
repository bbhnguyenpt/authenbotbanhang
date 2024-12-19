/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useState } from "react"
import TypeEmailLogin from "./_components/TypeEmailLogin"
import TypePasswordLogin from "./_components/TypePasswordLogin"

const page = () => {
  const [isTypingPassword, setIsTypingPassword] = useState(false)

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
    <section className="size-full center-child px-[17px]">
      {renderModal()}
    </section>
  )
}

export default page
