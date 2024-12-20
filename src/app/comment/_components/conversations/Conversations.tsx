import Ava from '../ava.png'
import HeaderConversations from './HeaderConversations'
import UserConversation, { UserConversationProps } from './UserConversation'

const dumb_data: UserConversationProps[] = [
  {
    name: 'Trang Vũ',
    last_message: {
      is_my_message: true,
      last_message_time: '20 giây trước',
      message:
        'Bạn muốn mua mặt hàng vậy để chfasdjflksadjfkl skajdflkjsdaf kljas ádjfkljsdaf',
    },
    profile_picture: Ava,
    unread_messages: 4,
    green_dot: true,
  },
  {
    name: 'Trang Vũ 2 ',
    last_message: {
      is_my_message: false,
      last_message_time: '1 phút trước',
      message:
        'Bạn muốn mua mặt hàng vậy để chfasdjflksadjfkl skajdflkjsdaf kljas ádjfkljsdaf',
    },
    profile_picture: Ava,
    unread_messages: 0,
    blue_dot: true,
    green_dot: true,
  },
  {
    name: 'Trang Vũ',
    last_message: {
      is_my_message: true,
      last_message_time: '20 giây trước',
      message:
        'Bạn muốn mua mặt hàng vậy để chfasdjflksadjfkl skajdflkjsdaf kljas ádjfkljsdaf',
    },
    profile_picture: Ava,
    unread_messages: 4,
    green_dot: true,
  },
  {
    name: 'Trang Vũ 2 ',
    last_message: {
      is_my_message: false,
      last_message_time: '1 phút trước',
      message:
        'Bạn muốn mua mặt hàng vậy để chfasdjflksadjfkl skajdflkjsdaf kljas ádjfkljsdaf',
    },
    profile_picture: Ava,
    unread_messages: 0,
  },
  {
    name: 'Trang Vũ',
    last_message: {
      is_my_message: true,
      last_message_time: '20 giây trước',
      message:
        'Bạn muốn mua mặt hàng vậy để chfasdjflksadjfkl skajdflkjsdaf kljas ádjfkljsdaf',
    },
    profile_picture: Ava,
    unread_messages: 8,
    green_dot: true,
    blue_dot: true,
    red_dot: true,
  },
  {
    name: 'Trang Vũ 2 ',
    last_message: {
      is_my_message: false,
      last_message_time: '1 phút trước',
      message:
        'Bạn muốn mua mặt hàng vậy để chfasdjflksadjfkl skajdflkjsdaf kljas ádjfkljsdaf',
    },
    profile_picture: Ava,
    unread_messages: 0,
  },
]

function Conversations() {
  return (
    <section className="w-[360px] rounded-xl bg-white flex-shrink-0 py-3 px-2 flex flex-col gap-2">
      <h1 className="font-bold text-2xl leading-6 px-2">Bot Bán Hàng</h1>
      <HeaderConversations />
      <div className="flex flex-col">
        {dumb_data.map((conversation, index) => (
          <UserConversation
            {...conversation}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Conversations