import {
    StyleSheet
} from "react-native";


export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    },
    hello: {
        fontSize: 22,
        marginTop: 60,
        marginLeft: 40,
        letterSpacing: -.5,
        fontWeight: "100"
    },
    name: {
        marginTop: 50,
        fontWeight: "200"
    },
    requesttext: {
        fontSize: 22,
        marginLeft: 20,
        marginTop: 10,
        letterSpacing: -.5,
        fontWeight: "100"
    },
    card: {
        backgroundColor: "#ffffff",
        borderRadius: 5,
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 16,
        },
        shadowOpacity: 0.04,
        shadowRadius: 8.46,
        elevation: 5,
        marginTop: 20
    },
    cardtitle: {
        fontSize: 18,
        margin: 20,
        letterSpacing: -.2,
        fontWeight: "900"
    },
    date: {
        fontSize: 14,
        fontWeight: "300",
    },
    location: {
        fontSize: 14,
        fontWeight: "900"
    },
    requestmodel: {
        marginTop: 10
    },
    cardcontent: {
        fontSize: 18,
        marginLeft: 20,
        paddingBottom: 20,
        letterSpacing: -.2,
        fontWeight: "200"
    }
  });