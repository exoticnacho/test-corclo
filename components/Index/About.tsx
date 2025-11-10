import { Eye, Shield, Target, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            What We're Building
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            At Corclo, we're more than just a platform; we're a community.
            Discover the principles and goals that guide us in building a more
            open and connected world.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
          <div className="flex flex-col rounded-lg bg-gray-50 p-6 ring-1 ring-gray-900/5 dark:bg-gray-800/50 dark:ring-white/10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Our Mission
              </h3>
            </div>
            <p className="mt-5 flex-auto text-base text-gray-700 dark:text-gray-300">
              To build a more open and connected world by empowering individuals
              to express themselves and build meaningful communities.
            </p>
          </div>

          <div className="flex flex-col rounded-lg bg-gray-50 p-6 ring-1 ring-gray-900/5 dark:bg-gray-800/50 dark:ring-white/10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Our Vision
              </h3>
            </div>
            <p className="mt-5 flex-auto text-base text-gray-700 dark:text-gray-300">
              We envision a positive and inclusive online environment where
              technology fosters genuine human connection, not division, for
              everyone.
            </p>
          </div>

          <div className="flex flex-col rounded-lg bg-gray-50 p-6 ring-1 ring-gray-900/5 dark:bg-gray-800/50 dark:ring-white/10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Community First
              </h3>
            </div>
            <p className="mt-5 flex-auto text-base text-gray-700 dark:text-gray-300">
              Our platform is built for you. We prioritize user well-being, data
              privacy, and creating spaces where everyone feels they belong.
            </p>
          </div>

          <div className="flex flex-col rounded-lg bg-gray-50 p-6 ring-1 ring-gray-900/5 dark:bg-gray-800/50 dark:ring-white/10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Our Values
              </h3>
            </div>
            <p className="mt-5 flex-auto text-base text-gray-700 dark:text-gray-300">
              Guided by transparency, inclusivity, and respect. We design
              features that encourage constructive dialogue and positive
              interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
