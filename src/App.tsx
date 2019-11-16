import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {useState} from "react";


const About = () => {
    const [counter, setCounter] = useState<number>(0);
    return <><h1>About</h1><button onClick={() => setCounter(counter+1)}>click me</button>
        {counter}</>
}

ReactDOM.render(<About/>, document.getElementById('root'));
