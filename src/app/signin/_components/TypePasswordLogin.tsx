import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Logo } from '@/public/logo'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'
import Actions from '@/components/authentication-modal/Actions'
import GoToSignup from './GoToSignup'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Icons from '@/Svgs/Icons'

interface TypePasswordLoginProps {
  setIsTypingPassword: () => void
}

const TypePasswordLogin: FC<TypePasswordLoginProps> = ({
  setIsTypingPassword,
}) => {
  const searchParams = useSearchParams()
  const reset = Boolean(searchParams.get('reset'))

  return (
    <div className="modal ">
      <div className="flex items-center gap-2">
        <Image
          alt="logo bot ban hang"
          src={Logo}
          className="h-7 w-[23px] object-cover"
        />
        <h1 className="text-base font-semibold">Bot Bán Hàng</h1>
      </div>
      <div className="flex flex-col gap-1">
        <p
          className="font-bold text-2xl flex items-center gap-2 cursor-pointer"
          onClick={setIsTypingPassword}
        >
          <ArrowLeft />
          Log in
        </p>
        <p className="text-sm">Continue to Bot Bán Hàng</p>
      </div>
      {reset && (
        <p className="flex items-center gap-3 border border-green-600 bg-green-50 rounded-lg text-green-600 px-4 py-3 text-sm">
          {Icons.tick}
          <span>A link to reset your password has been emailed to you.</span>
        </p>
      )}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <p className="font-medium text-sm">Email</p>
          <Input placeholder="Enter your email" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-medium text-sm">Password</p>
          <Input
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <div className="flex flex-col gap-1">
          <Link
            href={'/forgotpassword'}
            className="font-medium text-sm text-blue-700"
          >
            Forgot password?
          </Link>
        </div>
        <Button className="text-base font-semibold w-full">Log in</Button>
      </div>
      <GoToSignup />
      <Actions />
    </div>
  )
}

export default TypePasswordLogin
