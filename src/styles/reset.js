import "./variables.css"

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;;
  width: 100%;
}

ul li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

.active{
  border-bottom: 2px solid #fff;
  font-weight: 700;
}
`;

export default GlobalStyle;
