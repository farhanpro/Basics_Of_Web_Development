import { searchIconGrey } from '../assests';
import './style.css';

const SearchInput = props =>
{
    return (
        <div className="search-input-container flex">
        <img src={searchIconGrey} />
            <input placeholder = "Find Your Music"/>
        </div>
    );
}
export default SearchInput;