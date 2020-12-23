import React from "react";


function TableHeader(props) {
  console.log(props.results);
  return (
<table className ='table table-light'> 
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
        
     </table>
  );
}

export default TableHeader;
