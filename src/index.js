import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import SearchApp from './SearchApp';
//import SignInApp from './SignInApp';
//import CreateCaseApp from './CreateCaseApp';
import ResultsApp from './ResultsApp';
import './index.css';
//import './navbar.js'
import $ from "jquery";
 
$(document).on('click', '.navbar-nav li', function() {
              $(".navbar-nav li").removeClass("active");
              $(this).addClass("active");
            });

ReactDOM.render(
  <ResultsApp />,
  document.getElementById('root')
);


