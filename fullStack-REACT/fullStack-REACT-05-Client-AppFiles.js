//==========================================================================================================
// ROOT INDEX (client/src/index.js)
//==========================================================================================================

// IMPORTS //=============================================================
  // App.jsx is the parent component
  // We then tell are using REACTDOM.render to render the entire App.jsx
    // component to the DOM by using the getElementByID

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));

//==========================================================================================================
// APP.JSX (client/src/components/App.jsx)
//==========================================================================================================

// IMPORTS //=============================================================
  // We always need to import React and ReactDom
  // We are also going to import any components THIS component will use
  // We will also import any databases, libraries, images, functions

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import SomeList from './components/SomeList.jsx';
import NewItemInput from '.components/NewItemInput.jsx'
import SomeData from './database/index.js';
import someFunc from './database/index.js';
import axios from 'axios';
import someImg from '../assets/img.png';

// APP CLASS //===========================================================
  // This example is setup using ES6 class
  // A. The constructor method's job is to initialize an instance to a
        // valid state and is called automatically so we can’t forget to
        // initialize our objects.
  // B. super() is used to call the parent constructor. super(props) would
        // pass props to the parent constructor. In this case super(props)
        // calls the React.Component constructor passing in props
  // C. componentDidMount() is invoked immediately after a component is
        // mounted (inserted into the tree).  If you need to load data
        // from a remote endpoint, this is a good place to instantiate the
        // network request.


class App extends React.Component {

  constructor(props) { // (A)
    super(props); // (B)
    // Any functions you use in other components need to be bound to the
      // component they were created in using "this"
    this.getListItems = this.getListItems.bind(this);
    this.handleOnClickListEntry = this.handleOnClickListEntry.bind(this);
    this.state = {
      listItems: [],
      currentItem: {}
    };
  }

  // example of using axios to make a GET request of the server and then
  // set the state with the mapped response from the server
  getListItems() {
    axios.get('/api/items')
      .then(res => {
        let items = res.data.map(item => ({ item_name: item.item_name, item_description: item.item_description }));
        this.setState({
          items: items,
          currentItem: items[0]
        });
      });
  }

  // example of setting the currentItem state when an item is clicked
  handleOnClickListEntry(item) {
    this.setState({
      currentItem: item
    });
  }

  // see (C) note at the top of the page
  componentDidMount() { // (C)
    this.getListItems();
  };

  // the HTML below will render the page plus any components included
  render() {

    return (
      <div>
        <h1 className="listItem-header">List Item Header</h1><span></span>
          <ItemInfoView
            currentItem={this.state.currentItem}
          />
        </div>
        <div>
          <NewItemInput
            getListItems={this.getListItems}
          />
        </div>
        <div>
          <SomeList
            items={this.state.items}
            handleOnClickListEntry={this.handleOnClickListEntry.bind(this)}
          />
        </div>
      </div>
    );
  }
}
// it is very important that you export default App
export default App;


//==========================================================================================================
// SOMELIST.JSX (client/src/components/SomeList.jsx)
//==========================================================================================================
  // This is an example of a functional instantiation
  // You always need to import react and anything else you will use in this page

import React from 'react';
var SomeList = (props) => {

  return (
    <div><ul>
      {props.listIems.map(item => (
        <li
          onClick={() => props.handleOnClickListEntry(item)}>
          {item.item_name}
        </li>
      ))}</ul>
    </div>
  )
};

export default SomeList;

//==========================================================================================================
// MEWITEMINPUT.JSX (client/src/components/NewItemInput.jsx)
//==========================================================================================================
  // This is an example of a ES6 class instantiation
  // This is an example of an input form to add a new item
  // You always need to import react and anything else you will use in this page

import React from 'react';
import axios from 'axios';

class NewListInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      descriptionValue: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ nameValue: event.target.value });
    console.log('NameChangeValue', this.state.nameValue);
  }
  handleDescriptionChange(event) {
    this.setState({ descriptionValue: event.target.value });
    console.log('DescriptionChangeValue', this.state.descriptionValue);
  }

  handleSubmit(event) {
    alert('A new item was submitted: ' + this.state.nameValue);
    event.preventDefault();
    axios.post('/api/items', {
      name: this.state.nameValue.replace(/'/g, "\\'"),
      description: this.state.descriptionValue.replace(/'/g, "\\'")
    })
      .then((response) => {
        this.setState({ nameValue: '' });
        this.setState({ descriptionValue: '' });
        this.props.getListItems();
      }, (error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <form className="item-head" onSubmit={this.handleSubmit}>
        <label>
          New Item Name:
          <input type="text" value={this.state.nameValue} onChange={this.handleNameChange} />
        </label>{' '}
        <label>
          New Item Description:
          <input type="text" value={this.state.descriptionValue} onChange={this.handleDescriptionChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default NewItemInput;