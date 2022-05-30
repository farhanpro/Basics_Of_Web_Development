import React from "react";
import Contacts from "../contacts";

function App() {
  return (
  <div>
   <h1 className="heading">My Contacts</h1>
  <Contacts
     name = "Farhan"
     src=  "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
     phone ="+123 456 789"
     email= "b@beyonce.com"/>
    
    <Contacts 
    name= "Jack Bauer"
    src= "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    phone= "+987 654 321"
    email= "jack@nowhere.com"/>

    <Contacts
      name= "Chuck Norris"
    src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
    phone= "+918 372 574"
    email= "gmail@chucknorris.com"

    />
    
    </div>
  
  );
  
}

export default App;