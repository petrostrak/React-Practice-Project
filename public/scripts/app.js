'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Petros Trak'
  ),
  React.createElement(
    'p',
    null,
    'Age: 34'
  ),
  React.createElement(
    'p',
    null,
    'Location: Athens, Greece'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
