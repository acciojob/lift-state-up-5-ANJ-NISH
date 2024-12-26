import React from 'react'

export const Form = ({isLoggedIn, setLogIn}) => {


 const formsubmitted=(e)=>
 {
    e.preventDefault();
    setLogIn(true);
 }
    
  return (
    <>
    <div style={{display: 'flex', justifyContent:'center', marginTop: '25px'}}>
    { !isLoggedIn && ( <form id="login-form" onSubmit={(e)=> formsubmitted(e)}>
            <label>Username: </label>
            <input type="text" id="nameip"/><br/><br/>
            <label>Password: </label>
            <input type="password" id="passip"/><br/><br/>
            <button type="submit">Login</button>
        </form>)
}   
{isLoggedIn && (<p>You are logged in!</p>)}
    </div>
    </>
  )
}
