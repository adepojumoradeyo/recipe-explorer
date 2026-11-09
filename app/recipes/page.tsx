import Image from "next/image";
import Link from "next/link";
import { searchMeals } from "../lib/meals";

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function RecipesPage({ searchParams }: Props) {
  const { q } = await searchParams;

  const meals = await searchMeals(q || "");

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <section className="relative h-87.5 md:h-112.5 overflow-hidden">
        <Image
          src="/images/pizza.jpg"
          alt="Delicious freshly baked pizza"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Header Content */}
        <div className="relative z-10 max-w-6xl mx-auto h-full px-6 flex flex-col justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Recipe Explorer
          </h1>

          <p className="text-gray-200 text-lg md:text-6xl max-w-xl">
            Cooking Made Fun and Easy: Unleash Your Inner Chef
          </p>

          <p className="text-white font-medium mt-6">
            Discover more than 10,000 recipes in your hand with the best recipe.
            Help you to find the easiest way to cook.
          </p>
        </div>
      </section>

      {/* Recipe Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Explore Recipes
          </h2>

          <p className="text-gray-600">
            Find your favourite meals and discover something new.
          </p>
        </div>

        {/* Search Form */}
        <form className="flex flex-col sm:flex-row gap-3 mb-10">
          <input
            type="text"
            name="q"
            defaultValue={q}
            placeholder="Search for recipes..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <button
            type="submit"
            className="bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition"
          >
            Search
          </button>
        </form>

        {/* Recipe Cards */}
        {meals.length === 0 ? (
          <p className="text-gray-600 text-center py-10">
            No recipes found. Try another search.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {meals.map((meal) => (
              <Link
                key={meal.idMeal}
                href={`/recipes/${meal.idMeal}`}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <Image
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {meal.strMeal}
                  </h3>

                  <p className="text-yellow-600 mt-2 text-sm font-medium">
                    View Recipe
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
