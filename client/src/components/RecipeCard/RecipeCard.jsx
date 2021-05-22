import styled from 'styled-components/macro'

export default function RecipeCard({recipeData, ...props}){
  const { title, subtitle, imageFile, ingredients, additional, preparationSteps} = recipeData
  const [{temperature}, {unit}, {preheat}, {mode}] = recipeData.oven
  /* const ingredients = recipeData.ingredients
  const preparationSteps = recipeData.preparationSteps
  const additional = recipeData.additional
  const categories = recipeData.categories
  const tags = recipeData.tags */
  //const imgPath = `./images/${imageFile}`

  return (
    <RecipeCardWrap {...props}>
      <RecipeImage>
        <img src={"./images/" + imageFile} alt=""></img>
      </RecipeImage>
      <RecipeContent>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <h4>Zutaten</h4>
      <table>
        <tbody>
        {ingredients.map(
          ({amount, unit, ingredient}) => (
          <tr>
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
      </RecipeContent>
    </RecipeCardWrap>
  )

  function renderAllAdditionalInfo(data){
    for (const [key, value] of Object.entries(data)) {
      return <li>{key}: {value}</li>
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
  width:100%;
  height: 0;
  padding:0;
  margin:0;
  padding-bottom:60%;
  overflow:hidden;

  img {
    width: 100%;
    height: auto;
  }
`
const RecipeContent = styled.div`
  padding: 10px 25px;
`
