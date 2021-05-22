import styled from 'styled-components/macro'
import RecipeCard from './components/RecipeCard/RecipeCard'
import recipeData from "./data/recipes"

export default function App() {
  const recipes = recipeData.map((recipe)=> (
    <RecipeCard recipeData={recipe} key={recipe.title} />
  ))
  return (
    <AppGrid>
      <AppHeader>
       Hallo
      </AppHeader>
      <ContentMain>
        <p>huhu!</p>
        {recipes}
      </ContentMain>
      <FooterNav>
        Bye
      </FooterNav>
    </AppGrid>
  );
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 45px auto 45px;
`
const AppHeader = styled.header`
  height: 45px;
  background: #ff00ff;
`
const ContentMain = styled.main`
  height:100%;
  overflow-y:scroll;
  display: grid;
  grid-template-columns: repeat(1fr, 4);
`
const FooterNav = styled.footer`
  height: 45px;
  background: #222;
  color:#fff;
`
