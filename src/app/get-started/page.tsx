import Navigation from "@/components/Navigation";

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main className="max-w-7xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Get Started</h1>
        <p className="text-gray-600 text-lg">
          Start your journey with us today.
        </p>
      </main>
    </div>
  );
}

