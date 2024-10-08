import Link from '@/components/Link'
import ProfileCard from '@/components/ProfileCard'

export default function Home() {
  const headingColorClass =
    'bg-gradient-to-r from-orange-400 to-yellow-500 dark:bg-gradient-to-l dark:from-purple-400 dark:to-pink-300'
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 md:my-4 md:space-y-5 md:pb-8 md:pt-6 xl:grid xl:grid-cols-3">
          <div className="md:pr-8 xl:col-span-2">
            <p className="mb-8">
              <span
                className={`bg-clip-text text-5xl font-extrabold leading-[60px] 
          tracking-tight text-transparent ${headingColorClass} md:text-7xl md:leading-[86px]`}
              >
                Welcome!{' '}
              </span>
              <span
                className={`bg-clip-text text-5xl font-extrabold leading-[60px] 
          tracking-tight md:text-7xl md:leading-[86px]`}
              >
                👋
              </span>
            </p>

            <div className="text-xl leading-8 text-gray-600 dark:text-gray-400">
              <h1 className="font-normal text-neutral-900 dark:text-neutral-200">
                I'm <span className="font-medium">Kehan</span> - I will be a{' '}
                <span className="font-medium">Software Engineer</span>{' '}
              </h1>
              <p className="mb-8 mt-4">
                I started my coding journey since 2021.
                <br />
                Now I am a master student concentrating in computer software engineering.
                <br />
                Back then I was studying computational material science.
                <br />
                I wish to spread a bit of joy through my code.
                <br />
              </p>

              <div className="flex flex-col space-y-1">
                <div className="flex items-center">
                  <span className="emoji">🛠</span>
                  <Link href="/projects" className="hover:underline">
                    <span className="ml-2">What have I built?</span>
                  </Link>
                </div>
                <div className="flex items-center">
                  <span className="emoji">📝</span>
                  <Link href="/resume" className="hover:underline">
                    <span className="ml-2">My Resume</span>
                  </Link>
                </div>
                <div className="flex items-center">
                  <span className="emoji">💫</span>
                  <Link href="/about" className="hover:underline">
                    <span className="ml-2">More about me and myself</span>
                  </Link>
                </div>
                <div>
                  <span className="emoji">📫</span>
                  <span className="ml-2">Don't hesitate to reach out to me: </span>
                  <a
                    href="mailto:kehant0614@gmail.com"
                    style={{ color: 'rgb(236, 72, 153)', cursor: 'pointer' }}
                  >
                    kehant0614@gmail.com
                  </a>
                </div>
              </div>
              <p className="my-8">Happy reading 🍻</p>
            </div>
          </div>
          <div className="hidden xl:block">
            <ProfileCard />
          </div>
        </div>
      </div>
    </>
  )
}
