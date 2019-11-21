import React from 'react';
import './App.css';
import Search from './components/Search';
import Card from './components/Card/Card';
import StarWarsLogo from './assets/star-wars.svg';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      query: {
        search: '',
        category: 'people'
      },
      results: [],
      loading: false
    }

    this.getResults=this.getResults.bind(this)
  }

  getResults(searchValue, categoryValue) {
    this.setState({
      query: {
        search: searchValue,
        category: categoryValue
      },
      loading: true
    });

    fetch('https://swapi.co/api/' + categoryValue + '/?search=' + searchValue)
    .then(response => response.json())
    .then(data => {
        this.setState({
            results: data.results,
            loading: false
        })
    })
  }

  render() {
    const title = this.state.query.search === ''? '' : 'Showing results for "' + this.state.query.search +'"'

    var contents;

    if (this.state.loading) {
      contents='Loading...';
    }
    else if (this.state.results.length === 0) {
      contents = 'No results';
    }
    else {
      //if search in films, display title
      if (this.state.query.category === 'films') {
        contents = this.state.results.map((item,key) => 
          (<Card title={item.title} key={item.url}/>)
        )
      }
      //else display name
      else {
        contents = this.state.results.map((item,key) => 
            (<Card title={item.name} key={item.url}/>)
        )
      }
    }
    
    return (
    	<div className='main flex align-items-center'>
    		<div className='container'>
        		<div className="header text-center">
            		<img id="logo-img" src={StarWarsLogo} alt="Star Wars logo"/>
            		<Search onSubmit={this.getResults}/>
        		</div>
        		<h1>{title}</h1>
    			<div className="results">
            		{contents}
          		</div>                  
        	</div>
    	</div>
    )
  }
}

export default App;
