import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    FlatList,
    Animated,
    LayoutAnimation,
    StyleSheet,PanResponder,
    Easing,TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Button = (props) => {

    function getContent() {
        if(props.children){
            return props.children;
        }
        return <Text style={props.s.label}>{props.label}</Text>
    }

    return (
        <TouchableOpacity
            underlayColor="#ccc"
            onPress={props.onPress}
            style={[
                props.noDefaultStyles ? '' : s.button,
                props.s ? props.s.button : '']}
        >
            { getContent() }
        </TouchableOpacity>
    );
}

const NewsItem = ({ news, index }) => {

    function onPress(news) {
        //do anything you want
    }

    return (
        <Button
            key={index}
            noDefaultStyles={true}
            onPress={onPress.bind(this, news)}
        >
            <View style={s.news_item}>
                <Text style={s.title}>{news.title}</Text>
                <Text>{news.website}</Text>
            </View>
        </Button>
    );
}


export default class Example extends Component {
    constructor(props){
        super(props);

        this.y_translate = new Animated.Value(0);
        this.state = {
            menu_expanded: false
        };
        this.openMenu=this.openMenu.bind(this)
        this.hideMenu=this.hideMenu.bind(this)
    }
    componentDidMount() {




    }
    triggerAnimation(){
        this.slideIn.start()
    }
    openMenu() {
        this.setState({
            menu_expanded: true
        }, () => {
            this.y_translate.setValue(0);
            Animated.spring(
                this.y_translate,
                {
                    toValue: 1,
                    friction: 3
                }
            ).start();
        });

    }
    hideMenu() {
        this.setState({
            menu_expanded: false
        }, () => {
            this.y_translate.setValue(1);
            Animated.spring(
                this.y_translate,
                {
                    toValue: 0,
                    friction: 4
                }
            ).start();
        });
    }
    render() {
        // const slideStyle = this.state.example.getTranslateTransform();
        const menu_moveY = this.y_translate.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -300]
        });
        return (
            <View style={[s.container]}>
                <TouchableOpacity onPress={this.hideMenu}
                                  style={{position:"absolute",top:25,right:10,flex:1,zIndex:3,width:35,height:35,alignItems:"center",justifyContent:"center",backgroundColor:"transparent"}}>
                    <Icon name={"circle-outline"} size={25} color="rgba(0,0,0,0.5)"/>
                </TouchableOpacity>


                <Animated.View
                    style={[
                        s.footer_menu,
                        {
                            transform: [
                                {translateY: menu_moveY}
                            ]
                        }
                    ]}
                >

                    <TouchableOpacity
                        style={{justifyContent:"center",alignItems:"center",}}
                        onPress={this.openMenu} noDefaultStyles={true}>
                        <Icon name="circle-outline" size={50} color="red" />
                    </TouchableOpacity>

                    {/* <Text style={s.text}>
               Hello
             </Text> */}

                </Animated.View>

                {
                    !this.state.menu_expanded &&
                    <View style={s.tip_menu}>
                        <TouchableOpacity onPress={this.openMenu} noDefaultStyles={true}>
                            <Icon name="circle-outline" size={50} color="red" />
                        </TouchableOpacity>
                    </View>
                }
            </View>
        );
    }
}

const s = StyleSheet.create({
    animatedViewConatiner:{
        // flex:1,
        // position: 'absolute',
        width:100,
        height:100,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(240,0,0,.5)",
    },
    container: {

        flex: 1,
        height,
        width,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    text:{
        fontWeight:"600",
// fontSize:100,
        textAlignVertical: "center", textAlign: "center",},






// container: {
//   flex: 10,
//   flexDirection: 'column'
// },
    body: {
        flex: 10,
        backgroundColor: '#ccc'
    },
    footer_menu: {
        position: 'absolute',
        left:0,right:0,
        width: 600,
        height: 350,
        bottom: -300,
        backgroundColor: '#1fa67a',
        alignItems: 'center',
        // justifyContent:"center",
    },
    tip_menu: {
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#fff'
    },
    button_label: {
        fontSize: 20,
        fontWeight: 'bold'
    }

});