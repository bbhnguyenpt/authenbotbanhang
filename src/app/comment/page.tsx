import Chatbox from './_components/chatbox/Chatbox'
import Conversations from './_components/conversations/Conversations'
import NavPost from './_components/nav/NavPost'
import Widget from './_components/widget/Widget'

function page() {
  return (
    <div className="flex size-full p-2 gap-3 bg-gradient-post">
      <NavPost />
      <Conversations />
      <Chatbox />
      <Widget />
    </div>
  )
}

export default page
