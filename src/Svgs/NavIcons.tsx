import {
  BookmarkSlashIcon,
  CalendarDaysIcon,
  ChatBubbleLeftEllipsisIcon,
  InboxIcon,
  NewspaperIcon,
  PhoneIcon,
  SquaresPlusIcon,
  TagIcon,
  UsersIcon,
} from '@heroicons/react/24/solid'
import { ReactElement } from 'react'

interface NavItem {
  icon: ReactElement
}

const NavIcons: NavItem[] = [
  {
    icon: <SquaresPlusIcon />,
  },
  {
    icon: <InboxIcon />,
  },
  {
    icon: <ChatBubbleLeftEllipsisIcon />,
  },
  {
    icon: <PhoneIcon />,
  },
  {
    icon: <CalendarDaysIcon />,
  },
  {
    icon: <TagIcon />,
  },
  {
    icon: <BookmarkSlashIcon />,
  },
  {
    icon: <UsersIcon />,
  },
  {
    icon: <NewspaperIcon />,
  },
]

export default NavIcons
