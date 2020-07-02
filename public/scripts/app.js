'use strict';

console.log('App.js is running!');

var appObject = {
  title: 'React Practice Project',
  subtitle: 'I hate js!',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  console.log('form submitted');
  var option = e.target.elements.option.value;
  if (option) {
    appObject.options.push(option);
    e.target.elements.option.value = '';
  }
  renderArray();
};

var onRemoveAll = function onRemoveAll() {
  appObject.options = [];
  renderArray();
};

var onMakeDecision = function onMakeDecision() {
  var randomNumber = Math.floor(Math.random() * appObject.options.length);
  console.log(randomNumber);
  var option = appObject.options[randomNumber];
  alert(option);
};

var appRoot = document.getElementById('app');

var renderArray = function renderArray() {
  // JSX - JavaScript XML
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      appObject.title
    ),
    appObject.subtitle && React.createElement(
      'p',
      null,
      appObject.subtitle
    ),
    React.createElement(
      'p',
      null,
      appObject.options.length > 0 ? 'You have ' + appObject.options.length + ' option(s).' : 'You have no options available'
    ),
    ' ',
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove all'
    ),
    React.createElement(
      'button',
      { disabled: appObject.options.length === 0, onClick: onMakeDecision },
      'What should I do'
    ),
    React.createElement(
      'ol',
      null,
      appObject.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderArray();
