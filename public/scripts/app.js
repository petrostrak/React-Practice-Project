console.log('App.js is running!');

//var template = <p>This is a JSX from app.js!</p>
var appRoot = document.getElementById('app');

var template = React.createElement(
    "h1",
    {id: "someid"},
    "Something new!"
);

// render gets two parameters. 1st is 'what' and 2nd is 'where'
// What do you want to render and
// Where do you want to render it
ReactDOM.render(template, appRoot);