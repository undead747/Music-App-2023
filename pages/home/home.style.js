import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
     backgroundColor: "red"
    },
    headerLeft: {
        fontFamily: 'Inter-Regular',
        color: '#FFFFFF',
        fontSize: 15,
    },
    headerRight: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
    },
    headerRightNotifications: {
        width: 33,
        height: 33,
        borderRadius: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginEnd: 8
    },
    headerRightNotificationsIcon: {
        color: '#FFFFFF',
        position: "relative"
    },
    headerRightNotificationsIconReddot: {
        width: 7,
        height: 7,
        backgroundColor: "#C93655",
        position:"absolute",
        left: 18,
        top: 10
    },
    headerRightUserImageWrapper: {
        display: 'flex',
        resizeMode: 'cover',
        justifyContent: 'center',
        width: 33,
        height: 33,
    },
    headerRightUserImage: {
        borderRadius: 50, 
        borderColor: '#FFFFFF', 
        borderWidth: 1
    }
 })

 export default Styles;