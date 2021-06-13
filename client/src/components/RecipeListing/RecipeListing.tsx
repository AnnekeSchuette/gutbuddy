import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components/macro'
import { RecipeObject } from '../../interfaces'
import RecipeCard from '../RecipeCard/RecipeCard'

export default function RecipeListing(
  {recipeData,
  onRecipeClick}: any
): JSX.Element {
  const recipes = recipeData.map(
    (recipe: RecipeObject): JSX.Element => (
      <RecipeCard
        onRecipeClick={onRecipeClick}
        recipeData={recipe}
        key={uuidv4()}
      />
    )
  )

  return <RecipeList>{recipes}</RecipeList>
}

const RecipeList = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
`
