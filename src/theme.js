import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: unset;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    background: var(--body);
    color: var(--text);

    height: 100vh;

  }

  :root {
    ${({ theme }) => themes[theme.name]}
  }
`;

const themes = {
  lightTheme: `
        --body: #fcfcfc;
        --text: #363537;
       --white: #fff;
       --greyC: #ccc;
       --greyE: #eee;
       --green: #1B5E20;
       
     --bgGreen: #f1f6e8;
    --bgOrange: #FFB74D;
    
  --outlineRed: #F44336;
--outlineGreen: #587f2b;

  --btnSurface: #FAFAFA;
      --btnRed: #B71C1C;
 --btnRedHover: #DD2C00;
--btnTextWhite: #FAFAFAcc;

--btnSwitchTheme: #363537;

     --fabIcon: #212121;
`,
  darkTheme: `
         --body: #212121;
         --text: #FAFAFAcc;
        --white: #212121;
        --greyC: #757575;
        --greyE: #9E9E9E;
        --green: #B2FF59;
        
     --bgOrange: #FFB74D;
      --bgGreen: #2E7D3215;

   --outlineRed: #F44336;
 --outlineGreen: #B2FF59;
     
   --btnSurface: #FAFAFA11;
       --btnRed: #B71C1C;
  --btnRedHover: #DD2C00;
 --btnTextWhite: #FAFAFAcc;

 --filterDarkImg: invert(0.87);

 --btnSwitchTheme: #FAFAFA;

       --fabIcon: #212121;
`,
};
