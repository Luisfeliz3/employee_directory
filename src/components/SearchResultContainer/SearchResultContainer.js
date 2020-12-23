import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import ResultList from "../ResultList/ResultList";
import API from "../../utils/API";
import Header from "../Header/Header";
import TableHeaders from "../TableHeaders/TableHeaders";
import Wrapper from "../Wrapper/index";
import Container from "../Container/index";
import Row from "../Row/index";
import Col from "../Col/index";

function SearchResultContainer() {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // When this component mounts, search the Giphy API for pictures of kittens

  useEffect(() => {
    searchAllUsers();
  }, [filteredUsers]);

  const searchAllUsers = () => {
    API.getUsers()
      .then((res) => setAllUsers({ allUsers: res.data.results }))
      .catch((err) => console.log(err));
  };

 
  const handleInputChange = (event) => {
    const {value } = event.target;
 
  const filteredEmployees = allUsers.allUsers
    .filter(employee => employee.name.first.toLowerCase()
    .indexOf(value.toLowerCase()) > -1
  )



  console.log(filteredEmployees);
  console.log("----<M<>>>><___");
  setFilteredUsers({filteredUsers : filteredEmployees})
  setSearchTerm(event.target.value)
}

  return (
    <Wrapper>
      <div>
        <Header />
        <SearchForm
          name={searchTerm}
          handleInputChange={handleInputChange}
        />
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <TableHeaders />
                  {/* {console.log(allUsers.allUsers.length)} */}
            </Col>
          </Row>
        </Container>
        <ResultList allUsers={allUsers.allUsers} />
    
      </div>
    </Wrapper>
  );
}

export default SearchResultContainer;
