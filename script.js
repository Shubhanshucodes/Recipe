document.addEventListener("DOMContentLoaded", () => {
    const recipes = [
        {
            name: "Spaghetti Bolognese",
            ingredients: "Spaghetti, Tomato Sauce, Ground Beef, Garlic, Onion, Olive Oil, Salt, Pepper",
            instructions: "Cook the spaghetti. In a separate pan, cook the ground beef with garlic and onion. Add the tomato sauce and simmer. Combine the spaghetti with the sauce."
        },
        {
            name: "Chicken Curry",
            ingredients: "Chicken, Curry Powder, Coconut Milk, Garlic, Onion, Ginger, Salt, Pepper",
            instructions: "Cook the chicken with garlic, onion, and ginger. Add the curry powder and coconut milk and simmer. Serve with rice."
        }
    ];

    const recipeList = document.getElementById("recipes");
    const recipeDetails = document.getElementById("details");
    const recipeForm = document.getElementById("recipe-form");

    function displayRecipes() {
        recipeList.innerHTML = "";
        recipes.forEach((recipe, index) => {
            const li = document.createElement("li");
            li.textContent = recipe.name;
            li.addEventListener("click", () => displayRecipeDetails(index));
            recipeList.appendChild(li);
        });
    }

    function displayRecipeDetails(index) {
        const recipe = recipes[index];
        recipeDetails.innerHTML = `
            <h3>${recipe.name}</h3>
            <h4>Ingredients</h4>
            <p>${recipe.ingredients}</p>
            <h4>Instructions</h4>
            <p>${recipe.instructions}</p>
        `;
    }

    recipeForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const newRecipe = {
            name: recipeForm.name.value,
            ingredients: recipeForm.ingredients.value,
            instructions: recipeForm.instructions.value
        };
        recipes.push(newRecipe);
        displayRecipes();
        recipeForm.reset();
    });

    displayRecipes();
});
