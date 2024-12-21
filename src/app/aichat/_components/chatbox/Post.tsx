import { formatNumber } from '@/lib/utils'
import Image from 'next/image'

import Comment, { CommentProps } from '@/app/aichat/_components/chatbox/Comment'

import { CommentProfilePicture, PostImage } from '@/public/dumb-data'
import { Logo } from '@/public/logo'

const DUMB_DATA_COMMENT: CommentProps[] = [
  {
    user_profile: CommentProfilePicture,
    user_name: 'Trần Minh Tiến',
    comment_time: '13:42 15/12/2024',
    content: 'ib',
  },
  {
    user_profile: CommentProfilePicture,
    user_name: 'Trần Minh Tiến',
    comment_time: '2 tiếng trước',
    content: 'ib',
    subComment: [
      {
        user_profile: CommentProfilePicture,
        user_name: 'Trần Minh Tiến',
        comment_time: '5 giây trước',
        content: 'ib',
      },
      {
        user_profile: CommentProfilePicture,
        user_name: 'Trần Minh Tiến',
        comment_time: '10 giây trước',
        content: 'ib',
      },
    ],
  },
]

interface PostProps {
  publisher: string
  content: string
  reaction_count: number
  comment_count: number
  share_count: number
}

function Post({ post }: { post: PostProps }) {
  return (
    <div className="w-[430px] bg-white rounded-lg flex flex-col py-2">
      <div className="px-3 flex items-center gap-3">
        <Image
          alt="profile picture"
          src={Logo}
          className="size-7 rounded-full border object-contain"
        />
        <div className="flex-auto flex flex-col gap-0">
          <p className="font-bold text-sm">Bot Bán Hàng</p>
          <span className="text-xs">
            Người đăng: <span className="font-bold">{post.publisher}</span>
          </span>
        </div>
        <div className="h-9">
          <span className="text-nowrap text-xs text-blue-700 leading-4 cursor-pointer hover:underline">
            Xem trên facebook
          </span>
        </div>
      </div>
      <div className="py-2 px-3 text-xs">
        <span className="whitespace-pre-line line-clamp-5">{post.content}</span>
        <span className="font-bold cursor-pointer hover:underline">
          Xem thêm
        </span>
      </div>
      <div className="cursor-pointer">
        <Image
          alt="post image"
          src={PostImage}
        />
        <p className="py-2 px-3 bg-slate-100 font-bold text-base">
          Tặng ngay gói 1 Tháng trị giá 500.000đ chỉ với 50.000đ
        </p>
      </div>
      <div className="px-3 py-2 text-sm flex items-center justify-between">
        <span>
          Reaction:{' '}
          <span className="font-semibold">
            {formatNumber(post.reaction_count)}
          </span>
        </span>
        <span>
          Bình luận:{' '}
          <span className="font-semibold">
            {formatNumber(post.reaction_count)}
          </span>
        </span>
        <span>
          Chia sẻ:{' '}
          <span className="font-semibold">
            {formatNumber(post.reaction_count)}
          </span>
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {DUMB_DATA_COMMENT.map((comment, index) => (
          <Comment
            comment={comment}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Post
