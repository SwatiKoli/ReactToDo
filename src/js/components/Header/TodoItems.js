import React, { Component } from "react";
import './TodoList.css';

export default class TodoItems extends Component {
   constructor(props, context) {
    super(props, context);
 
    this.createTasks = this.createTasks.bind(this);
  }
  createTasks(item) {
    return <li key={item.key}>
              <input type="checkbox" className="checkCss"/>
              {item.text}
              <span className="deleteIcon" onClick={() => this.delete(item.key)}>x</span>
          </li>
  };
  delete(key) {
    this.props.delete(key);
  }
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
