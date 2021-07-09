import {createContext} from 'react';
import { User } from '../services/httpservice';
export interface userContextInterface {
    user: User | undefined,
    setUser: Function
}
export const userContext = createContext<userContextInterface>({user: undefined , setUser: (user: User)=> {}});