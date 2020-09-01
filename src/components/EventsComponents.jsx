import React, {Component} from 'react';
import logo from './../logo.svg';
import './../App.css';


class EventsComponent extends Component{
  state = {
    id : 1,
    names : ["Anthony", "Bosco", "Robert", "Martin"]
  };


  render(){
    return(
    <ul>{this.state.names.map(name => <li key={name}>{name}</li>)}</ul>
    );
  }
}

export default EventsComponent;
