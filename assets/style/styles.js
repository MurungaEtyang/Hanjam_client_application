import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 5,
    },
    bottomIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    sideIconContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 10,
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
    leftIcon: {
        marginRight: 'auto',
    },
    rightIcon: {
        marginLeft: 'auto',
    },
});