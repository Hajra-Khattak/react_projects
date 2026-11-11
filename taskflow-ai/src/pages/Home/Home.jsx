import { Link } from 'react-router'
import { useContext, useState } from "react";
// import { ThemeContext } from "../../context/ThemeContext";
import { useAuth } from '../../context/AuthContext'

import "./Home.css";

// ================= ICON COMPONENT =================

const iconPaths = {
  home: "M3 10.5 12 3l9 7.5M5 9v11h14V9M9 20v-6h6v6",
  check: "m5 12 4 4L19 6",
  arrow: "M5 12h14m-7-7 7 7-7 7",
  plus: "M12 5v14m-7-7h14",
  calendar: "M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2z",
  chart: "M3 3v18h18M8 16v-5m5 5V6m5 10V9",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2",
  target: "M12 2v4m0 12v4M2 12h4m12 0h4M12 12l5-5m-5 5-5 5",
  sparkles: "m12 3 2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2L12 3z",
  book: "M4 5.5A2.5 2.5 0 0 1 6.5 3H20v18H6.5A2.5 2.5 0 0 1 4 18.5zM4 17h16",
  flame: "M12 22c5 0 8-3.5 8-8 0-3-2-5-3-7-1 3-3 4-3 4 0-5-3-8-5-10 0 5-6 8-6 14 0 4 3 7 9 7z",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "m18 6-12 12M6 6l12 12",
  moon: "M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13z",
  sun: "M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4m0-12.8L17 7M7 17l-1.4 1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
  bolt: "m13 2-3 9h7L9 22l2-9H4l9-11z",
  trophy: "M8 21h8m-4-4v4M7 4h10v6a5 5 0 0 1-10 0zM7 7H4v2a4 4 0 0 0 4 4m9-6h3v2a4 4 0 0 1-4 4",
  heart: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z",
};

function Icon({ name, size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={iconPaths[name] || iconPaths.sparkles} />
    </svg>
  );
}

// ================= ANIME MASCOT =================

// Original decorative anime-inspired cat mascot.
// Each section can use a different color variation.

// function AnimeMascot({
//   variant = "purple",
//   className = "",
//   pose = "normal",
// }) {
//   const colors = {
//     purple: {
//       hair: "#8B5CF6",
//       dark: "#4C1D95",
//       clothes: "#6D28D9",
//       eye: "#A78BFA",
//       accessory: "#F0ABFC",
//     },
//     blue: {
//       hair: "#60A5FA",
//       dark: "#1E40AF",
//       clothes: "#2563EB",
//       eye: "#38BDF8",
//       accessory: "#BAE6FD",
//     },
//     pink: {
//       hair: "#F472B6",
//       dark: "#9D174D",
//       clothes: "#DB2777",
//       eye: "#F9A8D4",
//       accessory: "#FDE68A",
//     },
//     orange: {
//       hair: "#FB923C",
//       dark: "#9A3412",
//       clothes: "#EA580C",
//       eye: "#FDBA74",
//       accessory: "#FDE68A",
//     },
//     green: {
//       hair: "#34D399",
//       dark: "#065F46",
//       clothes: "#059669",
//       eye: "#6EE7B7",
//       accessory: "#A7F3D0",
//     },
//   };

//   const c = colors[variant] || colors.purple;

//   return (
//     <svg
//       viewBox="0 0 260 320"
//       className={className}
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       role="img"
//       aria-label="Cute original anime-inspired cat character"
//     >
//       {/* Decorative shadow */}
//       <ellipse cx="130" cy="303" rx="75" ry="9" fill="currentColor" opacity=".1" />

//       {/* Hair and cat ears */}
//       <path d="M62 110 40 22 105 59 130 48 155 59 220 22 198 110Z" fill={c.dark} />
//       <path d="m53 45 35 26-22 12Z" fill={c.accessory} />
//       <path d="m207 45-35 26 22 12Z" fill={c.accessory} />

//       {/* Body */}
//       <path d="M58 296c2-69 25-105 72-105s70 36 72 105Z" fill={c.clothes} />
//       <path d="M99 202c7 25 19 36 31 36s24-11 31-36" fill={c.accessory} opacity=".8" />

//       {/* Neck */}
//       <path d="M109 174h42v38h-42z" fill="#F6C5A9" />

//       {/* Face */}
//       <path d="M74 105c0-45 23-73 56-73s56 28 56 73v39c0 43-24 68-56 68s-56-25-56-68z" fill="#FFD8C2" />

//       {/* Hair fringe */}
//       <path d="M72 118c-8-49 14-94 57-94 42 0 65 33 58 88-15-12-24-28-30-46-15 24-42 39-85 52Z" fill={c.hair} />
//       <path d="M74 112c12-17 23-34 29-53 9 21 23 35 41 44-4-17-2-34 4-49 14 22 27 37 45 49" fill={c.hair} />

//       {/* Eyes */}
//       <ellipse cx="105" cy="135" rx="9" ry="13" fill={c.dark} />
//       <ellipse cx="155" cy="135" rx="9" ry="13" fill={c.dark} />
//       <circle cx="108" cy="131" r="3" fill="white" />
//       <circle cx="158" cy="131" r="3" fill="white" />
//       <path d="M92 116q13-11 25 0M143 116q13-11 25 0" stroke={c.dark} strokeWidth="4" strokeLinecap="round" />

//       {/* Blush */}
//       <ellipse cx="89" cy="156" rx="11" ry="5" fill="#F48B9E" opacity=".5" />
//       <ellipse cx="171" cy="156" rx="11" ry="5" fill="#F48B9E" opacity=".5" />

//       {/* Mouth */}
//       {pose === "happy" ? (
//         <path d="M119 161q11 15 22 0" stroke="#A34B57" strokeWidth="3" strokeLinecap="round" />
//       ) : (
//         <path d="M122 161q8 8 16 0" stroke="#A34B57" strokeWidth="2.5" strokeLinecap="round" />
//       )}

//       {/* Hair side locks */}
//       <path d="M74 99q-19 44-3 100l21-24-3-65M186 99q19 44 3 100l-21-24 3-65" fill={c.hair} />

//       {/* Hair decoration */}
//       <circle cx="187" cy="92" r="11" fill={c.accessory} />
//       <circle cx="187" cy="92" r="5" fill="white" opacity=".8" />

//       {/* Small hands */}
//       <ellipse cx="62" cy="250" rx="13" ry="18" fill="#FFD8C2" />
//       <ellipse cx="198" cy="250" rx="13" ry="18" fill="#FFD8C2" />

//       {/* Outfit detail */}
//       <path d="m114 238 16 15 16-15" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity=".8" />
//       <path d="M130 254v30" stroke="white" strokeWidth="2" opacity=".6" />

//       {/* Star accessory */}
//       <path d="m211 191 4 9 9 4-9 4-4 9-4-9-9-4 9-4z" fill={c.accessory} />

//     </svg>
//   );
// }

// ================= REUSABLE SECTION TITLE =================

function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={`mb-12 ${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-violet-700 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-300">
        <Icon name="sparkles" size={14} />
        {eyebrow}
      </span>

      <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}

// ================= DATA =================

const stats = [
  { title: "Total tasks", value: "24", detail: "Across your workspace", icon: "calendar", color: "blue" },
  { title: "Completed", value: "18", detail: "Tasks finished", icon: "check", color: "green" },
  { title: "In progress", value: "04", detail: "Keep moving forward", icon: "clock", color: "orange" },
  { title: "Productivity", value: "86%", detail: "Your weekly progress", icon: "chart", color: "purple" },
];

const taskColumns = [
  {
    title: "To Do",
    count: "03",
    color: "blue",
    tasks: [
      { title: "Design landing page", category: "Design", date: "Today" },
      { title: "Read React documentation", category: "Learning", date: "Tomorrow" },
      { title: "Plan weekly goals", category: "Personal", date: "Friday" },
    ],
  },
  {
    title: "Doing",
    count: "02",
    color: "orange",
    tasks: [
      { title: "Build dashboard UI", category: "Development", date: "Today" },
      { title: "Create habit tracker", category: "Development", date: "Today" },
    ],
  },
  {
    title: "Done",
    count: "07",
    color: "green",
    tasks: [
      { title: "Create authentication", category: "Development", date: "Done" },
      { title: "Setup project structure", category: "Setup", date: "Done" },
      { title: "Create navbar", category: "Design", date: "Done" },
    ],
  },
];

const habits = [
  { name: "Reading Book", current: 12, best: 18, progress: 75, color: "orange" },
  { name: "Code for 1 hour", current: 8, best: 14, progress: 60, color: "blue" },
  { name: "Anime Time", current: 5, best: 9, progress: 45, color: "pink" },
];

const features = [
  {
    title: "Drag-and-drop task board",
    description: "Move tasks between To Do, Doing and Done. Your order and status are saved instantly.",
    icon: "calendar",
    color: "blue",
  },
  {
    title: "Habit streaks and weekly goals",
    description: "Check in every day, watch your streak grow and hit your weekly target for each habit.",
    icon: "flame",
    color: "orange",
  },
  {
    title: "AI task breakdown",
    description: "Turn a big task into small, ordered subtasks with one click, then add the ones you like.",
    icon: "sparkles",
    color: "purple",
  },
  {
    title: "Stats and charts",
    description: "See what you finished each day and how your tasks are spread across your board.",
    icon: "chart",
    color: "green",
  },
  {
    title: "Yearly activity heatmap",
    description: "A GitHub-style calendar shows every day you completed a task or a habit.",
    icon: "target",
    color: "pink",
  },
  {
    title: "Dark mode, on every device",
    description: "A clean layout that adapts from phone to desktop, in light or dark.",
    icon: "moon",
    color: "indigo",
  },
];

export default function Home() {
  const { user } = useAuth();
  const ctaTo = user ? "/dashboard" : "/signup";

  const colorStyles = {
    blue: "bg-blue-500/10 text-blue-500",
    green: "bg-emerald-500/10 text-emerald-500",
    orange: "bg-orange-500/10 text-orange-500",
    purple: "bg-violet-500/10 text-violet-500",
    pink: "bg-pink-500/10 text-pink-500",
    indigo: "bg-indigo-500/10 text-indigo-500",
  };

  const taskColors = {
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    green: "bg-emerald-500",
  };

  return (
    <>
      <div className="overflow-x-clip bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">




        {/* ================= HERO ================= */}

        <section
          id="home"
          className="scroll-mt-24 hero-section relative px-5 py-20 sm:py-28 lg:px-8"
        >

          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

            {/* Hero text */}
            <div className="relative z-20 hero-enter">

              <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold text-violet-700 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-300">
                <Icon name="sparkles" size={15} />
                YOUR PERSONAL PRODUCTIVITY WORLD
                <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-white">NEW</span>
              </span>

              <h1 className="mt-7 text-5xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
                Make every day
                <span className="mt-2 block bg-gradient-to-r from-violet-600 via-blue-600 to-pink-500 bg-clip-text text-transparent">
                  count for something.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
                Organize your tasks, build meaningful habits and
                turn your biggest goals into everyday achievements.
                Your productivity journey starts here.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <Link
                  to={ctaTo}
                  className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-violet-500/25 transition duration-300 hover:-translate-y-1 hover:shadow-violet-500/40"
                >
                  {user ? "Open dashboard" : "Get started free"}
                  <Icon name="arrow" className="transition group-hover:translate-x-1" />
                </Link>

                <a
                  href="#features"
                  className="inline-flex items-center gap-3 rounded-xl border border-gray-300 px-7 py-4 font-bold transition hover:border-violet-500 hover:bg-violet-50 dark:border-gray-700 dark:hover:bg-gray-900"
                >
                  Explore features
                </a>

              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500 dark:text-gray-400">
                {["Easy to use", "Smart planning", "Track your growth"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Icon name="check" size={16} className="text-emerald-500" />
                    {item}
                  </span>
                ))}
              </div>

            </div>

            {/* Hero anime character */}
            <div className="relative mx-auto flex min-h-[420px] w-full max-w-xl items-center justify-center lg:min-h-[520px]">

              <div className="hero-orbit absolute h-[340px] w-[340px] rounded-full border border-violet-300/50 dark:border-violet-500/30 sm:h-[430px] sm:w-[430px]" />
              <div className="absolute h-[280px] w-[280px] rounded-full bg-violet-500/15 blur-3xl sm:h-[380px] sm:w-[380px]" />

              <div className="mascot-main relative z-10 ">
                {/* <AnimeMascot variant="purple" pose="happy" className="w-full drop-shadow-2xl" /> */}
                <img
                  loading="lazy" decoding="async"
                  src="/images/mascots/black-cat-hoodie-boy11.png"
                  alt="TaskFlow AI mascot"
                  className="w-64 object-contain drop-shadow-2xl sm:w-80 lg:w-96"
                />
              </div>

              {/* Floating task card */}
              <div className="floating-card absolute left-0 top-12 z-20 rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-xl backdrop-blur-xl dark:border-gray-700 dark:bg-gray-900/90 sm:left-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-500">
                    <Icon name="check" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Task completed</p>
                    <p className="text-sm font-bold">Daily goals</p>
                  </div>
                </div>
              </div>

              {/* Floating streak card */}
              <div className="floating-card floating-delay absolute bottom-14 right-0 z-20 rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-xl backdrop-blur-xl dark:border-gray-700 dark:bg-gray-900/90 sm:right-0">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-orange-500/10 p-2 text-orange-500">
                    <Icon name="flame" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Current streak</p>
                    <p className="text-lg font-black">12 days</p>
                  </div>
                </div>
              </div>

              {/* Floating decorative badge */}
              <div className="hidden sm:flex floating-slow absolute right-6 top-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-violet-600 text-white shadow-xl">
                <Icon name="heart" size={26} />
              </div>

              <div className="hidden sm:block floating-card absolute bottom-4 left-8 rounded-xl border border-violet-200 bg-violet-50/90 px-4 py-3 text-xs font-bold text-violet-700 shadow-lg dark:border-violet-800 dark:bg-violet-950/80 dark:text-violet-300">
                Your next level awaits!
              </div>

            </div>
          </div>
        </section>


        {/* ================= TASKFLOW OVERVIEW ================= */}

        <section id="overview" className="scroll-mt-24 relative px-5 py-20 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <SectionHeading
              eyebrow="Your productivity at a glance"
              title="TASKFLOW OVERVIEW"
              description="Everything important in one place. See your activity, track your progress and celebrate your little wins."
              center
            />

            <div className="overview-panel relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-5 shadow-xl shadow-violet-500/5 dark:border-gray-800 dark:bg-gray-900 sm:p-8">

              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-5 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <span className="text-xs font-bold tracking-widest text-gray-500">
                  DASHBOARD PREVIEW · SAMPLE DATA
                </span>

                <span className="rounded-lg bg-emerald-500/10 px-3 py-2 text-xs font-bold text-emerald-500">
                  ● You're on track
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 py-7">
                <div>
                  <h3 className="text-2xl font-black">Welcome to your workspace!</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Here's what's happening with your productivity.
                  </p>
                </div>

                <div className="rounded-xl bg-violet-100 px-4 py-2 text-sm font-bold text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                  This week
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.title}
                    className="stat-card rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {stat.title}
                      </span>

                      <span className={`rounded-xl p-2.5 ${colorStyles[stat.color]}`}>
                        <Icon name={stat.icon} />
                      </span>
                    </div>

                    <h3 className="mt-5 text-3xl font-black">{stat.value}</h3>

                    <p className="mt-2 text-xs text-gray-500">
                      {stat.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
                <div className="flex justify-between gap-4">
                  <div>
                    <h4 className="font-bold">Weekly productivity</h4>
                    <p className="mt-1 text-xs text-gray-500">
                      Your progress toward this week's target.
                    </p>
                  </div>
                  <span className="font-black text-violet-600 dark:text-violet-400">75%</span>
                </div>

                <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                  <div className="progress-fill h-full w-3/4 rounded-full bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-400" />
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-20 -right-2 hidden w-25 opacity-90 lg:block">
                {/* <AnimeMascot variant="blue" className="w-full" /> */}
                {/* <img src="images/mascots/hero-blue-hoodie-boy.png"  alt="Anime mascot"
  className="w-64 h-64 object-contain
              animate-pulse" /> */}
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/mascots/laptop-coder-boy.png" alt="Anime mascot"
                  className="w-70 h-65 object-contain
             " />
              </div>

            </div>
          </div>
        </section>


        {/* ================= TASK BOARD ================= */}

        <section id="tasks" className="scroll-mt-24 bg-gray-50 px-5 py-24 dark:bg-gray-900/50 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_2fr]">

              <div>
                <SectionHeading
                  eyebrow="Stay organized"
                  title="Your tasks. Your progress."
                  description="Keep everything moving with a simple visual task board. Know exactly what needs your attention."
                />

                <div className="relative mx-auto max-w-[200px] lg:mx-0">
                  {/* <AnimeMascot variant="blue" pose="happy" className="w-full mascot-side" /> */}
                  <img loading="lazy" decoding="async" src="/images/mascots/sleepy-bookworm-girl.png" alt="" className="w-full" />

                  <span className="floating-card absolute right-0 top-6 rounded-xl bg-blue-500 px-3 py-2 text-xs font-bold text-white shadow-lg">
                    Keep going!
                  </span>
                </div>

                <Link
                  to="/signup"
                  className="mt-7 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-700"
                >
                  Manage tasks
                  <Icon name="arrow" size={18} />
                </Link>
              </div>

              <div className="grid gap-4 md:grid-cols-3">

                {taskColumns.map((column) => (
                  <div
                    key={column.title}
                    className="task-column rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950"
                  >
                    <div className="mb-5 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`h-2.5 w-2.5 rounded-full ${taskColors[column.color]}`} />
                        <h3 className="text-sm font-bold">{column.title}</h3>
                      </div>
                      <span className="rounded-lg bg-gray-100 px-2 py-1 text-xs font-bold dark:bg-gray-800">
                        {column.count}
                      </span>
                    </div>

                    <div className="space-y-3">
                      {column.tasks.map((task) => (
                        <div
                          key={task.title}
                          className="task-card rounded-xl border border-gray-100 bg-gray-50 p-3 transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-sm font-semibold leading-5">
                              {task.title}
                            </h4>
                            {column.color === "green" && (
                              <Icon name="check" size={16} className="shrink-0 text-emerald-500" />
                            )}
                          </div>

                          <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                            <span className="rounded-md bg-violet-500/10 px-2 py-1 text-[10px] font-bold text-violet-600 dark:text-violet-400">
                              {task.category}
                            </span>
                            <span className="text-[10px] text-gray-500">
                              {task.date}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>


        {/* ================= STREAKS & HABITS ================= */}

        <section id="habits" className="scroll-mt-24 relative overflow-hidden px-5 py-24 lg:px-8">

          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">

            <SectionHeading
              eyebrow="Build consistency"
              title="Little habits. Legendary progress."
              description="Your daily habits shape your future. Keep your streaks alive and celebrate every step forward."
            />

            <div className="grid items-stretch gap-6 lg:grid-cols-3">

              {/* Current streak */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-rose-500 to-pink-600 p-8 text-white shadow-xl shadow-orange-500/20">

                <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border-[25px] border-white/10" />

                <Icon name="flame" size={38} />

                <p className="mt-8 text-sm font-semibold text-white/80">
                  Your current streak
                </p>

                <h3 className="mt-2 text-7xl font-black">12</h3>
                <p className="mt-2 text-xl font-bold">Days in a row</p>

                <div className="mt-9 border-t border-white/20 pt-6">
                  <p className="text-sm text-white/80">Personal best</p>
                  <p className="mt-1 text-3xl font-black">18 days</p>
                </div>

                <div className="absolute bottom-0 right-0 w-36 opacity-70">
                  {/* <AnimeMascot variant="orange" className="w-full" /> */}
                  {/* <img src="images/mascots/sleepy-bookworm-girl.png" alt="" className="w-full" /> */}
                  <img loading="lazy" decoding="async" src="/images/mascots/bubble-tea-penguin.png" alt="" className="w-full" />
                </div>
              </div>

              {/* Habit progress */}
              <div className="space-y-4 lg:col-span-2">

                {habits.map((habit) => (
                  <div
                    key={habit.name}
                    className="habit-card rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-bold">{habit.name}</h3>
                        <p className="mt-1 text-xs text-gray-500">
                          Best streak: {habit.best} days
                        </p>
                      </div>

                      <div className="text-right">
                        <p className={`text-xl font-black ${habit.color === "orange" ? "text-orange-500" : habit.color === "blue" ? "text-blue-500" : "text-pink-500"}`}>
                          {habit.current} days
                        </p>
                        <p className="text-xs text-gray-500">Current streak</p>
                      </div>
                    </div>

                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                      <div
                        className={`progress-fill h-full rounded-full ${habit.color === "orange" ? "bg-orange-500" : habit.color === "blue" ? "bg-blue-500" : "bg-pink-500"}`}
                        style={{ width: `${habit.progress}%` }}
                      />
                    </div>

                    <p className="mt-2 text-right text-xs text-gray-500">
                      {habit.progress}% weekly goal
                    </p>
                  </div>
                ))}

                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 font-bold text-violet-600 hover:text-violet-700 dark:text-violet-400"
                >
                  Explore habit tracking
                  <Icon name="arrow" size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* ================= ANIME MASCOT SHOWCASE ================= */}

        <section className="mascot-section relative overflow-hidden bg-gradient-to-br from-violet-100 via-pink-50 to-blue-100 px-5 py-24 dark:from-violet-950/40 dark:via-gray-900 dark:to-blue-950/40 lg:px-8">

          <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-pink-400/20 blur-3xl" />
          <div className="absolute -bottom-20 left-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">

            <div className="grid items-center gap-12 lg:grid-cols-2">

              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-violet-700 dark:bg-gray-800 dark:text-violet-300">
                  <Icon name="heart" size={15} />
                  Your productivity companions
                </span>

                <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
                  Work hard.
                  <span className="block text-violet-600 dark:text-violet-400">
                    Dream bigger.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg leading-8 text-gray-600 dark:text-gray-400">
                  Productivity doesn't have to feel boring.
                  Make your everyday journey more enjoyable
                  with colorful characters, inspiring moments
                  and a workspace that feels like your own world.
                </p>

                <Link
                  to="/signup"
                  className="mt-8 inline-flex items-center gap-3 rounded-xl bg-violet-600 px-7 py-4 font-bold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-1"
                >
                  Begin your journey
                  <Icon name="arrow" />
                </Link>
              </div>

              {/* Three different mascot characters */}
              <div className="relative flex min-h-[350px] items-end justify-center">

                <div className="mascot-float w-1/3 max-w-[150px]">
                  <img loading="lazy" decoding="async" src="/images/mascots/cheerful-orange-ninja-boy.png" alt="" className="w-full" />
                </div>

                <div className="mascot-float mascot-delay-one z-10 w-2/5 max-w-[190px]">
                  {/* <AnimeMascot variant="purple" pose="happy" className="w-full" /> */}
                  <img loading="lazy" decoding="async" src="/images/mascots/star-holding-boy.png" alt="" className="w-full" />
                </div>

                <div className="mascot-float mascot-delay-two w-1/3 max-w-[150px]">
                  {/* <AnimeMascot variant="pink" className="w-full" /> */}
                  <img loading="lazy" decoding="async" src="/images/mascots/sporty-blue-girl.png" alt="" className="w-full" />
                </div>

                <div className="floating-card absolute left-0 top-6 rounded-xl bg-white px-4 py-3 text-sm font-bold text-violet-700 shadow-lg dark:bg-gray-800 dark:text-violet-300">
                  You've got this!
                </div>

                <div className="floating-card floating-delay absolute right-0 top-24 rounded-xl bg-white px-4 py-3 text-sm font-bold text-pink-600 shadow-lg dark:bg-gray-800 dark:text-pink-400">
                  Keep shining!
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* ================= AI PLANNER ================= */}

        <section id="ai-planner" className=" scroll-mt-24 px-5 py-24 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 p-7 text-white shadow-2xl shadow-violet-500/20 sm:p-12">

              <div className="grid items-center gap-12 lg:grid-cols-2">

                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold">
                    <Icon name="sparkles" size={16} />
                    YOUR AI PLANNING ASSISTANT
                  </span>

                  <h2 className="mt-7 text-4xl font-black leading-tight sm:text-5xl">
                    Big goals.
                    <br />
                    Smaller steps.
                    <br />
                    Better results.
                  </h2>

                  <p className="mt-6 max-w-lg leading-8 text-white/80">
                    Have a big goal but don't know where to start?
                    Let your AI assistant help turn your ambitions
                    into a practical action plan.
                  </p>

                  <Link
                    to="/signup"
                    className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-violet-700 transition hover:-translate-y-1"
                  >
                    Explore AI planning
                    <Icon name="arrow" />
                  </Link>

                  <div className="mt-2 w-70">
                    {/* <AnimeMascot variant="pink" pose="happy" className="w-full" /> */}
                    <img loading="lazy" decoding="async" src="/images/mascots/blue-headphone-girl1.png" alt="" className="w-full " />
                  </div>
                </div>

                {/* AI preview */}
                <div className="relative rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-7">

                  <div className="absolute -right-4 -top-15 w-24 mascot-float">
                    {/* <AnimeMascot variant="blue" className="w-full" /> */}
                    <img loading="lazy" decoding="async" src="/images/mascots/bubble-tea-panda.png" alt="" className="w-full" />

                  </div>

                  <div className="flex items-center gap-3 border-b border-white/20 pb-5">
                    <div className="rounded-xl bg-white/20 p-3">
                      <Icon name="sparkles" size={25} />
                    </div>

                    <div>
                      <h3 className="font-bold">TaskFlow AI</h3>
                      <p className="text-xs text-white/60">Your planning companion</p>
                    </div>

                    <span className="ml-auto rounded-full bg-emerald-400/20 px-3 py-1 text-xs text-emerald-200">
                      Online
                    </span>
                  </div>

                  <p className="mt-6 text-xs text-white/60">YOUR GOAL</p>

                  <div className="mt-2 rounded-xl bg-white/10 p-4 font-semibold">
                    Learn React in 30 days
                  </div>

                  <h4 className="mb-4 mt-7 font-bold">Suggested action plan</h4>

                  {[
                    "Learn JSX and components",
                    "Practice React hooks",
                    "Build a small project",
                    "Learn React Router",
                  ].map((task, index) => (
                    <div
                      key={task}
                      className="mb-3 flex items-center gap-3 rounded-xl bg-white/10 p-3"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 text-sm font-bold">
                        {index + 1}
                      </span>

                      <span className="flex-1 text-sm">{task}</span>

                      <Icon name="check" size={17} className="text-emerald-300" />
                    </div>
                  ))}

                  <p className="mt-5 text-center text-xs text-white/50">
                    Example AI-generated plan
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* ================= FEATURES ================= */}

        <section id="features" className="scroll-mt-24 bg-gray-50 px-5 py-24 dark:bg-gray-900/50 lg:px-8">

          <div className="relative mx-auto max-w-7xl">
            <div className="absolute mx-auto max-w-[200px] lg:mx-0">
              {/* <AnimeMascot variant="blue" pose="happy" className="w-full mascot-side" /> */}
              <img loading="lazy" decoding="async" src="/images/mascots/hero-blue-hoodie-boy.png" alt="" className="w-full" />

              <span className="floating-card absolute -right-14 top-6 rounded-xl bg-blue-500 px-3 py-2 text-xs font-bold text-white shadow-lg">
                All in One!
              </span>
            </div>


            <SectionHeading
              eyebrow="Everything in one place"
              title="Tools that move you forward."
              description="A complete productivity workspace with the tools you need to plan, organize and achieve your goals."
              center
            />

            <div className="absolute right-0 top-0 max-w-[200px] lg:mx-0">
              {/* <AnimeMascot variant="blue" pose="happy" className="w-full mascot-side" /> */}
              <img loading="lazy" decoding="async" src="/images/mascots/hero-blue-hoodie-boy.png" alt="" className="w-full -scale-x-100" />

              
            </div>


            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="feature-card group rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colorStyles[feature.color]}`}>
                    <Icon name={feature.icon} size={27} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm text-violet-600 dark:text-violet-400">
                    {/* <a href="login">Learn more</a> */}
                    <Link to={ctaTo}>
                    {user ? "Open dashboard" : "Learn More"}
                    </Link>
                     {/* <Link
                  to={ctaTo}
                  className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-violet-500/25 transition duration-300 hover:-translate-y-1 hover:shadow-violet-500/40"
                >
                  {user ? "Open dashboard" : "Get started free"}
                  <Icon name="arrow" className="transition group-hover:translate-x-1" />
                </Link> */}
                    <Icon name="arrow" size={16} className="transition group-hover:translate-x-1" />

                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* ================= FINAL CTA ================= */}

        <section className="relative overflow-hidden px-5 py-28 lg:px-8">

          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-100 via-blue-50 to-pink-100 dark:from-violet-950/40 dark:via-gray-950 dark:to-blue-950/40" />

          <div className="relative mx-auto max-w-4xl text-center">

            <div className="mx-auto w-36 mascot-float">
              {/* <AnimeMascot variant="purple" pose="happy" className="w-full" /> */}
              <img loading="lazy" decoding="async" src="/images/mascots/star-sprout-cat.png" alt="" className='w-full' />
            </div>

            <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-bold text-violet-700 dark:bg-gray-900 dark:text-violet-300">
              <Icon name="sparkles" size={15} />
              YOUR NEXT CHAPTER STARTS HERE
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Ready to become your
              <span className="block bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                most productive self?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600 dark:text-gray-400">
              Start organizing your life, building better habits
              and achieving your goals one day at a time.
            </p>



            <Link
              to={ctaTo}
              className="mt-4 group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-violet-500/25 transition duration-300 hover:-translate-y-1 hover:shadow-violet-500/40"
            >
              {user ? "Open dashboard" : "Create your free account"}
              <Icon name="arrow" className="transition group-hover:translate-x-1" />
            </Link>

          </div>
        </section>




      </div>


    </>
  )
}