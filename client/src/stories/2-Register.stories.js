import React from 'react';
import { action } from '@storybook/addon-actions';
import  RegisterForm  from '../components/Auth/Register';


export default {
  title: 'Register',
  component: RegisterForm,
};

export const Basic = () => {

  
  return (
    <RegisterForm onClick={action('submit-register')}/>

  );
}

export const FilledOut = () => {

  return (
    <RegisterForm onClick={action('submit-register')}/>
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