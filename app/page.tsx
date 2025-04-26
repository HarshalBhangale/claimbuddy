"use client"

import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"
import Link from "next/link"
import { motion } from "framer-motion"
import { ThemeToggle } from "./components/theme-toggle"
import { Button } from "./components/ui/button"
import { ThemeProvider } from "./components/theme-provider"
import { ArrowRight, CheckCircle2, Clock, Shield, TrendingUp, Calculator, Sparkles, PoundSterling, Check } from "lucide-react"
import { useState } from "react"

const steps = [
  {
    title: "Sign Up",
    description: "Create an account and verify your identity to access the full suite of claim tools.",
    icon: Shield,
  },
  {
    title: "Info Request",
    description: "We'll help you request the information from your lenders to make sure you don't miss out on any agreements.",
    icon: Clock,
  },
  {
    title: "Data Collection",
    description: "Once you have all the information back, you can collate it here, and we'll educate you on exactly what it means.",
    icon: CheckCircle2,
  },
  {
    title: "Claim submission",
    description: "Our guided process helps you generate the perfect claim based on your data.",
    icon: TrendingUp,
  },
]

export default function Home() {
  const [agreements, setAgreements] = useState(1)
  const [showResults, setShowResults] = useState(false)
  const avgSolicitorFee = 3000
  const mcbFee = 99

  const calculateSavings = () => {
    const solicitorTotal = agreements * avgSolicitorFee
    const mcbTotal = agreements * mcbFee
    return solicitorTotal - mcbTotal
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="claim-buddy-theme">
      <div className="min-h-screen bg-background text-foreground">
        {/* Animated Background */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        </div>

        <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
              <span className="text-xl font-bold">Claim Buddy</span>
            </div>
            <nav className="hidden flex-1 items-center justify-center space-x-6 md:flex">
              <Link href="#benefits" className="text-sm font-medium hover:text-blue-500 transition-colors">
                Benefits
              </Link>
              <Link href="#how-it-works" className="text-sm font-medium hover:text-blue-500 transition-colors">
                How It Works
              </Link>
              <Link href="#comparison" className="text-sm font-medium hover:text-blue-500 transition-colors">
                Comparison
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <SignedIn>
                <Link href="/dashboard">
                  <Button variant="outline" className="hidden sm:flex">
                    Go to Dashboard
                  </Button>
                </Link>
              </SignedIn>
              <SignedOut>
                <SignInButton>
                  <Button>Get Started</Button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </header>

        <main className="container pt-32">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Hero Section */}
            <section className="flex flex-col items-start justify-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-1.5 text-sm font-medium"
              >
                <Sparkles className="mr-2 h-4 w-4 text-blue-500" />
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Save up to £3,500 in legal fees
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold tracking-tight sm:text-6xl"
              >
                Take Control of Your{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Claims
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg leading-8 text-muted-foreground"
              >
                Claim Buddy helps you manage your claims efficiently, saving you time and money.
                97% cheaper than traditional solicitors with the same success rate.
              </motion.p>

              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Check className="h-4 w-4 text-blue-500" />
                  <span>95% cheaper than signing up to a law firm</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Check className="h-4 w-4 text-blue-500" />
                  <span>98% receives the same result</span>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-4"
              >
                <SignedOut>
                  <SignInButton>
                    <Button size="lg" className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </SignInButton>
                </SignedOut>
              </motion.div>
            </section>

            {/* Calculator Section */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-lg"
            >
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl" />
              
              <div className="relative space-y-4">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-blue-500" />
                  <h2 className="text-xl font-bold">Calculate Your Savings</h2>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Number of Agreements
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={agreements}
                        onChange={(e) => setAgreements(Number(e.target.value))}
                        className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                      />
                      <span className="w-8 text-center font-bold">
                        {agreements}
                      </span>
                    </div>
                  </div>

                  <Button 
                    onClick={() => setShowResults(true)}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
                  >
                    Calculate Savings
                  </Button>

                  {showResults && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <div className="rounded-lg border bg-muted p-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Solicitor Fees</span>
                          <span className="font-bold">
                            £{(agreements * avgSolicitorFee).toLocaleString()}
                          </span>
                        </div>
                        <div className="mt-1 flex justify-between text-sm">
                          <span className="text-muted-foreground">Claim Buddy Fee</span>
                          <span className="font-bold text-green-500">
                            £{(agreements * mcbFee).toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <div className="rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-3">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Total Savings</span>
                          <span className="text-xl font-bold text-blue-500">
                            £{calculateSavings().toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <div className="text-xs text-muted-foreground">
                        <p>• Solicitor fee: £3,000 per agreement</p>
                        <p>• Claim Buddy fee: £99 per agreement</p>
                        <p>• 97% cheaper than traditional solicitors</p>
                      </div>

                      <SignedOut>
                        <SignInButton>
                          <Button className="w-full group bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600">
                            Start Your Claims Now
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </SignInButton>
                      </SignedOut>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.section>
          </div>

          {/* Benefits Section */}
          <section id="benefits" className="py-20">
            <div className="space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Choose Claim Buddy?
                </h2>
                <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
                  Our platform makes it easy to manage your own claims without the need for expensive solicitors.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Save Money",
                    description: "Save an average of £3,500 in legal fees by managing your own claims.",
                    icon: PoundSterling,
                  },
                  {
                    title: "Same Results",
                    description: "98% of our users receive the same results as those using solicitors.",
                    icon: Check,
                  },
                  {
                    title: "Full Control",
                    description: "Maintain complete control over your claims process with our guided approach.",
                    icon: ArrowRight,
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                      <benefit.icon className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    <p className="mt-2 text-muted-foreground">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="py-20">
            <div className="space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  It's as easy as these 4 steps
                </h2>
                <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
                  Our guided process makes it simple to manage your claims from start to finish.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="mb-4 flex items-center gap-2">
                      <div className="rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-2">
                        <step.icon className="h-6 w-6 text-blue-500" />
                      </div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Comparison Section */}
          <section id="comparison" className="py-20">
            <div className="space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  How We Compare
                </h2>
                <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
                  See how Claim Buddy stacks up against traditional solicitors.
                </p>
              </div>
              <div className="rounded-xl border bg-card p-8 shadow-sm">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Claim Buddy</h3>
                    <ul className="space-y-3">
                      {[
                        "✓ 97% cheaper fees",
                        "✓ Faster processing",
                        "✓ Full control over your claim",
                        "✓ No hidden costs",
                        "✓ Real-time tracking",
                        "✓ Expert guidance",
                      ].map((item, index) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Traditional Solicitors</h3>
                    <ul className="space-y-3">
                      {[
                        "✗ High legal fees (£3,000+)",
                        "✗ Lengthy process",
                        "✗ Less control",
                        "✗ Hidden charges",
                        "✗ Slow updates",
                        "✗ Limited accessibility",
                      ].map((item, index) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <div className="h-5 w-5 rounded-full bg-red-500/10 p-1">
                            <div className="h-3 w-3 rounded-full bg-red-500" />
                          </div>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-xl border bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8"
            >
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl" />
              
              <div className="relative">
                <h2 className="mb-4 text-2xl font-bold">Ready to take control of your claims?</h2>
                <p className="mb-8 text-muted-foreground">
                  Start your claims process now and keep more of your compensation!
                </p>
                <SignedOut>
                  <SignInButton>
                    <Button size="lg" className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600">
                      Get Started Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </SignInButton>
                </SignedOut>
              </div>
            </motion.div>
          </section>
        </main>

        <footer className="border-t py-6 md:py-8">
          <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center">
              <div className="h-5 w-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
              <span className="ml-2 text-lg font-bold">Claim Buddy</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Claim Buddy. All rights reserved.</p>
            <nav className="flex gap-4 text-sm">
              <Link href="/terms" className="text-muted-foreground hover:text-blue-500 transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-blue-500 transition-colors">
                Privacy
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-blue-500 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
