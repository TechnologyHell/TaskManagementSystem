'use client'

import React from 'react'
import { CheckCircle, ChevronDown, ChevronUp, Star} from 'lucide-react'
import Heroimg from '../components/Heroimg'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
      <div className="w-full">
        <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
              <div className="rounded-full bg-white p-1 px-2">
                <p className="text-sm font-medium">Get started </p>
              </div>
              <p className="text-sm font-medium">Join Us... </p>
            </div>
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
             Your only Task Manager
            </h1>
            <p className="mt-8 text-lg text-gray-700">
              Get started and begin with your journey to get all your tasks assigned. Feasible for both individuals and organizations.
            </p>
            <form action="" className="mt-8 flex items-start space-x-2">
              <a href="Signin">
              <button
                type="button"
                className="rounded-md border border-green-600 px-20 py-2 text-sm font-semibold text-green-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                Get Started
              </button>
              </a>
            </form>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            
            <Heroimg width="1000px"/>
          </div>
        </div>
      </div>
        {/* Features Section */}
        <div className="mx-auto my-32 max-w-7xl px-2 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-9 w-9 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">Task tracking</h3>
              <p className="mt-4 text-sm text-gray-600">
              Built-in workflows that allow task assignment and tracking across multiple locations.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
                <svg
                  className="h-9 w-9 text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">Task scheduling</h3>
              <p className="mt-4 text-sm text-gray-600">
              Allows users to define what is necessary to be done to deliver a project successfully
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-9 w-9 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">Time management</h3>
              <p className="mt-4 text-sm text-gray-600">
              Plan tasks and prioritize them based on their urgency and importance, so you can allocate your time accordingly
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                <svg
                  className="h-9 w-9 text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">Task planning</h3>
              <p className="mt-4 text-sm text-gray-600">
                Get all your tasks arrange in one place. Efficient for both individuals as well as organizations.
              </p>
            </div>
          </div>
        </div>
        {/* FAQs */}
        <section className="mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0">
          <div>
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda
              </p>
            </div>
            <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
              <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                >
                  <span className="flex text-lg font-semibold text-black">How do I get started?</span>

                  <ChevronUp className="h-5 w-5 text-gray-500" />
                </button>
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci
                    iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?
                  </p>
                </div>
              </div>
              {Array.from({ length: 2 }).map((_, i) => (
                <div
                  key={i}
                  className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200"
                >
                  <button
                    type="button"
                    className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                  >
                    <span className="flex text-start text-lg font-semibold text-black">
                      What is the difference between a free and paid account?
                    </span>
                    <ChevronDown className="hidden h-5 w-5 text-gray-500 md:block" />
                  </button>
                </div>
              ))}
            </div>
            <p className="textbase mt-6 text-center text-gray-600">
              Can&apos;t find what you&apos;re looking for?{' '}
              <a href="#" title="" className="font-semibold text-black hover:underline">
                Contact our support
              </a>
            </p>
          </div>
        </section>
        

      </div>
  )
}
