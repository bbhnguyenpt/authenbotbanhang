/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useState } from "react"
import TypePasswordModal from "./_components/TypePasswordModal"
import TypeEmailModal from "./_components/TypeEmailModal"

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
  return <section className="size-full center-child">{renderModal()}</section>
}

export default page
