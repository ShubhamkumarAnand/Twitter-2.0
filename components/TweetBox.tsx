import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'
import { useState } from 'react'

function TweetBox() {
  const [input, setInput] = useState<string>('')
  return (
    <div className="flex p-5 space-x-2">
      <img
        src="https://links.papareact.com/gll"
        alt=""
        className="object-cover rounded-full mt4 h-14 w-14"
      />
      <div className="flex items-center flex-1 pl-2">
        <form className="flex flex-col flex-1">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="What is Happening?"
            className="w-full h-24 text-xl outline-none placeholder:text-xl"
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter">
              <PhotographIcon className="w-5 h-5 transition-transform duration-200 ease-out cursor-pointer hover:scale-150" />
              <SearchCircleIcon className="w-5 h-5 transition-transform duration-200 ease-out cursor-pointer hover:scale-150" />
              <EmojiHappyIcon className="w-5 h-5 transition-transform duration-200 ease-out cursor-pointer hover:scale-150" />
              <CalendarIcon className="w-5 h-5 transition-transform duration-200 ease-out cursor-pointer hover:scale-150" />
              <LocationMarkerIcon className="w-5 h-5 transition-transform duration-200 ease-out cursor-pointer hover:scale-150" />
            </div>
            <button
              disabled={!input}
              className="px-5 py-2 font-bold text-white rounded-full bg-twitter disabled:bg-gray-400"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default TweetBox
