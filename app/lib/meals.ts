export type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  [key: `strIngredient${number}`]: string | null;
  [key: `strMeasure${number}`]: string | null;
};

type MealResponse = {
  meals: Meal[] | null;
};

export async function searchMeals(query: string): Promise<Meal[]> {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  const data: MealResponse = await response.json();

  return data.meals || [];
}

export async function getMealById(id: string): Promise<Meal | null> {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(id)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recipe");
  }

  const data: MealResponse = await response.json();

  return data.meals?.[0] || null;
}
