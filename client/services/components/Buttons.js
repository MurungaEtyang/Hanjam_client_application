import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Button({ label, theme, onPress }) {
    if (theme === "primary") {
        return (
            <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}>
                <Pressable
                    style={[styles.button, { backgroundColor: "#fff" }]}
                    onPress={onPress}
                >
                    <FontAwesome
                        name="picture-o"
                        size={18}
                        color="#25292e"
                        style={styles.buttonIcon}
                    />
                    <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    if (label === "Home") {
        return (
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={onPress}>
                    <FontAwesome
                        name="home"
                        size={18}
                        color="blue"
                        style={styles.buttonIcon}
                    />
                    <Text style={styles.buttonLabel}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    if (label === "Back") {
        return (
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={onPress}>
                    <FontAwesome
                        name="arrow-left"
                        size={18}
                        color="black"
                        style={styles.buttonIcon}
                    />
                    <Text style={styles.buttonLabel}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    // Add the "like", "comment", and "search" buttons here
    if (label === "Like") {
        return (
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={onPress}>
                    <FontAwesome
                        name="heart"
                        size={18}
                        color="blue"
                        style={styles.buttonIcon}
                    />
                    <Text style={styles.buttonLabel}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    if (label === "Comment") {
        return (
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={onPress}>
                    <FontAwesome
                        name="comment"
                        size={18}
                        color="blue"
                        style={styles.buttonIcon}
                    />
                    <Text style={styles.buttonLabel}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    if (label === "Share") {
        return (
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={onPress}>
                    <FontAwesome
                        name="share"
                        size={18}
                        color="green"
                        style={styles.buttonIcon}
                    />
                    <Text style={styles.buttonLabel}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    if (label === "Download"){
        return (
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={onPress}>
                    <FontAwesome
                        name="download"
                        size={18}
                        color="blue"
                        style={styles.buttonIcon}
                    />
                    <Text style={styles.buttonLabel}>{label}</Text>
                </Pressable>
            </View>
        )

    }

    if (label === "Profile") {
        return (
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={onPress}>
                    <FontAwesome
                        name="user"
                        size={18}
                        color="blue"
                        style={styles.buttonIcon}
                    />
                    <Text style={styles.buttonLabel}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    if (label === "Live") {
        return (
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={onPress}>
                    <FontAwesome
                        name="video-camera"
                        size={18}
                        color="blue"
                        style={styles.buttonIcon}
                    />
                    <Text style={styles.buttonLabel}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    if (label === "Upload") {
        return (
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={onPress}>
                    <FontAwesome
                        name="upload"
                        size={18}
                        color="blue"
                        style={styles.buttonIcon}
                    />
                    <Text style={styles.buttonLabel}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        // width: '100%',
        // height: '100%',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        color: 'black',
        // backgroundColor: 'rgb(184,36,36)'
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#000000',
        fontSize: 16,
    },
});