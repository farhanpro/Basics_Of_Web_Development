import React from "react";
import Emojipedia  from "../emojipedia";
import Entry from './Entry';

const createEntry = (Emojiterm)=>
{
    return(
    <Entry
    key =  {Emojiterm.id}
    emoji = {Emojiterm.emoji}
    name = {Emojiterm.name}
    description ={Emojiterm.description}
    />
    )
}


const App = () =>
{
    return(
    <div>
        <h1>
            <span>
                Emojipedia
            </span>
        </h1>
        <d1 className ='dictionary'>
           {Emojipedia.map(createEntry)}
        </d1>
    </div>
    );
}

export default App;
