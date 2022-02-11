import React from 'react'

const Contact = (props) =>
{
  return (
    <div>
    <div className="card ">
      <div className="top ">
        <h2 className='name'>{props.name}</h2>
        <div className = "">
        <img className ='circle-img' 
          src={props.src}
          alt="avatar_img"
        />
        </div>
      </div>
      <div className="bottom">
        <p className = 'info'>{props.phone}</p>
        <p className = 'info'>{props.email}</p>
      </div>
    </div>
  </div>
  );
}
export default Contact;