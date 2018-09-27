/* eslint no-unused-expressions: 0 */
import { injectGlobal } from 'emotion';

injectGlobal`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #161719;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  a{
    color:inherit;
    text-decoration:none;
    font-family:inherit;
  }
  [aria-current="page"]{
    position:relative;
    &:after{
      content:'';
      position:absolute;
      bottom: 0;
      left:45%;
      /* width:1rem; */
      /* height: 2px; */
      /* background-color:white; */
      width: 0; 
      height: 0; 
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-top: 5px solid white;
    }
  }
`;
