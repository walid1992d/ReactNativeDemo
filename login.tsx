
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { loadingContext } from './contexts/loadingContext';
import { userContext } from './contexts/userContext';
import { login } from './services/httpservice';
import { styles } from './styles';
import React, { useContext, useState } from "react";

export default function Login() {
    const [formData, setFormData] = useState({email: '', password: ''});
    return (

        <userContext.Consumer>
             {({user, setUser}) =>
             (
                 <loadingContext.Consumer>
                {({loading, setLoading}) =>
                ( 
                    <View>
                    <Text  >Email: {formData.email} </Text>
                    <TextInput style={styles.input} onChangeText={(text )=> {
                        
                        setFormData({...formData, email: text});

                    }} ></TextInput>
                    <Text >Password: {formData.password}</Text>
                    <TextInput style={styles.input} onChangeText={(text )=> {
                        setFormData({...formData, password: text});

                    }} ></TextInput>            
                    <Button onPress={async () => { 
                      setLoading(true);
                      const userData = await login(formData.email, formData.password);
                      setUser(userData) 
            
                    }} title="Login"></Button>
            
                  </View>
             )}
             </loadingContext.Consumer>
             )}
        </userContext.Consumer>
       
    );
}