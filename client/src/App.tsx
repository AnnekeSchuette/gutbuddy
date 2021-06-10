import styled from 'styled-components/macro'
import recipeData from './assets/data/recipes.json'
import FooterNav from './components/FooterNav/FooterNav'
import RecipeListing from './components/RecipeListing/RecipeListing'
import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import RecipeDetail from './components/RecipeDetail/RecipeDetail'
import { RecipeData } from './interfaces'

export default function App() {
  const pages = [{title: "Cookbook", path: "/"}, {title: "Create", path: "/create-recipe"},{title: "Recipes", path: "/recipes"}]

  const [currentRecipe, setCurrentRecipe] = useState<RecipeData>()

  return (
    <AppGrid>
      <AppHeader>
       ♡ GutBuddy
      </AppHeader>
      <ContentMain>
        <Switch>
          <Route exact path="/create-recipe">Create</Route>
          <Route exact path="/recipes">
            <RecipeListing recipeData={recipeData} onRecipeClick={handleRecipeClick}/>
          </Route>
          <Route path="/recipes/detail/:slug">
            <RecipeDetail currentRecipe={currentRecipe} onRecipeClick={handleRecipeClick}/>
          </Route>
          <Route exact path="/">
            Cook Book
          </Route>
        </Switch>
      </ContentMain>
      <FooterNav pages={pages} />
    </AppGrid>
  )
  function handleRecipeClick(data: RecipeData){
    return setCurrentRecipe(data)
  }
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

