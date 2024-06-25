const app = document.getElementById("app");
const categoriesContainer = document.createElement("div");
categoriesContainer.classList.add("categories-container");
categoriesContainer.innerHTML += `<h2>Categories:</h2>`;
export const buildRecipeCategories = async (categories: any) => {
  const recipeCategories = document.createElement("ul");
  recipeCategories.classList.add("meal-categories");
  categories.map((category: any) => {
    console.log(category);

    const mealCategories = `<li><button>${category}</button></li>`;
    recipeCategories.innerHTML += mealCategories;
    categoriesContainer.appendChild(recipeCategories);
    app?.appendChild(categoriesContainer);
  });
};
