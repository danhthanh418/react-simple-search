import React, { Component } from 'react';

class SearchBox extends Component {
    onChange = (event)=>{
        this.props.onChange(event);
    }

    render() {
        const { term } = this.props
        return (
            <input
                type="text"
                name="filter"
                id="filter"
                className="form-control"
                placeholder="Keyword to search"
                aria-describedby="helpId"
                onChange={this.onChange}
                value={term}
            />
        );
    }
}

export default SearchBox;