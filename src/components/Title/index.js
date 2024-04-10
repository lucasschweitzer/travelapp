import React, { useState } from 'react';
import {Text} from 'react-native'
import styles from './styles';

const Home = ({ text }) =>{
    const [stateText, setText] = useState('Deafult state');

    const onTextPress = () => {
        setText('Updated state')
    }

    return(
        <Text onPress={onTextPress} style={styles.title}>{stateText}</Text>   
    )
}

Home.defaultProps = {
    text: 'Deafult text'
};

export default Home;