import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Typography} from '../../../globalStyles/Typography';
import * as Colors from '../../../constants/colors';

interface HomeStatCardProps{
    title: string;
    content: string;
}
const HomeStatCard = (props: HomeStatCardProps) => {
    return (
        <View style={styles.cardContainer}>
            <Text style={Typography.StatHeaderFont}>{props.content}</Text>
            <Text style={Typography.BodyFont}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        elevation: 10,
        backgroundColor: Colors.OffWhite,
        margin: 5,
        flex: 1,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeStatCard
