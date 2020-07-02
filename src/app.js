console.log('App.js is running!');

var appObject = {
    title: 'React Practice Project',
    subtitle: 'I hate js!'
}

// JSX - JavaScript XML
var template = (
  <div>
    <h1>{appObject.title}</h1>
    <p>{appObject.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var userName = 'Petros Trakadas'
var userAge = 33
var userLocation = 'Alimos'

function getLocation(location){
    if(location){
        return <p>{location}</p>;
    }
}

var user = {
    firstName: 'Petros',
    lastName: 'Trakadas',
    age: 33,
    location: 'Athens, Greece'
}
var templateTwo = (
    <div>
        <h1>{user.firstName}, {user.lastName}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
