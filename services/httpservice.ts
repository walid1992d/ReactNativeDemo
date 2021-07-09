import axios from 'axios';
import {userContext} from '../contexts/userContext';
import {useContext} from 'react';
export interface User {
    firstName: string;
    lastName: string;
    token: string;
    email: string;
}

export async function login(email: string, password: string): Promise<User> {
  const response =  await axios.get("https://jsonplaceholder.typicode.com/todos");


    return {
        firstName: 'Walid',
        lastName: 'Abou Ali',
        token: '1345',
        email: email,
    }
}