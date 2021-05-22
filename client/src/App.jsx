import styled from 'styled-components/macro'
import RecipeCard from './components/RecipeCard/RecipeCard'
import recipeData from "./assets/data/recipes"

export default function App() {
  const recipes = recipeData.map((recipe)=> (
    <RecipeCard recipeData={recipe} key={(recipe.title).replace(/\s/g, "")} />
  ))
  return (
    <AppGrid>
      <AppHeader>
       Hallo
      </AppHeader>
      <ContentMain>
        <p>huhu!</p>
        <RecipeListing>
          {recipes}
        </RecipeListing>
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
`
const RecipeListing = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const FooterNav = styled.footer`
  height: 45px;
  background: #222;
  color:#fff;
`
