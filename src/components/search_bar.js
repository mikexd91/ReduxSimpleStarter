import React, { Component } from 'react';

//functonal component to class component
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={
            term: 'Starting value...'
        };
    }
    render() {
        return (
            <div>
                <input 
                    value ={this.state.term}
                    onChange={
                        event => this.setState({
                            term: event.target.value
                        })
                    }
                />
                value of input: {this.state.term}
            </div>
        );
    }   

}

export default SearchBar;