import React from 'react'
import NavPost from '../_components/nav/NavPost'
import Conversations from '../_components/conversations/Conversations'
import Chatbox from '../_components/chatbox/Chatbox'
import Widget from '../_components/widget/Widget'

function page() {
  return (
    <div className="flex size-full p-2 gap-3 bg-gradient-post">
      <NavPost />
      <Conversations />
      <Chatbox type="post" />
      <Widget />
    </div>
  )
}

export default page
