export default function IngredientsList(props) {
  const ingredientsListItems = props.ingredients.map((ingredients, index) => (
    <li key={index}>{ingredients}</li>
  ));
  return (
    <section>
      <h2> Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsListItems}
      </ul>
      {props.ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a Recipe?</h3>
            <p>Generate a recipe from a list of your ingredients.</p>
          </div>
          <button onClick={props.toggleRecipeShown}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
