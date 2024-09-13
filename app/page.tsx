import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, Zap, Target, Sparkles } from "lucide-react";
import Link from "next/link";
import ClientBackground from "@/components/client/background";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900 overflow-hidden font-sans">
      <ClientBackground />
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-slate-200 dark:border-slate-800 relative z-10">
        <Link className="flex items-center justify-center" href="#">
          <FileText className="h-6 w-6 text-indigo-500" />
          <span className="ml-2 text-xl font-bold text-slate-900 dark:text-slate-100">
            ResumeRocket
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium text-slate-700 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium text-slate-700 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium text-slate-700 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400"
            href="#"
          >
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1 relative z-10">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 lg:px-16">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-900 dark:text-slate-100">
                    Launch Your Career to New Heights
                  </h1>
                  <p className="max-w-[600px] text-slate-700 md:text-xl dark:text-slate-400">
                    Don&apos;t just build a resume. Ignite your career with
                    ResumeRocket. Craft a stellar CV that lands interviews and
                    propels you towards your dream job.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus-visible:ring-indigo-600">
                    Blast Off Now
                  </Button>
                  <Button
                    className="inline-flex h-10 text-slate-700 items-center justify-center rounded-md border border-slate-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-800"
                    variant="outline"
                  >
                    Explore Features
                  </Button>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border w-full max-w-md mx-auto border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
                <div className="flex flex-col space-y-1.5">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight text-slate-900 dark:text-slate-100">
                    Ready for Liftoff?
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Enter your credentials to access your account
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-slate-700 dark:text-slate-300"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      placeholder="rocket@example.com"
                      required
                      type="email"
                      className="border-slate-200 dark:border-slate-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="password"
                      className="text-slate-700 dark:text-slate-300"
                    >
                      Password
                    </Label>
                    <Input
                      id="password"
                      required
                      type="password"
                      className="border-slate-200 dark:border-slate-800"
                    />
                  </div>
                </div>
                <Button className="w-full bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700">
                  Launch Your Career
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-100 dark:bg-slate-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-slate-900 dark:text-slate-100">
              Why ResumeRocket?
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Zap className="h-10 w-10 text-indigo-500" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Lightning Fast Creation
                </h3>
                <p className="text-slate-700 dark:text-slate-400">
                  Craft a professional resume in minutes, not hours. Our
                  intuitive interface makes it a breeze.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Target className="h-10 w-10 text-indigo-500" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  ATS-Optimized
                </h3>
                <p className="text-slate-700 dark:text-slate-400">
                  Engineered to sail through Applicant Tracking Systems,
                  boosting your chances of landing interviews.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Sparkles className="h-10 w-10 text-indigo-500" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Stand Out from the Crowd
                </h3>
                <p className="text-slate-700 dark:text-slate-400">
                  Eye-catching templates and personalized content that make your
                  resume impossible to ignore.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-slate-200 dark:border-slate-800 relative z-10">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          © 2024 ResumeRocket. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400"
            href="#"
          >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
