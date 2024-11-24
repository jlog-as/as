import React, { useState } from 'react';

const recipesData = [
  { id: 1, title: "Spaghetti Bolognese", rating: 4.5, ingredients: ["spaghetti", "beef", "tomato sauce"] },
  { id: 2, title: "Chicken Curry", rating: 4.7, ingredients: ["chicken", "curry powder", "coconut milk"] },
  { id: 3, title: "Vegetable Stir Fry", rating: 4.3, ingredients: ["broccoli", "carrot", "soy sauce"] },
];

const RecipeList = () => {
  // eslint-disable-next-line no-unused-vars
  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState("");

  const filteredRecipes = recipes.filter(recipe =>
    recipe.ingredients.some(ingredient => ingredient.includes(filter.toLowerCase()))
  );

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <input
        type="text"
        placeholder="Filter by ingredient"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ margin: "10px", padding: "5px" }}
      />
      <ul>
        {filteredRecipes.map(recipe => (
          <li key={recipe.id}>
            <h2>{recipe.title}</h2>
            <p>Rating: {recipe.rating} ⭐</p>
            <p>Ingredients: {recipe.ingredients.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
