import { searchIcon } from "../assests";
import {hooper} from "../assests";

const Header = props =>
{
    return(
        <header className="header flex justify-sb"> 
            <div className="logo">
                <img src={hooper} alt="Logo"/>
            </div>
            <div>
                <img src={searchIcon} alt = 'search'/>
            </div>
        </header>
        )
}
export default Header;