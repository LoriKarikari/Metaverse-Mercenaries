import { XIcon } from '@heroicons/react/outline'

export default function Banner() {
  return (
    <div className="fixed bg-[#579CE9] z-10 w-full">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="md:hidden">We announced a new product!</span>
            <span className="hidden md:inline">
              This website is not affiliated with Hearthstone and is created for educational
              purposes only!
            </span>
            <span className="block sm:ml-2 sm:inline-block">
              <a href="#" className="text-white font-bold underline">
                {' '}
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
