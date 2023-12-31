import { Background } from "@react-navigation/elements";
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
    popularTabListWrapper: {
        position: 'relative',
    },
    popularTabListLiner: (tabWidth) => ({
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: tabWidth,
        height: 2,
        backgroundColor: "rgba(132, 62, 76, 0.8)", 
    }),
    popularTabList: (tabWidth) => ({
        width: tabWidth,
        backgroundColor: 'transparent',
    }),
    popularTabItem: {
        fontSize: 13,
        fontFamily: 'Inter-Medium',
        color: '#A7808A',
    },
    selectedPopularTabItem: {
        fontSize: 13,
        fontFamily: 'Inter-Medium',
        color: '#C93655',
    }
 })

 export default Styles;