import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function MainForm() {
  const [ingredientsState, setingredientsState] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  function toggleRecipeShown() {
    setRecipeShown((prevShown) => !prevShown);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const newIngredients = e.currentTarget.ingredient.value;
    if (newIngredients.trim()) {
      setingredientsState([...ingredientsState, newIngredients]);
    }
    formEl.reset();
  }

  // function signUp(formData) {
  //   const newIngredients = formData.get("ingredient");
  //   setingredientsState([...ingredientsState, newIngredients]);
  // }

  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g., oregano"
          aria-label="Add Ingredient"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>
      {ingredientsState.length > 0 && (
        <IngredientsList
          ingredients={ingredientsState}
          toggleRecipeShown={toggleRecipeShown}
        />
      )}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
