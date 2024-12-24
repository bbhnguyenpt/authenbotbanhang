import { Textarea } from '@/components/ui/textarea'
import { ChangeEvent, KeyboardEvent, useState } from 'react'
import PluginOptions from './PluginOptions'

interface MessageInputProps {
  input_value: string
  set_input_value: (arg0: string) => void
}

function MessageInput({ input_value, set_input_value }: MessageInputProps) {
  const [show_plugins, set_show_plugins] = useState(false)
  function handleChangeInput(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.style.height = 'inherit'
    event.target.style.height = `${event.target.scrollHeight}px`
    set_input_value(event.currentTarget.value)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === '/') {
      set_show_plugins(true)
    }
    if (event.key === ' ' || event.key === 'Spacebar') {
      set_show_plugins(false)
    }
  }

  return (
    <div className="flex-auto">
      <Textarea
        placeholder="Bình luận dưới tên Bot Bán Hàng"
        className="border-none shadow-none resize-none py-[6px] max-h-32 custom-scrollbar"
        value={input_value}
        rows={1}
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
      />
      {show_plugins && <PluginOptions />}
    </div>
  )
}

export default MessageInput
