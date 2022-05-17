import { SearchIcon } from '@heroicons/react/outline'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
function Widgets() {
  return (
    <div className="col-span-2 px-2 mt-2">
      <div className="flex items-center p-3 mt-2 space-x-2 bg-gray-200 rounded-full">
        {/* Search Bar */}
        <SearchIcon className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="flex-1 bg-transparent outline-none"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="imskanand"
        options={{ height: 1000 }}
      />
    </div>
  )
}
export default Widgets
