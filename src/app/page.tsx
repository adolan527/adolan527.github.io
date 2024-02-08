/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PxfTdOC1zI3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
      <div key="1" className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <MountainIcon props={"h-6 w-6"}/>
            <span className="sr-only">Engineering Portfolio</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
              About
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#current-project">
              Current Project
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
              Projects
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#resume">
              Resume
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
              Contact
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <section
              className="w-full pt-16 md:pt-24 lg:pt-32 border-y relative"
              style={{
                backgroundImage: "url('/stoic2.jpg')",
                backgroundPosition: "center bottom",
                backgroundSize: "cover",
                minHeight: "700px"
              }}
              id = "about"
          >
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="px-4 md:px-6 space-y-10 xl:space-y-16 relative z-10">
              <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                <div>
                  <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-white" style={{ color: 'rgb(204, 0, 0)' }} >
                    Welcome to my Engineering Portfolio
                  </h1>
                  <p className="mx-auto max-w-[700px] text-white md:text-xl" style={{ marginTop: '15px' }}>
                    I am a professional engineer with a passion for solving complex problems. Explore my projects and get
                    in touch.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32" id="current-project">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    Current Project
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Current Engineering Project</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Here is a video presentation of my current project. Enjoy the journey!
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-1 lg:gap-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Current Project Video</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="object-cover w-full h-60" />
                    <p className="pt-4 text-gray-500 dark:text-gray-400">
                      A brief description of the current project video.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Projects</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Engineering Projects</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Here are some of the projects I've worked on. Click on a project to learn more.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Project 1</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                        alt="Project 1"
                        className="object-cover w-full h-60"
                        height={300}
                        src="/face.jpg"
                        style={{
                          aspectRatio: "400/300",
                          objectFit: "cover",
                        }}
                        width={400}
                    />
                    <p className="pt-4 text-gray-500 dark:text-gray-400">Brief description of Project 1.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Project 2</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                        alt="Project 2"
                        className="object-cover w-full h-60"
                        height={300}
                        src="/face.jpg"
                        style={{
                          aspectRatio: "400/300",
                          objectFit: "cover",
                        }}
                        width={400}
                    />
                    <p className="pt-4 text-gray-500 dark:text-gray-400">Brief description of Project 2.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Project 3</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                        alt="Project 3"
                        className="object-cover w-full h-60"
                        height={300}
                        src="/face.jpg"
                        style={{
                          aspectRatio: "400/300",
                          objectFit: "cover",
                        }}
                        width={400}
                    />
                    <p className="pt-4 text-gray-500 dark:text-gray-400">Brief description of Project 3.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="resume">
            <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">My Resume</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Download my resume to learn more about my experience and qualifications.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                >
                  Download Resume
                </Link>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
            <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contact Information</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Feel free to reach out to me through any of the following methods.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div className="w-full max-w-md mx-auto space-y-4">
                  <p className="text-gray-500 dark:text-gray-400">
                    <strong>Email: </strong>
                    <Link className="underline" href="mailto:austindolan527@gmail.com">
                      austindolan527@gmail.com
                    </Link>
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    <strong>Phone: </strong>

                    <Link className="underline" href="tel:+1234567890">
                      +1 (919) 748-0566
                    </Link>
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    <strong>LinkedIn: </strong>
                    <Link className="underline" href="https://www.linkedin.com/in/austin-dolan">
                      www.linkedin.com/in/austin-dolan
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Engineering Portfolio. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
  )
}

function MountainIcon({props}: { props: any }) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
  )
}
