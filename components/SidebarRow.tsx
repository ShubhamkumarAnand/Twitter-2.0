import { SVGProps } from 'react'

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: String
}

function SidebarRow({ Icon, title }: Props) {
  return (
    <div className="flex items-center px-4 py-3 space-x-2 transition-all duration-200 rounded-full cursor-pointer group max-w-fit hover:bg-gray-100">
      <Icon className="w-6 h-6" />
      <p className="hidden text-base font-light group-hover:text-twitter md:inline-flex lg:text-xl">
        {title}
      </p>
    </div>
  )
}
export default SidebarRow
