
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { loadingContext } from './contexts/loadingContext';
import { userContext } from './contexts/userContext';
import { login } from './services/httpservice';
import { styles } from './styles';
import React from "react";

export default function Login() {
    return (

        <userContext.Consumer>
             {({user, setUser}) =>
             (
                 <loadingContext.Consumer>
                {({loading, setLoading}) =>
                ( 
                    <View>
                    <Text >Email</Text>
                    <TextInput style={styles.input}  ></TextInput>
                    <Text >Password</Text>
                    <TextInput style={styles.input} ></TextInput>
            
                    <Button onPress={async () => { 
                      setLoading(true);
                      const userData = await login("","");
                      setUser(userData) 
            
                    }} title="Login"></Button>
            
                  </View>
             )}
             </loadingContext.Consumer>
             )}
        </userContext.Consumer>
       
    );
}