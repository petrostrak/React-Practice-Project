console.log('App.js is running!');

var appObject = {
  title: 'React Practice Project',
  subtitle: 'I hate js!',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();
  console.log('form submitted');
  const option = e.target.elements.option.value;
  if (option) {
    appObject.options.push(option);
    e.target.elements.option.value = '';
  }
  renderArray();
};

const onRemoveAll = ()=>{
  appObject.options = [];
  renderArray();
};

const onMakeDecision = ()=>{
  const randomNumber = Math.floor(Math.random() * appObject.options.length);
  console.log(randomNumber);
  const option = appObject.options[randomNumber];
  alert(option);
};

var appRoot = document.getElementById('app');

const renderArray = () => {
  // JSX - JavaScript XML
  var template = (
    <div>
      <h1>{appObject.title}</h1>
      {appObject.subtitle && <p>{appObject.subtitle}</p>}
      <p>{appObject.options.length > 0 ? 'You have '+ appObject.options.length +' option(s).': 'You have no options available'}</p> {/*: ' + appObject.options */}
      <button onClick={onRemoveAll}>Remove all</button>
      <button disabled={appObject.options.length === 0} onClick={onMakeDecision}>What should I do</button>
      <ol>
        {appObject.options.map((option)=>{return <li key={option}>{option}</li>;})}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderArray();