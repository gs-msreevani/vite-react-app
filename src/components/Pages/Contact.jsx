import {useState,useEffect} from "react";

const Contact = ()=>{
    const [roles,setRoles] = useState([]);
    useEffect(()=>{
        window.aptrinsic('track','roles',{"roles":roles});
        console.log(roles);
    },[roles])
    const handleRole = (role)=>{
        if(!roles.includes(role)){
            setRoles((prevRoles)=>[...prevRoles,role]);
        }
        console.log(roles);
    }
    return (
        <>
            <h3>This is the contact page</h3>
            <button id='GM' onClick={()=>handleRole("GM")}>GM</button>
            <button id='SM' onClick={()=>handleRole("SM")}>SM</button>
            <button id='FM' onClick={()=>handleRole("FM")}>FM</button>
        </>

    )
}
export default Contact;