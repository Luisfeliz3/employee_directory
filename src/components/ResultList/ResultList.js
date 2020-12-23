import React from "react";
import Row from "../Row";
import Col from "../Col";

function ResultList(props) {
  console.log(props.allUsers);
  return (
    <ul className="list-group">
      {props.allUsers.map((user, index) => (
        <li className="list-group-item" key={index}>
          <Row>
            <Col size="md-4">
              <img
                alt={user.name.first}
                className="img-fluid"
                src={user.picture.large}
              />
            </Col>

            <Col size="md-2">
              <p>{user.name.first}</p>
            </Col>

            <Col size="md-2">
              <p>{user.phone}</p>
            </Col>

            <Col size="md-0">
              <p>{user.email}</p>
            </Col>
          </Row>
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
