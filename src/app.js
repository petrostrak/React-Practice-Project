console.log('App.js is running!');

var appObject = {
    title: 'React Practice Project',
    subtitle: 'I hate js!',
    options: ['Option No.1', 'Option No.2', 'Option No.3']
}

// JSX - JavaScript XML
var template = (
  <div>
    <h1>{appObject.title}</h1>
    {appObject.subtitle && <p>{appObject.subtitle}</p>}
    <p>{appObject.options.length > 0 ? 'You have these options: ' + appObject.options : 'You have no options available'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var userName = 'Petros Trakadas'
var userAge = 33
var userLocation = 'Alimos'

// function getLocation(location){
//     if(location){
//         return <p>{location}</p>;
//     }
// }

const getLocation = (location) =>{
    if(location) return <p>{location}</p>;
}

var user = {
    firstName: 'Petros',
    lastName: 'Trakadas',
    age: 33,
    location: 'Athens, Greece'
}
var templateTwo = (
    <div>
        <h1>{user.firstName ? user.firstName : 'Unknown first name'}, {user.lastName ? user.lastName : 'Unknown last name'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

let count = 0;

const templateTree = (
  <div>
    <h1>Count : {count}</h1>
    <button onClick={()=>{console.log('addOne')}}>+1</button>
    <button onClick={()=>{console.log('minusOne')}}>-1</button>
    <button onClick={()=>{console.log('reseted')}}>Reset</button>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTree, appRoot);
