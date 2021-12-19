"use strict";

const user = function (user){
    return `${user} logged in...`;
};

let id = (id)=>{
    return `id: ${id}`
    };

let email = (email)=>{
    return `email: ${email}`
    };
 
// module.exports = user,id,email; 
// pass only the first object
// An Array wiht the function 'function [Function: user]'

/* FORMS TO PASS LOTS OF OBJECTS FROM THE FILE -----*/
// FORM ONE
// module.exports.user = user;
// module.exports.email = email;
// module.exports.id = id;

// FORM TWO
// module.exports = {
//     user:user,
//     email:email,
//     id:id
// }

// FORM THREE 
module.exports = {
    user,
    email,
    id
}

// RESULT IN OTHER FILE 
// object {
//     user: [Function: user],
//     email: [Function: email],
//     id: [Function: id]
//   }
  