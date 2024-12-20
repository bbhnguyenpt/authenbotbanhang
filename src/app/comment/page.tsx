import NavComment from './_components/NavComment'
import Chatbox from './_components/chatbox/Chatbox'
import Conversations from './_components/conversations/Conversations'
import Widget from './_components/widget/Widget'

function page() {
  return (
    <div className="flex size-full p-2 gap-3 bg-[#efedf3]">
      <NavComment />
      <Conversations />
      <Chatbox />
      <Widget />
    </div>
  )
}

export default page
