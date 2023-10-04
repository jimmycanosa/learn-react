import { recipes } from './data.js';

function RecipeSection({ recipes }) {
  return recipes.map((recipe) => (
    <div key={recipe.id}>
      <h2>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  ));
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      <RecipeSection recipes={recipes} />;
    </div>
  );
}
