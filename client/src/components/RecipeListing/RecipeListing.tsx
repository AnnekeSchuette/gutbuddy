import styled from 'styled-components/macro'
import RecipeCard from '../RecipeCard/RecipeCard'

export default function RecipeListing({recipeData, onRecipeClick}): JSX.Element {
  const recipes: object[] = recipeData.map((recipe): JSX.Element => (
    <RecipeCard onRecipeClick={() => onRecipeClick} recipeData={recipe} key={(recipe.title).replace(/\s/g, "")} />
  ))

  return (
    <RecipeList>
      {recipes}
    </RecipeList>
  )
}

const RecipeList = styled.section`
  display: grid;
  grid-gap:20px;
  grid-template-columns: repeat(2, 1fr);
`