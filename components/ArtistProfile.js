import {StyleSheet, Text, View} from "react-native";
import ProfilePicture from "./ProfilePicture";
import React from "react";
import {Image} from 'react-native'

function ArtistProfile({artistInfo}) {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{artistInfo["name"]}</Text>
            <Image
                source={{uri: artistInfo["imageUrl"]}} style={{ width: 150, height: 150 , marginTop: 15}}
            />
            <Text style={styles.genre}>{artistInfo["genres"].join(" / ")}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1db954',
        flexDirection: "column",
        margin: 15,
        padding: 15,
        alignItems: "center"
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#FFFFFF",
        fontStyle: "italic",
    },
    genre: {
        fontSize: 10,
        fontWeight: 'bold',
        color: "#333333",
        fontStyle: "italic",
    }
})

export default ArtistProfile;