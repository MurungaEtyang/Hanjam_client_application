import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import ImageViewer from "./client/services/components/ImageViewer";
import Button from "./client/services/components/Buttons";
import * as ImagePicker from 'expo-image-picker';

const placeholder1 = require('./client/services/images/hot1.jpeg');
const placeholder2 = require('./client/services/images/hot2.jpeg');
const placeholder3 = require('./client/services/images/hot3.jpeg');

export default function App() {
    const images = [placeholder1, placeholder2, placeholder3];
    const pickImageAsyc = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            console.log(result);
        } else {
            alert('You did not select any image.');
        }
    }
    const renderItem = ({ item, index }) => (
        <View style={index !== 0 && styles.imageSpace}>
            <ImageViewer placeHolderImage={item} />
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.textContainer}>Image container</Text>
            <FlatList
                data={images}
                renderItem={renderItem}
                vertical
                pagingEnabled
                keyExtractor={(item, index) => index.toString()}
            />

            <View style={styles.footerContainer}>
                <Button theme="primary" label="Choose a photo" />
                <Button label="Use this photo" />
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        paddingTop: 10,
    },
    imageSpace: {
        marginLeft: 20,
    },
    image: {
        width: 300,
        height: 400,
        borderRadius: 10,
    },
    footerContainer: {

        alignItems: 'center',
    },
});