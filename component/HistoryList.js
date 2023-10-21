import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HistoryList = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemleft}>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection :'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemleft: {
        flexDirection:'row',
        alignItems: 'center',
        flexWrap:'wrap'
    },
   
    itemText: {
        maxWidth: '80%',
    },
    
});

export default HistoryList;