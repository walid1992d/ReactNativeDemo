import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { loadingContext } from "./contexts/loadingContext";
import { userContext } from "./contexts/userContext";
import { User } from "./services/httpservice";

export default function Home() {


    return (

        <userContext.Consumer>
             {({user, setUser}) =>
             (
                 <loadingContext.Consumer>
                {({loading, setLoading}) =>
                ( 
            <View>
                <Text > {user?.firstName}</Text>
                <Button title={"Logout"} onPress={()=> {setUser(undefined)}} ></Button>
                <Button title={"STOP LOADING"} onPress={()=> {setLoading(false)}} ></Button>
            </View>
             )}
             </loadingContext.Consumer>
             )}
        </userContext.Consumer>

    )
}