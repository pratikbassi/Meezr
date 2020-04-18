import React from 'react';
import  Navbar  from '../components/Navbar/index'


export default {
  title: 'Navbar',
  component: Navbar,
};

export const Basic = () => {

  
  return (
    <Navbar />

  );
}

export const LoggedIn = () => {

  
  return (
    <Navbar auth={true} />

  );
}



// const submit = (data) => {

//   if (data.user_password === data.confirm_password) {
//     axios({
//       method: "post",
//       url: "/api/users",
//       data: {
//         user_name: `${data.user_name}`,
//         email: `${data.email}`,
//         user_password: `${data.user_password}`,
//       }
//     }).then(() => {
//       console.log('new user created')
//     })
//   }




// }