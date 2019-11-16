import React, {useState} from "react";

const About = () => {
    const [counter, setCounter] = useState<number>(0);
    return <><h1>About</h1><button onClick={() => setCounter(counter+1)}>click me</button></>
}

export default About;
