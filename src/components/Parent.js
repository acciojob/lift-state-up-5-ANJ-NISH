import React, { useState } from "react";
import { Form } from "./Form";

export const Parent=()=>
{

    let [isLoggedIn, setLogIn]=useState(false);

    return (
        <>
        <h2 style={{textAlign: 'center'}}>Parent Component</h2>
        <Form isLoggedIn={isLoggedIn} setLogIn={setLogIn}/>
        </>
    )
}