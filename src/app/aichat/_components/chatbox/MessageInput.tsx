import { ChangeEvent, KeyboardEvent, useState } from 'react'

import PluginOptions from '@/app/aichat/_components/chatbox/PluginOptions'
import { Textarea } from '@/components/ui/textarea'

interface MessageInputProps {
  input_value: string
  set_input_value: (arg0: string) => void
}

function MessageInput({ input_value, set_input_value }: MessageInputProps) {
  const [show_plugins, set_show_plugins] = useState(false)

  // function handleKeyDown(event: KeyboardEvent<HTMLSpanElement>) {
  //   if (event.key === '/') {
  //     set_show_plugins(true)
  //   }
  //   if (event.key === ' ' || event.key === 'Spacebar') {
  //     set_show_plugins(false)
  //   }
  //   if (event.key === 'Backspace' || event.key === 'Delete') {
  //     // set_show_plugins(false)
  //     // console.log(input_value === '')
  //   }
  // }

  // function handleInput(event: KeyboardEvent<HTMLSpanElement>) {
  //   set_input_value(event.currentTarget.innerText)
  // }

  /**Hàm thay đổi độ cao của textarea khi xuống dòng */
  function onChangeTextarea(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.style.height = 'inherit'
    event.target.style.height = `${event.target.scrollHeight}px`
    set_input_value(event.currentTarget.value)
  }

  /**Hàm chạy khi ấn phím */
  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    /**Nhập "/" thì sẽ hiện box plugin */
    if (event.key === '/') {
      set_show_plugins(true)
    }
    /**Nhập "/" thì sẽ ẩn box plugin */
    if (event.key === ' ' || event.key === 'Spacebar') {
      set_show_plugins(false)
    }
  }

  return (
    <div className="flex-auto flex items-center relative">
      {/* <span
        className="border-none shadow-none w-full min-h-0 py-1.5 text-sm max-h-[120px] focus:outline-none overflow-x-hidden overflow-y-auto custom-scrollbar flex flex-col justify-center"
        contentEditable={'plaintext-only'}
        suppressContentEditableWarning={true}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
      ></span> */}
      <Textarea
        className="border-none shadow-none px-0 py-1.5 max-h-32 resize-none overflow-x-hidden custom-scrollbar"
        placeholder="Gửi tin nhắn đến Mike"
        value={input_value}
        rows={1}
        onChange={onChangeTextarea}
        onKeyDown={handleKeyDown}
      ></Textarea>
      {show_plugins && <PluginOptions />}
    </div>
  )
}

export default MessageInput
