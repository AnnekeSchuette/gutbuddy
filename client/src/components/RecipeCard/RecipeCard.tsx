import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { Additional, Ingredient, RecipeObject } from '../../interfaces'
import BadgeList from '../BadgeList/BadgeList'

export default function RecipeCard({
  recipeData,
  onRecipeClick,
  ...props
}: any): JSX.Element {
  const {
    title,
    slug,
    subtitle,
    imageFile,
    ingredients,
    additional,
    preparationSteps,
    categories,
    tags,
  }: RecipeObject = recipeData
  const [{ temperature }, { unit }, { preheat }, { mode }] = recipeData.oven
  const detailLink = `/recipes/detail/${slug}`

  return (
    <RecipeCardWrap {...props}>
      <RecipeImage>
        <img src={'./images/' + imageFile} alt=""></img>
      </RecipeImage>
      <RecipeContent>
        <Link to={detailLink} onClick={() => onRecipeClick(recipeData)}>
          <h2>{title}</h2>
        </Link>
        <h3>{subtitle}</h3>
        <BadgeList items={categories} color={'var(--color-green-ish)'} />
        <BadgeList items={tags} color={'var(--color-peach-joghurt)'} />
        <h4>Zutaten</h4>
        <table>
          <tbody>
            {ingredients.map(
              ({ amount, unit, ingredient }: Ingredient, index: number) => (
                <tr key={uuidv4()}>
                  <td>{amount}</td>
                  <td>{unit}</td>
                  <td>{ingredient}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <h4>Zubereitung</h4>
        <ol>
          {preparationSteps.map((prepStep: string, index: number) => (
            <li key={uuidv4()}>{prepStep}</li>
          ))}
        </ol>
        <h4>Infos</h4>
        <ul>
          {additional.map((data: Additional) => renderAllAdditionalInfo(data))}
        </ul>
        <ul>
          <li>
            {temperature} {unit}
          </li>
          <li>{preheat ? 'ja' : 'nein'}</li>
          <li>{mode}</li>1
        </ul>
      </RecipeContent>
    </RecipeCardWrap>
  )

  function renderAllAdditionalInfo(data: Additional): JSX.Element | undefined {
    for (const [key, value] of Object.entries(data)) {
      return (
        <li key={uuidv4()}>
          {key}: {value}
        </li>
      )
    }
  }
}

const RecipeCardWrap = styled.article`
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
