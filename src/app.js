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

var appRoot = document.getElementById('app');

const renderArray = () => {
  // JSX - JavaScript XML
  var template = (
    <div>
      <h1>{appObject.title}</h1>
      {appObject.subtitle && <p>{appObject.subtitle}</p>}
      <p>{appObject.options.length > 0 ? 'You have '+ appObject.options.length +' option(s).': 'You have no options available'}</p> {/*: ' + appObject.options */}
      <button onClick={onRemoveAll}>Remove all</button>
      <ol>
        {appObject.options.map((option)=>{return <li>{option}</li>;})}
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