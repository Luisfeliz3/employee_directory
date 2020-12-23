import React from "react";
import Row from "../Row";
import Col from "../Col";

function ResultList(props) {
  console.log(props);
  return (
    <ul className="list-group">
      {props.results.map((result, index) => (
        <li className="list-group-item" key={index}>
          <Row>
            <Col size="md-4">
              <img
                alt={result.name.first}
                className="img-fluid"
                src={result.picture.large}
              />
            </Col>

            <Col size="md-2">
              <p>{result.name.first}</p>
            </Col>

            <Col size="md-2">
              <p>{result.phone}</p>
            </Col>

            <Col size="md-0">
              <p>{result.email}</p>
            </Col>
          </Row>
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
