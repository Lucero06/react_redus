/** @format */

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';
import {createStore} from 'redux';
import Counter5  from './Counter';
import { Provider } from 'react-redux';
import PeopleListt from './components/PeopleList';
import AddPersonFormm from './components/AddPersonForm';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//default
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );

//ejemplo 1
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <h1>Hello, React!</h1>,
//   // document.getElementById('root')
// );

//ejemplo 2
let counter = 0;

function show() {
	counter++;
	const el = <p>{counter}</p>;
	root.render(el);
}

// setInterval(show, 1000);

// ejemplo 3

function Hello() {
	return <h1> Hello World.</h1>;
}
const el = <Hello />;
// root.render(el);

class Hello2 extends React.Component {
	render() {
		return <h1>Hello World 2.</h1>;
	}
}
const el2 = <Hello2 />;
// root.render(el2);

function Hello3(props) {
	return <p>Hello, {props.name}!</p>;
}
const el3 = <Hello3 name="Monse" />;
// root.render(el3);

function App2() {
	return (
		<div>
			<Hello name="David" />
			<Hello name="James" />
			<Hello name="Amy" />
		</div>
	);
}
const app2 = <App2 />;
// root.render(app2);

class Hello4 extends React.Component {
	render() {
		return <p>Hello, {this.props.name}!</p>;
	}
}

const hello4 = <Hello4 name="Monse" />;
// root.render(hello4);

function Item(props) {
	return (
		<div className="item">
			<b>Name:</b> {props.name}
			<br />
			<b>Price:</b> ${props.price}
		</div>
	);
}

function App3() {
	return (
		<div>
			<Item name="cheese" price="4.99" />
			<Item name="bread" price="1.5" />
			<Item name="ice cream" price="24" />
		</div>
	);
}
const el_app3 = <App3 />;
//root.render(el_app3);

class Counter2 extends React.Component {
	state = {
		counter: 0,
	};
	increment = () => {
		this.setState({
			counter: (this.state.counter += 1),
		});
	};
	render() {
		return (
			<div>
				<p>{this.state.counter}</p>
				<button onClick={this.increment}>Increment</button>
				{/* the event handler uses camelCase syntax and that the handler function is passed in curly braces. */}
			</div>
		);
	}
}

const counter2 = <Counter2 />;
// root.render(counter2);

// We use props to pass data to components.
// - Components use state to manage their data.
// - Props are read-only and cannot be modified.
// - State can be modified by its component using the setState() method.
// - The setState() method results in re-rendering the component affected.

// useState returns a pair, the current state value and a function,
// that lets you change the state.
// useState takes one argument, which is the initial value of the state.

function Hello6() {
	const [name, setName] = useState('DAvid');
	return <h1>Hello {name}.</h1>;
}

const hello6 = <Hello6 />;
// root.render(hello6);
// Hooks
// The square brackets syntax is called array destructuring.
// It assigns the name variable to the current state value,
//and setName to the function that allows to change the state.
// You can name these variables anything you like.

function Counter3() {
	const [counter, setCounter] = useState(0);
	function increment() {
		setCounter(counter + 1);
	}
	return (
		<div>
			<p>{counter}</p>
			<button onClick={increment}>Increment</button>
		</div>
	);
}
//hooks can only be used inside functional components.
const counter3 = <Counter3 />;
//root.render(counter3);

// Lifecycle Methods
// Mounting is the process when a component is rendered on the page.
// Unmounting is the process when a component is removed from the page.
// The componentDidMount method is called when a component is rendered on the page.
// the componentWillUnmount() lifecycle method is called right before the component is removed from the DOM
// It can be used to free up resources taken by the component.
//  componentDidUpdate(), which is called when a component is updated in the DOM.

//useEffect
//to make lifecycle methods available in functional components.
//It combines the componentDidMount, componentDidUpdate, and componentWillUnmount
//methods into one.

function Counter() {
	const [counter, setCounter] = useState(0);
	//by default, useEffect runs both, after the first render and after every update.
	// useEffect(() => {
	// 	alert('Number of clicks: ' + counter);
	// 	return () => {
	// 		// cleanup
	// 	};
	// }, [counter]);

	function increment() {
		setCounter(counter + 1);
	}
	return (
		<div>
			<p>{counter}</p>
			<button onClick={increment}>Increment</button>
		</div>
	);
}
//event names use camelCase syntax and the event handler needs to be passed in curly braces.
const counter_el = <Counter />;
// root.render(counter_el);

function Converter() {
	const [km, setKm] = useState(0);
	function handleChange(e) {
		setKm(e.target.value);
	}
	function convert(km) {
		return (km / 1.609).toFixed(2);
	}
	return (
		<div>
			<input type="text" value={km} onChange={handleChange} />
			<p>
				{km} km is {convert(km)} miles
			</p>
		</div>
	);
}

const convert = <Converter />;
//root.render(convert);

function AddForm() {
	const [sum, setSum] = useState(0);
	const [num, setNum] = useState(0);
	function handleChange(e) {
		setNum(e.target.value);
	}
	function handleSubmit(e) {
		setSum(sum + Number(num));
		e.preventDefault();
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="number" value={num} onChange={handleChange} />
			<input type="submit" value="Add" />
			<p>Sum is {sum}</p>
		</form>
	);
}

const form = <AddForm />;
//root.render(form);

function List(props) {
	const arr = props.data;
	const listItems = arr.map((val, index) => <li key={index}>{val}</li>);
	return <ul>{listItems}</ul>;
}
const arr = ['A', 'B', 'C'];
const list = <List data={arr} />;
//root.render(list);
//Keys are important, because they uniquely identify elements,
//helping React understand which items have changed, are added, or are removed.

function AddPersonForm(props) {
	const [person, setPerson] = useState('');
	function handleChange(e) {
		setPerson(e.target.value);
	}
	function handleSubmit(e) {
		props.handleSubmit(person);
		setPerson('');
		e.preventDefault();
	}
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				onChange={handleChange}
				placeholder="Add new contact"
				value={person}
			/>
			<button type="submit"> Add</button>
		</form>
	);
}

function PeopleList(props) {
	const arr = props.data;
	const listItems = arr.map((val, index) => <li key={index}> {val}</li>);
	return <ul>{listItems}</ul>;
}

const contacts = ['james smith', 'thomas anderson', 'bruce wayne'];
const peoplelist = (
	<div>
		<AddPersonForm />
		<PeopleList data={contacts} />
	</div>
);
//root.render(peoplelist);

//we need to share the state between the components.
//We can do that by lifting the state up to a parent component.
//React uses what is called unidirectional data flow, data only flows downward
function ContactManager(props) {
	const [contacts, setContacts] = useState(props.data);

	function addPerson(name) {
		setContacts([...contacts, name]);
	}

	return (
		<div>
			<AddPersonForm handleSubmit={addPerson} />
			<PeopleList data={contacts} />
		</div>
	);
}
const contactmanager = <ContactManager data={contacts} />;
//root.render(contactmanager);
//we passed down the addPerson() function to our AddPersonForm
//using a prop called handleSubmit.


const initialState={
	count:10
}

function reducer(state=initialState,action){
	switch(action.type){
		case'INCREMENT':
			return {count:state.count+action.num}
		default:
			return state;
	}
}

const store = createStore(reducer);
const el_counter=<Provider store={store}>
	<Counter5/>
</Provider>

//root.render(el_counter);
//redux

//reducer function, which returns the new state based on the given action. 
//default value for our state using the initialState variable
// one returning our action object, the other one returning a new state with the incremented count.

//create the store, we call the createStore() function, which takes the reducer as its parameter
//Provider takes the store as an attribute and makes it available to its child component.

//The connect() function returns a new component, 
//that wraps the component you passed to it and connects it to the store using its special parameter functions

//mapStateToProps
//This function is called every time the store state changes. It receives the state as a parameter and returns the state for the component.

//mapDispatchToProps
//this parameter is used to map the dispatch functions to props.

//mapStateToProps simply returns the state variables as props to our component, 
//while mapDispatchToProps allows to define how we dispatch actions and make the dispatching functions available as props.
//Both are optional, as, for example, your component might only need to read from the store.

const initialStatee = {
	contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"] 
	};

function reducerr(state=initialStatee, action){
	switch(action.type){
		case 'ADD_PERSON':
			return {...state,
				contacts:[...state.contacts, action.data]
			}
		default:
			return state;
	}
}


const storee=createStore(reducerr);

root.render(

	<Provider store={storee}>
		<AddPersonFormm/>
		<PeopleListt/>
	</Provider>
)
