import React from 'react';
function User(props){
    const {userInfo} = props;
 return(
     <>
       <h1>This is the User component</h1>
       <h3>The user name is {userInfo.name}</h3>
       <h3>The user age is {userInfo.age}</h3>
     </>
)}
export default User;