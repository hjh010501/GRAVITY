import {
    StyleSheet
} from "react-native";


export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: 20
    },
    chatcontainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
      },
    hello: {
        fontSize: 22,
        marginTop: 50,
        marginLeft: 10,
        letterSpacing: -.5,
        fontWeight: "100"
    },
    name: {
        marginTop: 0,
        fontWeight: "900"
    },
    test: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textinput: {
        height: 50,
        fontSize: 16,
        fontWeight: "600",
        borderBottomWidth: 2,
        borderBottomColor: '#a7a7a7',
        flex: 1
    },
    makeroom: {
        width: '100%',
        height: 50,
        backgroundColor: '#362eff',
        borderRadius: 5,
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    makeroomtext: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: "600",
        fontSize: 18,
        letterSpacing: -.5
    },
    chatinput: {
        height: 35,
        fontSize: 16,
        fontWeight: "200",
        borderRadius: 50,
        borderBottomColor: '#a7a7a7',
        backgroundColor:'#f2f2f2',
        padding: 7,
        paddingLeft: 10
    },
    sendbutton: {
        width: 35,
        height: 35,
        fontSize: 16,
        fontWeight: "600",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    chatbottom: {
        backgroundColor: '#fafafa',
        height: 100,
        width: '100%',
        paddingTop: 20
    },
    chatarray: {
        width: '100%',
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection:'row',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        paddingRight: 25
    }
  });
