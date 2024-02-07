import { StyleSheet } from
        'react-native';

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
        position: 'relative',
        Top:5,

        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'flex-start',
        // marginTop: 1,
    },
    bottomIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
//css of the icons at the sideContainer
    sideIconContainerRefresh: {
        // flexDirection: 'column',
        // justifyContent: 'center',
        // marginTop: 10,
        position: 'absolute',
        top: 80,
        left: 270,
        flexDirection: 'column',
        alignItems: 'center',


    },
    sideIconContainerLike: {
        // flexDirection: 'column',
        // justifyContent: 'center',
        // marginTop: 10,
        position: 'absolute',
        top: 140,
        left: 270,
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'color 0.3s ease'
    },


    sideIconContainerComment:{
        // flexDirection: 'column',
        // justifyContent: 'center',
        // marginTop: 10,
        position: 'absolute',
        top: 200,
        left: 270,
        flexDirection: 'column',
        alignItems: 'center',
    },
    sideIconContainerShare:{
        // flexDirection: 'column',
        // justifyContent: 'center',
        // marginTop: 10,
        position: 'absolute',
        top: 260,
        left: 270,
        flexDirection: 'column',
        alignItems: 'center',
    },
    sideIconContainerDownload:{
        // flexDirection: 'column',
        // justifyContent: 'center',
        // marginTop: 10,
        position: 'absolute',
        top: 320,
        left: 270,
        flexDirection: 'column',
        alignItems: 'center',
    },
    sideIconContainerOther:{
        // flexDirection: 'column',
        // justifyContent: 'center',
        // marginTop: 10,
        position: 'absolute',
        top: 380,
        left: 70,
        flexDirection: 'column',
        alignItems: 'center',
    },


    iconContainer: {
        position: 'absolute',
        top: 100,
        left: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    //css of the icon at the top center
    leftIcon: {
        position:'absolute',
        top: -100,
        left: -70,
        // marginRight: 'auto',
    },
    rightIconSearch: {
        position:'absolute',
        top: -100,
        left: 139,
        // marginLeft: 'auto',


    },
    rightIcon: {
        position:'absolute',
        top: -100,
        left: 239,
        // marginLeft: 'auto',
    },
    //css of icons at the bottom
    sideIconContainerSubscribe: {
        // flexDirection: 'column',
        // justifyContent: 'center',
        // marginTop: 10,
        position: 'absolute',
        top: 390,
        left: -70,
        flexDirection: 'column',
        alignItems: 'center',
    }
});