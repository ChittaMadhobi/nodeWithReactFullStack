/*
**  Module: Config
**  Author: Sarbojit Mukherjee (Jit)
**          jit@baanda.com
**  Comments: This figures  out the environment (prod, QA, Dev etc.)
**   
**  Rivision History:
**
**  Date           Author     Description
**  06/11/2018       Jit      Setting up the preliminary logic
*/
if (process.env.NODE_ENV === 'production'){
    // we are in production -- return 
    module.exoprts = require('./prod');  // prod keys are in prod.js 
} else {
    // we are in development and return the dev keys.
    // Here we can opt to select local environment variables to check and setup other
    // environment as QA, Staging etc.
    module.exports = require ('./dev');  // This would export dev.js to be used by app.js   
}