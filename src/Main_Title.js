import React from 'react';


function Title() {

    const text_shadow = {
        textShadow: "1px 1px 1px #000"
    }

    return (
        <h1 className="pb-6 pt-6 font-black text-5xl" style={text_shadow}>Search for your favorite Movie or Series</h1>
    )
}

export default Title;