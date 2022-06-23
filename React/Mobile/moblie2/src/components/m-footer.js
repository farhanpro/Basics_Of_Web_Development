import React from "react";
import Button from '@mui/material/Button';
import Home from "./media/home.png";
import Home2 from "./media/home2.png";
import Home3 from "./media/home3.png";
import Home4 from "./media/home4.png";
import Person from "./media/person.png";

function Footer ()
{
    return(
          <footer className = "footer rightSide">
            <Button className = "mr-r"><img src = {Home}></img></Button>
            <Button className = "mr-r"><img src = {Home2}></img></Button>
            <Button className = "mr-r"><img src = {Home3}></img></Button>
            <Button className = "mr-r"><img src = {Home4}></img></Button>
            <Button className = "mr-r"><img  className = "mr-r" src = {Person}></img></Button>
            </footer>
        );
}

export default Footer;