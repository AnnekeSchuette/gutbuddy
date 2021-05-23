import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --space-xxsmall: 5px;
    --space-xsmall: 10px;
    --space-small: 15px;
    --space-medium: 25px;
    --space-large: 35px;
    --space-xlarge: 50px;

    --color-background: #e8f2e8;
    --color-green-ish: #a8cca8;
  }

  * {
    box-sizing: border-box
  }

  html{
    height: -webkit-fill-available;
  }

  body {
    margin: 0;
    font-weight: 300;
    font-size: 112.5%;
    line-height: 1.5;
    padding:0;
    background:var(--color-background);
    min-height: 100vh;
    min-height: -webkit-fill-available;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

    @media screen and (min-width:667px){
      max-width:667px;
      margin:0 auto;
    }
  }

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

  input, button, textarea {
    font-family: inherit;
    font-size: 0.9em;

    &:focus {
      outline: none;
      border-color: transparent;
      box-shadow: 0 0 4px 1px var(--color-green-ish);
    }
  }

  input, textarea {
    border: 1px solid #ddd;
    padding: 4px;
    width: 100%;
  }

  button {
    border-radius: 4px;
    background: #ddd;
    border: none;
  }

h2,h3,h4,h5,h6 {
  font-weight:300;
  font-size: 1.1em;
  margin:0;
}

h1 {
  font-size: 1.4em;
}

h2 {
    font-size: 1.2em;
    font-weight:400;
}

p {

  &:first-child {margin-top:0;}
}

dl {
  font-size: 0.8em;
}

a {
  &:visited,
  :hover,
  :focus {
    color: var(--color-green-ish);
  }
}
`