import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { loadingContext } from './contexts/loadingContext';
import { userContext } from './contexts/userContext';
import Home from './home';
import Login from './login';
import { login, User } from './services/httpservice';
import { styles } from './styles';

export default function App() {
  const [userState, setUserState] = useState<User | undefined>();
  const [loading, setLoading] = useState(false);

  const setUser = (setUserState) as any;

  return (

    <userContext.Provider value={{user: userState, setUser}}>
      
      <loadingContext.Provider value={{loading, setLoading}}>

          
          <View style={styles.container}>
          {loading && 
              <View>

            <Text style={styles.title}>LOADING....</Text>
            </View>
          }

            {(!userState || !userState.token) &&
                 <Login></Login>
            }

            {userState && userState.token &&
             <Home></Home>
            }

          </View>
          <StatusBar></StatusBar>

            </loadingContext.Provider>
          </userContext.Provider>

        );

}


