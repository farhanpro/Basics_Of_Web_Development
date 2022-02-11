var to = require('to-case');
 
console.log(to.camel('Riza Shaikh roll 69')   ) ;  // "whatTheHeck"
console.log(to.capital('Riza Shaikh roll 69')) ;  // "What The Heck"
console.log(to.constant('Riza Shaikh roll 69')) ;    // "WHAT_THE_HECK"
console.log(to.dot('Riza Shaikh roll 69')     ) ;    // "what.the.heck"
console.log(to.inverse('Riza Shaikh roll 69') ) ;  // "WHAt ThE HeCK"
console.log(to.lower('Riza Shaikh roll 69')   ) ;    // "what the heck"
console.log(to.pascal('Riza Shaikh roll 69')  ) ;  // "WhatTheHeck"
console.log(to.sentence('Riza Shaikh roll 69')) ;// "What the heck."
console.log(to.slug('Riza Shaikh roll 69')    ) ;    // "what-the-heck"
console.log(to.snake('Riza Shaikh roll 69')   ) ;    // "what_the_heck"
console.log(to.space('Riza Shaikh roll 69')   ) ;  // "what the heck"
console.log(to.title('Riza Shaikh roll 69')   ) ;  // "What the Heck"
console.log(to.upper('Riza Shaikh roll 69') ) ;      