import React , {Component} from "react"
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends Component {
    render(){
    return (
        <View style = {styles.container}>
          <View style = {styles.navBar}>
            <Image source = {require('./images/logo.png')} style = {{ width : 105 , height : 22}} />
            <View style = {styles.rightNav}>
            <TouchableOpacity>
                <Icon style ={styles.navItems} name = "search" size ={25} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon style ={styles.navItems} name="account-circle" size={25} />
            </TouchableOpacity>
            </View>
          </View>
          <View style = {styles.body}>
          </View>
          <View style = {styles.tabBar}>
            <TouchableOpacity style = {styles.tabItem}>
                <Icon name = "home" size = {25} />
                <Text style = {styles.tabText}> Home </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.tabItem}>
                <Icon name = "whatshot" size = {25} />
                <Text style = {styles.tabItem}> Trending </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.tabItem}>
                <Icon name = "subscriptions" size ={25} />
                <Text style ={styles.tabItem}> Subscriptions </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.tabItem}>
                <Icon name = "folder" size ={25} />
                <Text style ={styles.tabItem}> Library </Text>
            </TouchableOpacity>

          </View>
        </View>
    )}
}

const styles = StyleSheet.create({
    container : {
        flex : 2,
    },
    navBar : {
        height : 55,
        backgroundColor : 'white',
        elevation : 3,
        flexDirection :'row',
        padding : 10,
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    rightNav : {
        flexDirection : 'row'
    },
    navItems : {
        marginLeft : 25
    },
    body : {
        flex : 1
    },
    tabBar : {
        backgroundColor : 'white',
        height : 60,
        borderTopWidth : 0.5,
        borderColor : '#f5f7f6',
        flexDirection : 'row',
        justifyContent : 'space-around'
    },
    tabItem : {
        alignItems : 'center',
        justifyContent : 'center'
    },
    tabTitle : {
        fontSize : 11,
        color : 'black'
    }
})