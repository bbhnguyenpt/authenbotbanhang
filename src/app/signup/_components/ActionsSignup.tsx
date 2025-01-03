import React from 'react'

import Actions from '@/components/authentication-modal/Actions'

const ActionsSignup = () => {
  return (
    <div>
      <span className="text-xs text-slate-500">
        By proceeding, you agree to the <u>Terms and Conditions</u> and{' '}
        <u>Privacy Policy</u>
      </span>
      <Actions />
    </div>
  )
}

export default ActionsSignup
