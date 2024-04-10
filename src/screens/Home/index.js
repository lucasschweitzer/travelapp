import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Title from '../../components/Title';

const Home = () =>{
    return(
     <SafeAreaView>
        <View>
            <Title text="My first component"/>
        </View>
     </SafeAreaView>   
    )
}

export default Home;