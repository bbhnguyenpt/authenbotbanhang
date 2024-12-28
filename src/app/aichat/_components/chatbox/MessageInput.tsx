import { KeyboardEvent, useState } from 'react'

import PluginOptions from '@/app/aichat/_components/chatbox/PluginOptions'

interface MessageInputProps {
  input_value: string
  set_input_value: (arg0: string) => void
}

function MessageInput({ input_value, set_input_value }: MessageInputProps) {
  const [show_plugins, set_show_plugins] = useState(false)

  function handleKeyDown(event: KeyboardEvent<HTMLSpanElement>) {
    if (event.key === '/') {
      set_show_plugins(true)
    }
    if (event.key === ' ' || event.key === 'Spacebar') {
      set_show_plugins(false)
    }
    if (event.key === 'Backspace' || event.key === 'Delete') {
      // set_show_plugins(false)
      console.log(input_value === '')
    }
  }

  function handleInput(event: KeyboardEvent<HTMLSpanElement>) {
    console.log(event.currentTarget.innerText.length)
    set_input_value(event.currentTarget.innerText)
  }

  return (
    <div className="flex-auto flex items-center relative">
      <span
        className="border-none shadow-none w-full min-h-0 py-1.5 text-sm max-h-[120px] focus:outline-none overflow-x-hidden overflow-y-auto custom-scrollbar flex flex-col justify-center"
        contentEditable
        suppressContentEditableWarning={true}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
      ></span>
      {show_plugins && <PluginOptions />}
    </div>
  )
}

export default MessageInput
