import NavComment from './_components/NavComment'
import Conversations from './_components/conversations/Conversations'

function page() {
  return (
    <div className="flex size-full p-2 gap-3 bg-[#efedf3]">
      <NavComment />
      <Conversations />
      <section className="w-full ">chats</section>
      <section className="w-[400px] bg-red-300 flex-shrink-0">chats</section>
    </div>
  )
}

export default page
