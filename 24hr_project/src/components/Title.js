import React from 'react'
import Radium from "radium";

const styles = {
  title: {
  backgroundColor: "#D7F5F0",
  color: "black",
  textAlign: "Center",
  textDecoration: "Underline",
  position: "relative",
  width: "100vw",
  height: "100%",
  top: "0px" ,
  paddingTop: "10px",
  paddingBottom: "10px",
  marginBottom: '-22px',
  
  }
}


const Title = () => {
  return (
    <div style={styles.title}>
      <h1>What is going on around me?</h1>
    </div>
  )
}

export default Radium(Title)