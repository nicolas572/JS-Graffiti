
// Select some elements...
//Step 1 find your selector from the index.html file and declare it a variable
let pageHeader = document.querySelector('#page-header') ;

//Step 2 what do you want to style? pick a CSS property that you want to change
//text-align => textAlign

//Step 3 write the styling code using DOM
pageHeader.style.textAlign = 'left'
//format: (variable name) .style.(CSS property in DOM) = '(value)'

//*****
//Exercise 2: Change the background color
let body = document.querySelector('body')

//background-color => backgroundColor
body.style.backgroundColor = 'gold'


