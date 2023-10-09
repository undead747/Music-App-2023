import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: (headerHeight) => ({
        marginTop: headerHeight
    }),
    headerLeft: {
        fontFamily: 'Inter-Regular',
        color: '#FFFFFF',
        fontSize: 15,
        marginTop: 10
    },
    headerRight: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    },
    headerRightNotifications: {
        width: 33,
        height: 33,
        borderRadius: 50,
        overflow: 'hidden',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginEnd: 10
    },
    headerRightNotificationsIcon: {
        color: '#FFFFFF',
        position: "relative"
    },
    headerRightNotificationsIconReddot: {
        borderRadius: 5,
        overflow: 'hidden',
        width: 10,
        height: 10,
        backgroundColor: "#C93655",
        position:"absolute",
        left: 18,
        top: 10,
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
    },
    popularTab: (tabWidth) => ({
        width: tabWidth,
        backgroundColor: 'transparent',
        borderBottomColor: '#813B49',
        borderBottomWidth: 1
    })
 })

 export default Styles;