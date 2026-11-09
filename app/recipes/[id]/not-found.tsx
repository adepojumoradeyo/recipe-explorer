import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Recipe Not Found</h1>

      <p className="text-gray-600 mb-6">
        Sorry, we could not find the recipe you are looking for.
      </p>

      <Link
        href="/recipes"
        className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700"
      >
        Back to Recipes
      </Link>
    </main>
  );
}
