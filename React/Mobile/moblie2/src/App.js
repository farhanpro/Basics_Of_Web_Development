import React from "react";
import TaskIcon from "./components/media/TaskIcon.png";
import CalendarTodayIcon from "./components/media/CalenderTodayIcon.png";
import CalendarMonthIcon from "./components/media/CalenderMonthIcon.png";
import GroupsIcon from './components/media/GroupsIcon.png';
import img from "./components/media/image.png"
import person from "./components/media/person.png";
import empcode from "./components/media/empcode.png";
import location from "./components/media/location.png";
import email from "./components/media/email.png";
import tel from "./components/media/tel.png";
import contacts from "./components/m-contacts";
import NavBar from "./components/m-navbar";
import Footer from "./components/m-footer"


function MDashBoard() {
  return (
    <div>
    
     <NavBar/>
     <div className=" farme leftSide">
      
      <div className="top center mb-15">
        <img className="center circle-img " src={img} alt="avatar_img" />
        <h2 className="name "><span className = "myH2">Hi </span>{contacts[0].name},<span className = "myH2"> Welcome to your dashboard</span></h2>
        <p className = "mt-5"><img src = {person} alt = "person"></img> {contacts[0].position}</p>

        <p><img src = {location} alt ="locatoion"></img> {contacts[0].location}</p>
        <p><img src = {empcode}></img> Emp code : {contacts[0].empcode}</p>
        <p><img src = {email}></img> {contacts[0].email}</p>
        <p><img src = {tel}></img> {contacts[0].phone}</p>

        <div className="clientMeeting">
        <h6><img src = {empcode}></img>Client Meeting Manager</h6>
        </div>
        
        <div className = "frame2 center">
        <center>
        <img src ={TaskIcon} alt ="Task Icon"/>
        <h4 className="mt-5">Productivity </h4>
        <h1>75.5 </h1>
        </center>
        </div>
       
        <div className = "frame3 center">    
          <center>
          <img src={CalendarTodayIcon} alt="CalendarMonthIcon"/>
          <h4>Attendence</h4>
          <h1>21/30</h1>
          </center>
        </div>


        <div className = "frame4 center">
        <center>
        <img src={CalendarMonthIcon} alt = "CalendarMonthIcon"/>
        <h4 className="mt-5">LEAVE BALANCE</h4>
        <h1>9/21</h1>
        </center>
        </div>


        <div className = "frame5 center">
        <center>
        <img src={GroupsIcon} alt ="GroupIcon"/>
        <h4 className = "mt-5"  >Engagement</h4>
        <h1 className = "mt-5">21/30</h1>
        </center>
        </div>

      </div>

      </div>
      <Footer/>
      
    </div>

  );
}

export default MDashBoard;