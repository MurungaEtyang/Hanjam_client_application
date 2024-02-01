import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Image, FlatList, TouchableWithoutFeedback } from 'react-native';
import ImageViewer from "./client/services/components/ImageViewer";
import { styles } from "./assets/style/styles";

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

            if (currentTime - lastClickTime <= DOUBLE_CLICK_DELAY) {
                console.log("Double-clicked on image", index);
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
                            <View style={styles.leftIcon}>
                                <Button label="Back" onPress={() => alert("Back button clicked")} />
                            </View>
                            <View style={styles.rightIcon}>
                                <Button label="Live" onPress={() => alert("Live button clicked")} />
                            </View>
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