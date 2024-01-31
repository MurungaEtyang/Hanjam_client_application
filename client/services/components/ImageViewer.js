import {StyleSheet, Image} from "react-native";

export default function ImageViewer( {placeHolderImage} ){
    return (
        <Image source={placeHolderImage} style={styles.image}/>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 350,
        height: 500,
        borderRadius: 10,
    }
})