'use strict';

console.log('App.js is running!');

var appObject = {
    title: 'React Practice Project',
    subtitle: 'I hate js!',
    options: ['Option No.1', 'Option No.2', 'Option No.3']

    // JSX - JavaScript XML
};var template = React.createElement(
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
        appObject.options.length > 0 ? 'You have these options: ' + appObject.options : 'You have no options available'
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

var userName = 'Petros Trakadas';
var userAge = 33;
var userLocation = 'Alimos';

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            location
        );
    }
}

var user = {
    firstName: 'Petros',
    lastName: 'Trakadas',
    age: 33,
    location: 'Athens, Greece'
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.firstName ? user.firstName : 'Unknown first name',
        ', ',
        user.lastName ? user.lastName : 'Unknown last name'
    ),
    user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
