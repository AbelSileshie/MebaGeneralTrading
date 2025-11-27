import Navigation from "@/components/Navigation";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main className="max-w-7xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        <p className="text-gray-600 text-lg">
          Read our latest articles and insights.
        </p>
      </main>
    </div>
  );
}

