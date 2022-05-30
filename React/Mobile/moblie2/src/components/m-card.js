import React from "react";
import "./media/image.png"
import Frame2 from "./frame2"
import Frame3 from "./frame3";
import Frame4 from "./frame4";
import Frame5 from "./frame5";
import img from "./media/image.png"
import person from "./media/person.png";
import empcode from "./media/empcode.png";
import location from "./media/location.png";
import email from "./media/email.png";
import tel from "./media/tel.png";

function Card(props) {
  return (

    <div className=" farme leftSide">
      
      <div className="top center mb-15">
        <img className="center circle-img " src={img} alt="avatar_img" />
        <h2 className="name "><span className = "myH2">Hi </span>{props.name},<span className = "myH2"> Welcome to your dashboard</span></h2>
        <p className = "mt-5"><img src = {person} alt = "person"></img> {props.position}</p>

        <p><img src = {location} alt ="locatoion"></img> {props.location}</p>
        <p><img src = {empcode}></img> Emp code : {props.empcode}</p>
        <p><img src = {email}></img> {props.email}</p>
        <p><img src = {tel}></img> {props.phone}</p>

        <Frame2/>
        <Frame3/>
        <Frame4/> 
        <Frame5/> 

      </div>

      </div> 
  );
}

export default Card;