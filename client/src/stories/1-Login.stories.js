import React from 'react';
import { action } from '@storybook/addon-actions';
import  LoginForm  from '../components/Auth/Login';

export default {
  title: 'LoginForm',
  component: LoginForm,
};

export const Basic = () => {

  
  return (
    <LoginForm onClick={action('submit-register')}/>

  );
}