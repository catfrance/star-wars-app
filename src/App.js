import React from 'react';
import './App.css';
import Search from './components/Search';
import Card from './components/Card/Card';
import StarWarsLogo from './assets/star-wars.svg';
import Modal from './components/Modal/Modal';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      query: {
        search: '',
        category: 'people'
      },
      results: [],
	  loading: false,
	  modalVisible: false,
	  selectedCard: []
    }

	this.getResults=this.getResults.bind(this)
	this.toggleModal = this.toggleModal.bind(this)
	this.showCardInfo = this.showCardInfo.bind(this)
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

  showCardInfo(card) {
	  fetch(card)
	  .then(response => response.json())
	  .then(data => {
		  this.setState({selectedCard: data})
		  this.toggleModal()
	  })  
  }

  toggleModal() {
    this.setState(prevState => {
		return {modalVisible: !prevState.modalVisible}		
	})
  }

  render() {
    var title ='';

	var contents;
	var modalContents;

    if (this.state.loading) {
      contents=null;
    }
    else if (this.state.results.length === 0 && this.state.query.search !== '') {
      contents = 'No results';
    }
    else { 
		contents = this.state.results.map((item,key) => 
			(<Card title={this.state.query.category === 'films' ? item.title : item.name} key={item.url} url={item.url} index={key} onCardClick={this.showCardInfo}/>)
		)
      	title = this.state.query.search === ''? '' : 'Showing results for "' + this.state.query.search +'"'
	}
	
	modalContents = this.state.query.category === 'films' ? this.state.selectedCard.title : this.state.selectedCard.name;
    
    return (
    	<div className='main flex align-items-center'>
    		<div className='container'>
        		<div className="header text-center">
					<img id="logo-img" src={StarWarsLogo} alt="Star Wars logo"/>
					<Search onSubmit={this.getResults} isLoading={this.state.loading}/>
          		</div>
        		<h1>{title}</h1>
    			<div className="results">
              		{contents}
				</div>                  
        	</div>
			<Modal 
				show={this.state.modalVisible} 
				close={this.toggleModal} 
				header={this.state.query.category === 'films' ? this.state.selectedCard.title : this.state.selectedCard.name}
				>
				my contents are: {modalContents}
			</Modal>
    	</div>
    )
  }
}

export default App;
