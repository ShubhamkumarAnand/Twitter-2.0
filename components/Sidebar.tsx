import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  HomeIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div>
      <img className="w-10 h-10" src="https://links.papareact.com/drq" alt="" />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notification" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
    </div>
  )
}
export default Sidebar
