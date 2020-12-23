import React, { Component } from "react";
import SearchForm from "../SearchForm/SearchForm";
import ResultList from "../ResultList/ResultList";
import API from "../../utils/API";
import Header from "../Header/Header";
import TableHeaders from "../TableHeaders/TableHeaders";
import Wrapper from '../Wrapper/index'
import Container from '../Container/index'
import Row from '../Row/index'
import Col from '../Col/index'

class SearchResultContainer extends Component {
  state = {
  allUsers:[],
  filteredUsers:[],
  searchTerm: ""
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchGiphy();
  }
 
  searchGiphy = () => {
    API.getUsers()
      .then((res) => this.setState({ allUsers: res.data.results}))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };


  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchGiphy();
 
    
  };

  render() { 

    console.log(this.state + "<<<<<<<SearchResultsContainer") ;
    return (
 <Wrapper>
       <div>
           <Header/>
            <SearchForm 
              // handleFormSubmit={this.handleFormSubmit}
              searchTerm = {this.state.searchTerm}
              handleInputChange={this.handleInputChange}
            />
                <Container style={{ marginTop: 30 }}>
                  <Row>
                      <Col size="md-12">
                          <TableHeaders results={this.state.allUsers}/>
                     </Col>
                  </Row>
                 </Container> 
            <ResultList results={this.state.allUsers} />
            </div>
            </Wrapper>
    );
  }
}
 
export default SearchResultContainer;
