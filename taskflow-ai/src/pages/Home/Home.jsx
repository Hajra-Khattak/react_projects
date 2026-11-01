import { Link } from 'react-router'

const features = [
  {
    title: 'Kanban task board',
    text: 'Organize work in To Do, Doing and Done columns, and drag cards between them.',
    icon: 'M4 6h16M4 12h16M4 18h7',
  },
  {
    title: 'Habit streaks',
    text: 'Check in every day and watch your streak grow. Small habits add up.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Progress stats',
    text: 'Simple charts show what you finished this week and where your time goes.',
    icon: 'M9 19V6l12-3v13M9 19a2 2 0 11-4 0 2 2 0 014 0zm12-3a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'AI task breakdown',
    text: 'Turn a big task into small subtasks with one click.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    title: 'Dark mode',
    text: 'Switch between light and dark themes and keep your eyes comfortable.',
    icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
  },
  {
    title: 'Works on any device',
    text: 'The layout adapts to phones, tablets and desktops.',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  },
]

const steps = [
  { number: '1', title: 'Create an account', text: 'Sign up with your email or Google in a few seconds.' },
  { number: '2', title: 'Add your tasks and habits', text: 'Write down what you need to do and what you want to repeat.' },
  { number: '3', title: 'Track your progress', text: 'Move tasks forward, check in daily and review your stats.' },
]

const columns = [
  { name: 'To Do', color: 'bg-gray-400', cards: ['Design landing page', 'Write README'] },
  { name: 'Doing', color: 'bg-blue-500', cards: ['Build login form'] },
  { name: 'Done', color: 'bg-green-500', cards: ['Set up Firebase', 'Install Tailwind'] },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium text-blue-700 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/40 rounded-full">
            Tasks and habits in one place
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Get more done with{' '}
            <span className="text-blue-600 dark:text-blue-400">TaskFlow AI</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Plan your tasks, build daily habits and let AI break big goals into small steps.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Get started free
            </Link>
            <Link
              to="/login"
              className="px-8 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Log in
            </Link>
          </div>
        </div>
      </section>

      {/* Board preview */}
      <section className="px-6 pb-20 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto -mt-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 shadow-xl p-4 md:p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {columns.map((col) => (
              <div key={col.name} className="rounded-xl bg-white dark:bg-gray-800 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2.5 h-2.5 rounded-full ${col.color}`} />
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{col.name}</h3>
                </div>
                <div className="space-y-3">
                  {col.cards.map((card) => (
                    <div
                      key={card}
                      className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-3 py-3 text-sm text-gray-700 dark:text-gray-300"
                    >
                      {card}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Everything you need to stay on track
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Simple tools that work together.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 dark:border-gray-700"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={f.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-14">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((s) => (
              <div key={s.number} className="text-center">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-blue-600 text-white text-xl font-bold flex items-center justify-center">
                  {s.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="px-6 py-20 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to organize your day?
          </h2>
          <p className="mt-4 text-blue-100">
            Create a free account and start with your first task today.
          </p>
          <Link
            to="/signup"
            className="inline-block mt-8 px-8 py-3 rounded-lg bg-white text-blue-700 font-semibold hover:bg-blue-50 transition"
          >
            Create free account
          </Link>
        </div>
      </section>

        {/* Section 1 - Hero */}
      <section className="bg-blue-100 py-24 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to My Website
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Learn, explore and build amazing things
            with React and Tailwind CSS.
          </p>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Section 2 - Features */}
      <section className="py-20 px-8 bg-gray-50 flex-grow">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">
                Easy Learning
              </h3>
              <p className="text-gray-600">
                Learn new skills with simple and easy
                learning methods.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">
                Modern Design
              </h3>
              <p className="text-gray-600">
                Create beautiful and modern websites
                using Tailwind CSS.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">
                Responsive Layout
              </h3>
              <p className="text-gray-600">
                Build websites that work perfectly
                on mobile, tablet and desktop.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}