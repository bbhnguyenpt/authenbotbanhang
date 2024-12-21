import { FC } from 'react'

import { Button } from '@/components/ui/button'

import Icons from '@/Svgs/Icons'

interface ThirdPartyButtonProps {
  target: 'Google' | 'Facebook' | 'Apple'
}

const ThirdPartyButton: FC<ThirdPartyButtonProps> = ({ target }) => {
  function renderIcon() {
    switch (target) {
      case 'Apple':
        return Icons.apple
      case 'Facebook':
        return Icons.facebook
      case 'Google':
        return Icons.google

      default:
        break
    }
  }

  return (
    <Button
      className="text-base font-semibold w-full bg-slate-100 border-slate-200 border"
      variant={'secondary'}
    >
      {renderIcon()}
      <span>Continue with {target}</span>
    </Button>
  )
}

export default ThirdPartyButton
