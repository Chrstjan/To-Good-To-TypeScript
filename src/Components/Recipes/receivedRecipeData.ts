import { recipeInterface } from "../../Utils/interfaces.js";
import { buildCategoryRecipes } from "./buildCategoryRecipes.js";
import { buildRecipeCategories } from "./buildRecipeCategories.js";
import { buildRecipeDetails } from "./buildRecipeDetails.js";
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

let allRecipesArray: recipeInterface[] = [];

let mealTypeCategories: any[] = [];
let randomSelectedRecipes: recipeInterface[] = [];

let dinnerArray: recipeInterface[] = [];
let lunchArray: recipeInterface[] = [];
let sideDishArray: recipeInterface[] = [];
let appetizerArray: recipeInterface[] = [];
let snacksArray: recipeInterface[] = [];
let breakfastArray: recipeInterface[] = [];
let beverageArray: recipeInterface[] = [];
let dessertArray: recipeInterface[] = [];
let miscArray: recipeInterface[] = [];


export const receivedRecipeData = async (allRecipes: any) => {
  allRecipesArray = [...allRecipes.recipes];
  recipeCallback(allRecipesArray); //This makes the allRecipes array accessible in the recipeCallback function
  
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
  console.log(mealTypeCategories);
  

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

export const recipeCallback = async (clickedRecipe: string | recipeInterface[]) => {
  console.log(clickedRecipe);
  allRecipesArray.map((recipe) => {
    if (clickedRecipe === recipe.name) {
      buildRecipeDetails(recipe);
    }
    else {
      //console.error("Recipe not found");
      
    }
  })
  
}

export const recipeSearchCallback = (searchedRecipe: string | recipeInterface[]) => {
  console.log(searchedRecipe);
  allRecipesArray.map((recipe) => {
    if (recipe.name.includes(searchedRecipe)) {
      console.log(`Match found`);
      console.log(recipe);
    }
    else {
      console.error('Recipe match not found');
      
    }
  })
  
}