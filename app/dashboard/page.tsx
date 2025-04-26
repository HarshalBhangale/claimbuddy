import { UserButton } from "@clerk/nextjs";

export default async function DashboardPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="flex justify-end mb-4">
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-600">
          Welcome to your dashboard. This is a simplified version with just the essential elements.
        </p>
      </div>
    </main>
  );
}
