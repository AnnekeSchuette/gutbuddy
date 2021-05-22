import styled from 'styled-components/macro'

export default function RecipeCard({recipeData, ...props}){
  const { title, subtitle, ingredients, additional, preparationSteps} = recipeData
  const [{temperature}, {unit}, {preheat}, {mode}] = recipeData.oven
  /* const ingredients = recipeData.ingredients
  const preparationSteps = recipeData.preparationSteps
  const additional = recipeData.additional
  const categories = recipeData.categories
  const tags = recipeData.tags */

  return (
    <RecipeCardWrap {...props}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <figure>
        <img src="http://placekitten.com/300/200" alt=""></img>
      </figure>
      <h4>Zutaten</h4>
      <table>
        {ingredients.map(
          ({amount, unit, ingredient}) => (
          <tr>
            <td>{amount}</td>
            <td>{unit}</td>
            <td>{ingredient}</td>
          </tr>
        )
        )}
      </table>
      <h4>Zubereitung</h4>
      <ol>
        {preparationSteps.map(
          prepStep => <li>{prepStep}</li>
        )}
      </ol>
      <h4>Infos</h4>
      <ul>
        {additional.map(data => renderAllAdditionalInfo(data))}
      </ul>
      <ul>
        <li>{temperature} {unit}</li>
        <li>{preheat ? 'ja' : 'nein'}</li>
        <li>{mode}</li>
      </ul>
    </RecipeCardWrap>
  )

  function renderAllAdditionalInfo(data){
    for (const [key, value] of Object.entries(data)) {
      return <li>{key}: {value}</li>
    }
  }
}

const RecipeCardWrap = styled.article`
  border: 1px solid #ff00ff;
`
