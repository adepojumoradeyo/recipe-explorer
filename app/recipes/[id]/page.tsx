import Image from "next/image";
import Link from "next/link";
import { getMealById } from "../../lib/meals";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RecipeDetails({ params }: Props) {
  const { id } = await params;

  const meal = await getMealById(id);

  if (!meal) {
    notFound();
  }

  const ingredients = Array.from({ length: 20 }, (_, index) => {
    const ingredient = meal[`strIngredient${index + 1}`];
    const measure = meal[`strMeasure${index + 1}`];

    return {
      ingredient,
      measure,
    };
  }).filter((item) => item.ingredient?.trim());

  return (
    <main className="max-w-5xl mx-auto p-6">
      <Link href="/recipes" className="text-yellow-600 hover:underline">
        ← Back to recipes
      </Link>

      <h1 className="text-3xl font-bold my-6">{meal.strMeal}</h1>

      <Image
        src={meal.strMealThumb}
        alt={meal.strMeal}
        width={800}
        height={500}
        className="w-full max-h-96 object-cover rounded-xl"
      />

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Ingredients</h2>

        <ul className="list-disc pl-6 space-y-2">
          {ingredients.map((item, index) => (
            <li key={index}>
              {item.measure} {item.ingredient}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Instructions</h2>

        <p className="leading-7 whitespace-pre-line">{meal.strInstructions}</p>
      </section>
    </main>
  );
}
