import React from 'react';

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            searchText: ''
        }

        this.onSubmit=this.onSubmit.bind(this);
    }

    onSubmit(event) {
        const searchValue = document.getElementById('search').value;
        const category = document.getElementById('category');
        const categoryValue = category.options[category.selectedIndex].value;
        this.props.onSubmit(searchValue, categoryValue);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input name='query' id='search' type='text' />
                <select id="category">
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>
                </select>
                <input type='submit'/>
            </form>
        )
    }
}

export default Search;