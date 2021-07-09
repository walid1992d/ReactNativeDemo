import {createContext} from 'react';
export interface loadingContextInterface {
    loading: boolean
    setLoading: Function
}
export const loadingContext = createContext<loadingContextInterface>({loading: false, setLoading: () => {}});