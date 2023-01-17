import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Typography} from '../../../globalStyles/Typography';
import * as Colors from '../../../constants/colors';

interface HomeStatCardProps{
    title:string;
    content: string;
    type: 'positive' | 'negative' | 'data';
}
const HomeStatCard = (props: HomeStatCardProps) => {

    let backgroundColor;
    switch(props.type){
        case 'positive':
            backgroundColor = Colors.Primary + '40'
            break;
        case 'negative':
            backgroundColor = Colors.ErrorRed + '40'
            break;
        case 'data':
            backgroundColor = Colors.Secondary
            break;
    }
    return (
        <View style={[styles.cardContainer, {backgroundColor: backgroundColor}]}>
            <Text style={Typography.StatHeaderFont}>{props.content}</Text>
            <Text style={Typography.BodyFont}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        margin: 5,
        flex: 1,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeStatCard
