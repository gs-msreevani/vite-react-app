import {useEffect} from "react";

const About = ()=>{
    useEffect(()=>{
        console.log("hello");
    })
    return (
        <>
            <h3>This is the About page</h3>
            <button id="feature">Feature</button>
        </>


    )
}
export default About;