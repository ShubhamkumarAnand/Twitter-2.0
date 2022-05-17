import { RefreshIcon } from '@heroicons/react/outline'
import TweetBox from './TweetBox'

function Feed() {
  return (
    <div className="col-span-7 border-x lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon className="w-8 h-8 mt-5 mr-5 transition-all duration-500 ease-out cursor-pointer text-twitter hover:rotate-180 active:scale-125" />
      </div>
      <TweetBox />
    </div>
  )
}
export default Feed
