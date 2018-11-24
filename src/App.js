import React, {Component} from 'react';
import Employees from './data/employees.json';
import SearchBox from './components/SearchBox.js';
import SearchResult from './components/SearchResult.js';
// import SearchResult from './components/SearchResult.js';

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       items:Employees.Employees,
       term:''
    };
  };
  

  onChange  =(event)=>{
    this.setState({
      term:event.target.value
    })
  }

  onSubmit= (event)=>{
    event.preventDefault();
    return console.log(event.target.value)
  }
  render () {
    const {items,term} = this.state;
    return (
      <form className="container" onSubmit={this.onSubmit}>
        <div className="form-group my-3">
         <SearchBox 
            onChange={(e)=>this.onChange(e)}
            term={term}
         ></SearchBox>
          <SearchResult 
          items={items}
          term={term}
          ></SearchResult>
        </div>
      </form>
    );
  }
}
