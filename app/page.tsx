import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Claim Buddy</h1>
        <div className="flex gap-3 justify-center">
          <SignedIn>
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-md bg-black text-white text-sm font-semibold"
            >
              Dashboard
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button className="px-4 py-2 rounded-md bg-black text-white text-sm font-semibold">
                Sign in
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </main>
  )
}
