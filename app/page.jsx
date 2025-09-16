import Hero from '../components/Hero'
import Company from '../components/Company'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-lightbg text-gray-900 dark:bg-darkbg dark:text-white">
      <main className="flex flex-1 items-center">
        <Hero />
      </main>
      <Company />
    </div>
  )
}

