import { useState } from "react";

export default function MainForm() {
  const [ingredientsState, setingredientsState] = useState([]);

  const ingredientsListItems = ingredientsState.map((ingredients, index) => (
    <li key={index}>{ingredients}</li>
  ));

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const formEl = e.currentTarget;
  //   const newIngredients = e.currentTarget.ingredient.value;
  //   setingredientsState([...ingredientsState, newIngredients]);
  //   formEl.reset();
  // }

  function signUp(formData) {
    const newIngredients = formData.get("ingredient");
    setingredientsState([...ingredientsState, newIngredients]);
  }

  return (
    <main>
      <form className="add-ingredient-form" action={signUp}>
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
