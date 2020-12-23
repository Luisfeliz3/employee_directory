import React from "react";
// import '../styles/Header.css'



const styles = {
  headerStyle: {
    background: "blue"
  },
  headingStyle: {
    fontSize: 50
  },
  detailStyle: {
    color: "white",
    fontSize: 20
  }
};

function Header() {
  return (
  <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle} className='row align-items-center justify-content-center'>Employee Directory</h1>
      <h2 style={styles.detailStyle} className ='row align-items-center justify-content-center'>Click on cards to filter by heading or use the search box to narrow your results</h2>
    </header>
  );
}

export default Header;
