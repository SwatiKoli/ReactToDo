import React, { Component } from 'react';

import './Header.css';
import TodoItems from './TodoItems';


export default class Header extends Component{
	constructor(props, context) {
	  super(props, context);
	 
	  this.state = {
	    items: []
	  };
	 
	  this.addItem = this.addItem.bind(this);
	  this.deleteItem = this.deleteItem.bind(this);
	}
	addItem(e){
		if (this._inputElement.value !== "") {
    		var newItem = {
      		text: this._inputElement.value,
      		key: Date.now()
    	};
 
    		this.setState((prevState) => {
      			return { 
        			items: prevState.items.concat(newItem) 
      			};
    		});
   
    		this._inputElement.value = "";
  		}
   
  		console.log(this.state.items);
     
  		e.preventDefault();
	}
	deleteItem(key) {
	  var filteredItems = this.state.items.filter(function (item) {
	    return (item.key !== key);
	  });
	 
	  this.setState({
	    items: filteredItems
	  });
	}
	render(){
		return(
			<div className = "appDiv">
				<h1 className = "headTo">todos</h1>
				<div className = "header">
					<form onSubmit = {this.addItem}>
						<input ref = {(a) => this._inputElement = a} className = "todo-text" type="text" placeholder = "What needs to be done?"/>
						<button type ="submit">ADD</button>
					</form>
				</div>
				<TodoItems entries={this.state.items}  delete={this.deleteItem}/>
			</div>

		)
	}
}