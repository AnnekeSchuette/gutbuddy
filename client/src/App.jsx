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
       ♡ GutBuddy
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
  height:100vh;
`
const AppHeader = styled.header`
  height: 45px;
  background: #a8cca8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const ContentMain = styled.main`
  height: calc(100vh - 90px);
  overflow-y:scroll;
  padding:0 20px;
  background:#e8f2e8;
`
const RecipeListing = styled.section`
  display: grid;
  grid-gap:20px;
  grid-template-columns: repeat(2, 1fr);
`
const FooterNav = styled.footer`
  height: 45px;
  background: #222;
  color:#fff;
`
