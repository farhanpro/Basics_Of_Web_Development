import React from "react";
import Card from "./components/m-card";
import contacts from "./components/m-contacts";
import NavBar from "./components/m-navbar";
import Footer from "./components/m-footer"


function MDashBoard() {
  return (
    <div>
    
     <NavBar/>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        phone={contacts[0].phone}
        position={contacts[0].position}
        empcode = {contacts[0].empcode}
        email={contacts[0].email}
        location = {contacts[0].location}
      />
      <Footer/>
      
    </div>

  );
}

export default MDashBoard;