
import { Link } from "react-router";

// Simple reusable icon component
function Icon({ children, size = 22, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

const values = [
  {
    number: "01",
    title: "Stay Organized",
    description:
      "Bring your tasks, daily habits and personal goals together in one simple workspace.",
    icon: "organize",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    number: "02",
    title: "Build Consistency",
    description:
      "Create meaningful routines, track your streaks and make small improvements every day.",
    icon: "habit",
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    number: "03",
    title: "Grow Smarter",
    description:
      "Use AI-powered planning to break big ambitions into smaller, achievable steps.",
    icon: "ai",
    color: "bg-violet-500/10 text-violet-500",
  },
  {
    number: "04",
    title: "Celebrate Progress",
    description:
      "Understand your progress, recognize your achievements and keep moving forward.",
    icon: "progress",
    color: "bg-pink-500/10 text-pink-500",
  },
];

const features = [
  {
    title: "Smart Task Management",
    description: "Plan, organize and manage your daily tasks with ease.",
    icon: "✓",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Daily Habit Tracking",
    description: "Build better routines and keep your daily streaks alive.",
    icon: "🔥",
    color: "from-orange-500 to-pink-500",
  },
  {
    title: "AI Goal Planner",
    description: "Turn your big goals into simple and actionable plans.",
    icon: "✦",
    color: "from-violet-500 to-indigo-500",
  },
  {
    title: "Progress Analytics",
    description: "See your growth and understand your productivity patterns.",
    icon: "↗",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function About() {
  return (
    <main className="overflow-hidden bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">

      {/* ================= HERO ================= */}

      <section className="relative px-5 py-20 sm:py-28 lg:px-8">

        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-violet-700 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-300">
              <span className="text-base">✦</span>
              Get to know us
            </span>

            <h1 className="mt-7 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              More than just
              <span className="block bg-gradient-to-r from-violet-600 via-blue-600 to-pink-500 bg-clip-text text-transparent">
                a task manager.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
              TaskFlow AI is your personal productivity space.
              We bring tasks, habits and goals together to help
              you create better routines and make every day count.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-violet-500/20 transition duration-300 hover:-translate-y-1"
              >
                Start your journey
                <span>→</span>
              </Link>

              <a
                href="#our-mission"
                className="rounded-xl border border-gray-300 px-7 py-4 font-bold transition duration-300 hover:border-violet-500 hover:text-violet-600 dark:border-gray-700 dark:hover:text-violet-400"
              >
                Our mission
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span>✓ Simple planning</span>
              <span>✓ Better habits</span>
              <span>✓ Smarter goals</span>
            </div>
          </div>

          {/* Hero mascot */}

          <div className="relative flex min-h-[380px] items-center justify-center">

            <div className="absolute h-72 w-72 rounded-full bg-violet-500/15 blur-3xl sm:h-96 sm:w-96" />

            <div className="absolute h-72 w-72 rounded-full border border-violet-300/40 dark:border-violet-500/30 sm:h-96 sm:w-96" />

            <img
              src="/images/mascots/laptop-coder-boy.png"
              alt="TaskFlow AI mascot"
              className="relative z-10 w-70 object-contain drop-shadow-xl transition duration-500 hover:scale-105 sm:w-96"
            />

            <div className="absolute left-0 top-10 rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-xl backdrop-blur-xl dark:border-gray-700 dark:bg-gray-900/90">
              <p className="text-xs text-gray-500">Your daily reminder</p>
              <p className="mt-1 font-bold">Keep growing! ✨</p>
            </div>

            <div className="absolute bottom-8 right-0 rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-xl backdrop-blur-xl dark:border-gray-700 dark:bg-gray-900/90">
              <p className="text-xs text-gray-500">Your next goal</p>
              <p className="mt-1 font-bold text-violet-600 dark:text-violet-400">
                Make progress 🎯
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MISSION ================= */}

      <section
        id="our-mission"
        className="bg-gray-50 px-5 py-24 dark:bg-gray-900/50 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div className="relative mx-auto max-w-sm">
            <div className="absolute inset-5 rounded-full bg-pink-500/10 blur-3xl" />

            <img
              src="/images/mascots/purple-headphone-girl.png"
              alt="Cute mascot holding a book"
              className="relative w-full object-contain"
            />

            <div className="absolute bottom-8 left-0 rounded-2xl bg-white px-5 py-3 shadow-xl dark:bg-gray-800">
              <p className="font-bold text-violet-600 dark:text-violet-400">
                Small steps matter! 💜
              </p>
            </div>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              Why TaskFlow AI?
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              Productivity should feel
              <span className="text-violet-600 dark:text-violet-400">
                {" "}simple and enjoyable.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
              Sometimes managing everything in life can feel
              overwhelming. Tasks pile up, habits become difficult
              to maintain and big goals seem far away.
            </p>

            <p className="mt-4 leading-8 text-gray-600 dark:text-gray-400">
              That's why TaskFlow AI brings your productivity tools
              into one organized space. Instead of feeling overwhelmed,
              you can focus on one step at a time and celebrate
              your progress along the way.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-violet-100 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
                <h3 className="text-2xl font-black text-violet-600 dark:text-violet-400">
                  One
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Organized workspace
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
                <h3 className="text-2xl font-black text-blue-600 dark:text-blue-400">
                  Every day
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  A chance to improve
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= OUR VALUES ================= */}

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              What we believe in
            </span>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Our mission & vision
            </h2>

            <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
              We believe that meaningful progress comes from
              small actions, consistent habits and clear goals.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((item) => (
              <div
                key={item.number}
                className="group rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/5 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-violet-800"
              >
                <div className="flex items-center justify-between">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${item.color}`}>
                    {item.icon === "organize" && "▤"}
                    {item.icon === "habit" && "🔥"}
                    {item.icon === "ai" && "✦"}
                    {item.icon === "progress" && "↗"}
                  </span>

                  <span className="text-sm font-bold text-gray-300 dark:text-gray-700">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}

      <section className="bg-gray-50 px-5 py-24 dark:bg-gray-900/50 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                Everything you need
              </span>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                One workspace.
                <span className="block text-violet-600 dark:text-violet-400">
                  Endless possibilities.
                </span>
              </h2>
            </div>

            <p className="max-w-md leading-7 text-gray-600 dark:text-gray-400">
              Explore the tools designed to make your everyday
              productivity journey easier.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-2xl font-black text-white shadow-lg`}>
                  {feature.icon}
                </div>

                <h3 className="mt-7 text-lg font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PRODUCTIVITY PHILOSOPHY ================= */}

      <section className="relative overflow-hidden px-5 py-24 lg:px-8">

        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <span className="inline-flex rounded-full bg-pink-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-pink-600 dark:text-pink-400">
              A little motivation
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
              Don't chase perfection.
              <span className="block text-pink-500">
                Celebrate progress.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-gray-600 dark:text-gray-400">
              You don't need to accomplish everything in one day.
              Start with one task, build one habit and take one
              step toward your goal. Every little win counts.
            </p>

            <Link
              to="/signup"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 px-7 py-4 font-bold text-white shadow-lg shadow-pink-500/20 transition hover:-translate-y-1"
            >
              Make your first move
              <span>→</span>
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-10 rounded-full bg-pink-500/15 blur-3xl" />

            <img
              src="/images/mascots/sporty-blue-girl.png"
              alt="TaskFlow AI mascot celebrating progress"
              className="relative 4/5 mx-auto w-4/5 object-contain"
            />

            <div className="absolute text-center right-26 -top-13 rounded-2xl bg-white p-4 shadow-xl dark:bg-gray-900">
              <span className="text-2xl text-center">⭐⭐⭐</span>
              <p className="mt-1 text-sm font-bold">You're doing great!</p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="px-5 pb-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 px-6 py-16 text-center text-white sm:px-12 sm:py-20">

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />
          <div className="absolute -bottom-28 -right-10 h-80 w-80 rounded-full border-[40px] border-white/10" />

          <div className="relative z-10 mx-auto max-w-3xl">

            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-widest">
              <span>✦</span>
              Your journey starts here
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Ready to make your
              <span className="block text-violet-200">
                days more meaningful?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-white/80">
              Organize your tasks, build better habits and
              turn your goals into achievements with TaskFlow AI.
            </p>

            <Link
              to="/signup"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-violet-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-violet-50"
            >
              Get started for free
              <span>→</span>
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}
