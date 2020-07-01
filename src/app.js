console.log('App.js is running!');

var template = <p>Does this change?</p>
var appRoot = document.getElementById('app');

// render gets two parameters. 1st is 'what' and 2nd is 'where'
// What do you want to render and
// Where do you want to render it
ReactDOM.render(template, appRoot);