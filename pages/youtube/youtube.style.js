import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: (headerHeight) => ({
        marginTop: headerHeight
    }),
    headerLeft: {
        fontFamily: 'Inter-Regular',
        color: '#FFFFFF',
        fontSize: 15,
        marginTop: 20
    },
    headerRight: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20
    },
    headerRightNotifications: {
        width: 33,
        height: 33,
        borderRadius: 50,
        overflow: 'hidden',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginEnd: 20
    },
    headerRightNotificationsIcon: {
        color: '#FFFFFF',
        position: "relative"
    },
    headerRightSearchIcon: {
        color: '#FFFFFF',
        marginEnd: 20
    },
    headerRightNotificationsIconReddot: {
        borderRadius: 5,
        overflow: 'hidden',
        width: 10,
        height: 10,
        backgroundColor: "#B92C4A",
        position:"absolute",
        left: 18,
        top: 5,
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
})

export default Styles;