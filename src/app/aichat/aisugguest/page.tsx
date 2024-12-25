import Chatbox from '@/app/aichat/_components/chatbox/Chatbox'
import Conversations from '@/app/aichat/_components/conversations/Conversations'
import NavPost from '@/app/aichat/_components/nav/NavPost'
import AiWidget from '@/app/aichat/_components/widget/AiWidget'

function page() {
  return (
    <div className="flex size-full p-2 gap-3 bg-gradient-post">
      <NavPost />
      <Conversations />
      <Chatbox type="aisugguest" />
      <AiWidget />
    </div>
  )
}

export default page
