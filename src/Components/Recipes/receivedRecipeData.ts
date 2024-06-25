export const receivedRecipeData = async (allRecipes: any) => {
  enum MealType {
    Dinner = "Dinner",
    Lunch = "Lunch",
    SideDish = "Side Dish",
    Appetizer = "Appetizer",
    Snacks = "Snack",
    Breakfast = "Breakfast",
    Beverage = "Beverage",
    Dessert = "Dessert",
  }
  let mealTypeCategories: any[] = [];
  let dinnerArray: any[] = [];
  let lunchArray: any[] = [];
  let sideDishArray: any[] = [];
  let appetizerArray: any[] = [];
  let snacksArray: any[] = [];
  let breakfastArray: any[] = [];
  let beverageArray: any[] = [];
  let dessertArray: any[] = [];
  let miscArray: any[] = [];

  const getMealTypeOnce = (recipes: any[]): Set<MealType> => {
    const uniqueMealType = new Set<MealType>();
    recipes.forEach((recipe) => {
      recipe.mealType.forEach((mealType: MealType) => {
        uniqueMealType.add(mealType);
      });
    });
    return uniqueMealType;
  };

  const mealCategories = getMealTypeOnce(allRecipes.recipes);
  mealTypeCategories.push(mealCategories);
  console.log(mealTypeCategories);

  allRecipes.recipes.map((recipe: any) => {
    let mealTypeArray = recipe.mealType;
    mealTypeArray.forEach((mealType: MealType) => {
      const sortMealTypes = (mealType: MealType) => {
        switch (mealType) {
          case MealType.Dinner:
            dinnerArray.push(recipe);
            break;

          case MealType.Lunch:
            lunchArray.push(recipe);
            break;

          case MealType.SideDish:
            sideDishArray.push(recipe);
            break;

          case MealType.Appetizer:
            appetizerArray.push(recipe);
            break;

          case MealType.Snacks:
            snacksArray.push(recipe);
            break;

          case MealType.Breakfast:
            breakfastArray.push(recipe);
            break;

          case MealType.Beverage:
            beverageArray.push(recipe);
            break;

          case MealType.Dessert:
            dessertArray.push(recipe);
            break;

          default:
            miscArray.push(recipe);
            break;
        }
      };
      sortMealTypes(mealType);
    });
  });
  console.log(dinnerArray);
  console.log(lunchArray);
  console.log(miscArray);
};
