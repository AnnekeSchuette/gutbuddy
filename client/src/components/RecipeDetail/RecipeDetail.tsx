import styled from 'styled-components/macro'
import { useLocation } from 'react-router-dom'
import { Ingredient } from '../../interfaces'

export default function RecipeDetail({ currentRecipe }: any) {
  const [
    title,
    subtitle,
    imageFile,
    ingredients,
    additional,
    preparationSteps,
  ] = currentRecipe
  const [{ temperature }, { unit }, { preheat }, { mode }] = currentRecipe.oven

  const location = useLocation()
  const currentPath = location.pathname
  //const recipe = recipeData.find((recipe) => recipe.slug === currentPath)
  /* const { title, subtitle, imageFile, ingredients, additional, preparationSteps} = recipe
  const [{temperature}, {unit}, {preheat}, {mode}] = recipe.oven */
  console.log(currentPath)
  //console.log(currentRecipe)
  /* const ingredients = recipeData.ingredients
  const preparationSteps = recipeData.preparationSteps
  const additional = recipeData.additional
  const categories = recipeData.categories
  const tags = recipeData.tags */
  //const imgPath = `./images/${imageFile}`

  return (
    <RecipeDetailWrap>
      <RecipeImage>
        <img src={'./images/' + imageFile} alt=""></img>
      </RecipeImage>
      <RecipeContent>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <h4>Zutaten</h4>
        <table>
          <tbody>
            {ingredients.map(({ amount, unit, ingredient }: Ingredient) => (
              <tr>
                <td>{amount}</td>
                <td>{unit}</td>
                <td>{ingredient}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4>Zubereitung</h4>
        <ol>
          {preparationSteps.map((prepStep: string) => (
            <li>{prepStep}</li>
          ))}
        </ol>
        <h4>Infos</h4>
        <ul>
          {additional.map((data: number) => renderAllAdditionalInfo(data))}
        </ul>
        <ul>
          <li>
            {temperature} {unit}
          </li>
          <li>{preheat ? 'ja' : 'nein'}</li>
          <li>{mode}</li>
        </ul>
      </RecipeContent>
    </RecipeDetailWrap>
  )

  function renderAllAdditionalInfo(data: number) {
    for (const [key, value] of Object.entries(data)) {
      return (
        <li key={key + value}>
          {key}: {value}
        </li>
      )
    }
  }
}

const RecipeDetailWrap = styled.article`
  /* border: 1px solid #ff00ff; */
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
`

const RecipeImage = styled.figure`
  width: 100%;
  height: 0;
  padding: 0;
  margin: 0;
  padding-bottom: 60%;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }
`
const RecipeContent = styled.div`
  padding: 10px 25px;
`
