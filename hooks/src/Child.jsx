import React from "react";

function Child({onPress}){
    console.log("Child Rendered")
    return (
    <> 
    <h3>Child </h3>
    <button onClick={onPress}>Click Here</button>
    </>
    )
}

export default React.memo(Child);