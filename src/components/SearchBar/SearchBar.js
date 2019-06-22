import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    constructor(props){
      super(props);
      this.state= {
        term: '',
        location: '',
        sortBy:'best_match'
      };

      this.handleTermChange = this.handleTermChange.bind(this);
      this.handleLocationChange = this.handleLocationChange.bind(this);
      this.handleSortByChange = this.handleSortByChange.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      this.pressedEnter = this.pressedEnter.bind(this);
      

      this.sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated':'rating',
        'Most Reviewed':'review_count'
      };
    }

    getSortByClass(sortByOption) {
      if(this.state.sortBy === sortByOption){
        return 'active';
      } else {
        return '';
      }
    }

    //search is sorted by what criteria
    handleSortByChange(sortByOption) {
      this.setState({
        sortBy: sortByOption
      });
      this.handleSearch();
    }

    //search term
    handleTermChange(event){
      //console.log(event.target.value);
      this.setState({term: event.target.value});
    }

    //search location
    handleLocationChange(event) {
      //console.log(event.target.value);
      this.setState({location: event.target.value});
    }

    handleSearch(event){
      //calls searchYelp  which takes (term, location, sortBy)
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
      if (event){
        event.preventDefault();
      }
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];

            return (<li key={sortByOptionValue}
               className={this.getSortByClass(sortByOptionValue)} 
               onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
            {sortByOption}</li>);
        });
    }

    //pressing enter submits the search query
    pressedEnter(event){
      //to add "enter to search functionality", onKeyPress -> pressEnter() -> call handleSearch

      if(event.key == 'Enter'){
        this.handleSearch(event);
        //event.preventDefault();
      }
    }

    render(){
        return (
        <form className="SearchBar">
          <div className="SearchBar-sort-options">
            <ul>
              {this.renderSortByOptions()}
            </ul>
          </div>
          <div className="SearchBar-fields">
            <input placeholder="Search Businesses e.g. Sushi" onChange={this.handleTermChange} onKeyPress={this.pressedEnter} />
            <input placeholder="Where? e.g Seattle" onChange={this.handleLocationChange} onKeyPress={this.pressedEnter} />
          </div>
          <div className="SearchBar-submit">
            <a type="submit" onClick={this.handleSearch}>Let's Go</a>
          </div>
      </form>);
    }
}
export default SearchBar;