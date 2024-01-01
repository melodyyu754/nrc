import React from "react";

// PascalCasing for functions: every word
function Message() {
    // JSX: JavaScript XML
    const name = 'Melody'
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;