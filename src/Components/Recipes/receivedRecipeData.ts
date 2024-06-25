import { buildCategoryRecipes } from "./buildCategoryRecipes.js";
import { buildRecipeCategories } from "./buildRecipeCategories.js";
import { buildSelectedRecipes } from "./buildSelectedRecipes.js";

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
let randomSelectedRecipes: any[] = [];

let dinnerArray: any[] = [];
let lunchArray: any[] = [];
let sideDishArray: any[] = [];
let appetizerArray: any[] = [];
let snacksArray: any[] = [];
let breakfastArray: any[] = [];
let beverageArray: any[] = [];
let dessertArray: any[] = [];
let miscArray: any[] = [];

export const receivedRecipeData = async (allRecipes: any) => {
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
  mealTypeCategories = Array.from(mealCategories); //Converts from set to array

  randomSelectedRecipes.push(
    allRecipes.recipes[Math.floor(Math.random() * allRecipes.recipes.length)],
    allRecipes.recipes[Math.floor(Math.random() * allRecipes.recipes.length)],
    allRecipes.recipes[Math.floor(Math.random() * allRecipes.recipes.length)],
    allRecipes.recipes[Math.floor(Math.random() * allRecipes.recipes.length)]
  );
  console.log(randomSelectedRecipes);

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

  buildRecipeCategories(mealTypeCategories);
  buildSelectedRecipes(randomSelectedRecipes);
};

export const categoryCallback = async (clickedCategory: any) => {
  const findCategory = (category: MealType) => {
    switch (category) {
      case MealType.Dinner:
        buildCategoryRecipes(dinnerArray, "Dinner");
        break;

      case MealType.Lunch:
        buildCategoryRecipes(lunchArray, "Lunch");
        break;

      case MealType.Snacks:
        buildCategoryRecipes(snacksArray, "Snacks");
        break;

      case MealType.Dessert:
        buildCategoryRecipes(dessertArray, "Desserts");
        break;

      case MealType.SideDish:
        buildCategoryRecipes(sideDishArray, "Side Dish");
        break;

      case MealType.Appetizer:
        buildCategoryRecipes(appetizerArray, "Appetizer");
        break;

      case MealType.Beverage:
        buildCategoryRecipes(beverageArray, "Beverage");
        break;

      case MealType.Breakfast:
        buildCategoryRecipes(breakfastArray, "Breakfast");
        break;

      default:
        console.log("Category not found!");
        break;
    }
  };
  findCategory(clickedCategory);
};
