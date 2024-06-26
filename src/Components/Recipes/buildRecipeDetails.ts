import { clearContainer } from "../app.js";

const app = document.getElementById("app");
const recipeContainer = document.createElement("div");
recipeContainer.classList.add("recipe-container");

recipeContainer.innerHTML += `<button id="back-btn">&larr;</button>`;

export const buildRecipeDetails = async (recipe: any) => {
    console.log(recipe);
    clearContainer(app);

    let recipeDetails = `
        <figure class="recipe-figure">
            <img src="${recipe.image}" alt="${recipe.name} image" />
            <figcaption class="recipe-details">
                <header>
                    <span class="overall-info-container">
                        <span class="rating-container">
                            <p>${recipe.rating} &#9733;</p>
                        </span>
                        <p>Prep: ${recipe.prepTimeMinutes} Min</p>
                        <p>Cook: ${recipe.cookTimeMinutes} Min</p>
                        <p>Serving: ${recipe.servings}</p>
                    </span>
                    <h3>${recipe.name}</h3>
                    <span class="additional-info">
                        <p>difficulty: ${recipe.difficulty}</p>
                        <p>${recipe.caloriesPerServing} kcal. per serving</p>
                    </span>
                </header>
                <div class="recipe-steps-container">
                    <span class="btn-container">
                        <button class="ingredients-btn">Ingredients</button>
                        <button class="instructions-btn">Instructions</button>
                    </span>
                    <span class="recipe-info-container"></span>
                </div>
                <footer class="footer-info">
                    <h4>Cuisine: ${recipe.cuisine}</h4>
                    <h4>Meal Type: ${recipe.mealType}</h4>
                    <p>tags: ${recipe.tags}</p>
                </footer>
            </figcaption>
        </figure>`;
    recipeContainer.innerHTML += recipeDetails;
    app?.appendChild(recipeContainer);

    const recipeDetailsContainer = document.querySelector(".recipe-info-container");
    console.log(recipeDetailsContainer);
    

    const ingredientsBtn = document.querySelector(".ingredients-btn");
    ingredientsBtn?.addEventListener("click", () => {
        clearContainer(recipeDetailsContainer);
        ingredientsBtn.classList.add("selected-btn")
        direcitonsBtn?.classList.remove("selected-btn");

        const ingredientsList = document.createElement("ul");
        recipe.ingredients.map((ingredient: string) => {
            return ingredientsList.innerHTML += `<li>${ingredient}</li>`;
        });
        recipeDetailsContainer?.appendChild(ingredientsList);
        
    });

    const direcitonsBtn = document.querySelector(".instructions-btn");
    direcitonsBtn?.addEventListener("click", () => {
       clearContainer(recipeDetailsContainer);
       direcitonsBtn.classList.add("selected-btn");
       ingredientsBtn?.classList.remove("selected-btn");

       const instructionsList = document.createElement("ol");
       instructionsList.classList.add("instructions-list");
       recipe.instructions.map((instruction: string) => {
        return instructionsList.innerHTML += `<li>${instruction}</li>`
       });
       recipeDetailsContainer?.appendChild(instructionsList);
    });
}