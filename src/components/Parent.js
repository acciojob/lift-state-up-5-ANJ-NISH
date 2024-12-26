import React, { useState } from "react";
import { Form } from "./Form";

export const Parent=()=>
{

    let [isLoggedIn, setLogIn]=useState(false);

    return (
        <>
        <h1 style={{textAlign: 'center'}}>Parent Component</h1>
        <Form isLoggedIn={isLoggedIn} setLogIn={setLogIn}/>
        </>
    )
}