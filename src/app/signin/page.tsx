/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useState } from "react"
import TypeEmailModal from "./_components/TypeEmailModal"
import TypePasswordModal from "./_components/TypePasswordModal"

const page = () => {
  const [isTypingPassword, setIsTypingPassword] = useState(false)

  function renderModal() {
    if (isTypingPassword) {
      return (
        <TypePasswordModal
          setIsTypingPassword={() => setIsTypingPassword(false)}
        />
      )
    } else {
      return (
        <TypeEmailModal setIsTypingPassword={() => setIsTypingPassword(true)} />
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
