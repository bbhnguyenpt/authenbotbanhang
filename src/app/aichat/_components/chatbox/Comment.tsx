import Image, { StaticImageData } from 'next/image'

export interface CommentProps {
  /**Ảnh đại diện người bình luận */
  user_profile: StaticImageData
  /**Tên người bình luận */
  user_name: string
  /**Thời gian bình luận */
  comment_time: string
  /**Nội dung bình luận */
  content: string
  /**Mảng bình luận trả lời*/
  subComment?: Omit<CommentProps, 'subComment'>[]
}

function Comment({ comment }: { comment: CommentProps }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start px-3 gap-3">
        <Image
          alt="profile picture"
          src={comment.user_profile}
          className="size-10 rounded-full object-contain "
        />
        <div className="flex flex-col gap-0.5 w-full ">
          <div className="py-1 px-2 rounded-xl flex flex-col gap-0 bg-slate-100">
            <p className="flex items-center">
              <span className="text-sm font-bold flex-auto cursor-pointer hover:underline">
                {comment.user_name}
              </span>
              <span className="text-xs text-slate-700">
                {comment.comment_time}
              </span>
            </p>
            <span className="text-sm">{comment.content}</span>
          </div>
          <div className="text-sm flex items-center gap-5">
            <span className="hover:underline cursor-pointer">Trả lời</span>
            <span className="hover:underline cursor-pointer">Ẩn bình luận</span>
          </div>
        </div>
      </div>
      {comment.subComment?.map((sub_comment, index) => (
        <div
          className="flex items-start px-3 gap-3 ml-12"
          key={index}
        >
          <Image
            alt="profile picture"
            src={sub_comment.user_profile}
            className="size-10 rounded-full object-contain "
          />
          <div className="flex flex-col gap-0.5 w-full ">
            <div className="py-1 px-2 rounded-xl flex flex-col gap-0 bg-slate-100">
              <p className="flex items-center">
                <span className="text-sm font-bold flex-auto cursor-pointer hover:underline">
                  {sub_comment.user_name}
                </span>
                <span className="text-xs text-slate-700">
                  {sub_comment.comment_time}
                </span>
              </p>
              <span className="text-sm">{sub_comment.content}</span>
            </div>
            <div className="text-sm flex items-center gap-5">
              <span className="hover:underline cursor-pointer">Trả lời</span>
              <span className="hover:underline cursor-pointer">
                Ẩn bình luận
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Comment
