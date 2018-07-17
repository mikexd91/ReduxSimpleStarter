import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCGRXIUeO3iElBeIQoKG3YAC_xmp3rog4w';

const App = () => {
    return (
        <div>
            <div> Hi! </div>
            <SearchBar />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.container'));
