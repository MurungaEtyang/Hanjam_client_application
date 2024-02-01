import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableWithoutFeedback } from 'react-native';
import ImageViewer from "./client/services/components/ImageViewer";

import Button from "./client/services/components/Buttons";
import * as ImagePicker from 'expo-image-picker';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const placeholder1 = require('./client/services/images/hot1.jpeg');
const placeholder2 = require('./client/services/images/hot2.jpeg');

export default function App() {
    const [selectedImage, useSelectedImage] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [lastClickTime, setLastClickTime] = useState(0); // New state variable for last click time
    const images = [placeholder1, placeholder2];

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            useSelectedImage(result.assets[0].uri)
            console.log(result);
        } else {
            alert('You did not select any image.');
        }
    }

    const handleImageHover = (index) => {
        const DOUBLE_CLICK_DELAY = 300; // Time threshold for double-click in milliseconds
        const currentTime = new Date().getTime();

        if (hoveredIndex === index) {
            // Image is already hovered, check for double-click
            if (currentTime - lastClickTime <= DOUBLE_CLICK_DELAY) {
                // Perform double-click action here
                console.log("Double-clicked on image", index);
                // Add your code to handle the double-click event
            }
        }

        setHoveredIndex(index);
        setLastClickTime(currentTime); // Update the last click time
    }

    const renderItem = ({ item, index }) => (
        <TouchableWithoutFeedback
            onPress={() => handleImageHover(index)}
            onMouseEnter={() => handleImageHover(index)}
            onMouseLeave={() => handleImageHover(null)}
        >
            <View style={index !== 0 && styles.imageSpace}>
                <ImageViewer placeHolderImage={item} selectedImage={selectedImage} />
                {hoveredIndex === index && (
                    <View style={styles.iconContainer}>
                        {/*top screen*/}
                        <View style={styles.topIconContainer}>
                            <Button label="Back" onPress={()=> alert("Back button clicked")}/>
                            <Button label="Live" onPress={()=> alert("Live button clicked")}/>
                        </View>

                        {/*side screen */}
                        <View style={styles.sideIconContainer}>
                            <Button label="Like" onPress={() => alert("like button clicked")} />
                            <Button label="Comment" onPress={() => alert("comment button clicked")} />
                            <Button label="Share" onPress={() => alert("share button clicked")} />
                            <Button label="Download" onPress={() => alert("Download button clicked")} />
                        </View>
                    </View>
                )}
            </View>
        </TouchableWithoutFeedback>
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

            {/*<View style={styles.footerContainer}>*/}
            {/*    <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />*/}
            {/*</View>*/}


            {/*bottom screen*/}
            <View style={styles.bottomIconContainer}>
                <Button label="Home" onPress={()=> alert("Home button clicked")}/>
                <Button label="Upload" onPress={pickImageAsync}/>
                <Button label="Profile" onPress={()=> alert("Profile button clicked")}/>
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
    icons: {
        width: 20,
        height: 20,
        borderRadius: 10,
    },
    footerContainer: {
        alignItems: 'center',
    },
    topIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 5,
    },

    bottomIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    sideIconContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 20,
    },
    iconContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
});