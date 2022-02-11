import React from 'react'
const d = new Date();
let year = d.getFullYear();
const Footer = () =>
{
  return(
    <footer>
      <p>
        Copyright © {year} 
      </p>
    </footer>
  );
}
export default Footer;