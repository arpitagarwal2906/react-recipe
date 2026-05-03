import { useState } from "react";

export default function MainForm() {
  const [ingredientsState, setingredientsState] = useState([]);

  const ingredientsListItems = ingredientsState.map((ingredients, index) => (
    <li key={index}>{ingredients}</li>
  ));

  function handleSubmit(e) {
    e.preventDefault();
    const newIngredients = e.target.ingredient.value;
    setingredientsState([...ingredientsState, newIngredients]);
  }
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
      <ul>{ingredientsListItems}</ul>
    </main>
  );
}
