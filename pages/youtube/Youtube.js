import React from 'react'
import { ImageBackground, Text, View, Dimensions } from "react-native";
import ScreenBackground from '../../components/ScreenBackground';
import { useHeaderHeight } from "@react-navigation/elements";
import Styles from "./youtube.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import userSampleImage from "../../assets/images/user-profile-sample.png";

export default function Youtube() {
    const headerHeight = useHeaderHeight();
    return (
        <ScreenBackground>
            <Text style={Styles.container(headerHeight)}>
                TEST
            </Text>
        </ScreenBackground>
    )
}

function HeaderLeft() {
    return <Text style={Styles.headerLeft}>Good Morning, Chau !</Text>;
}

function HeaderRight() {
    return (
        <View style={Styles.headerRight}>
            <Ionicons
                    name="search-outline"
                    size={25}
                    style={Styles.headerRightSearchIcon}
                />
            <BlurView intensity={80} style={Styles.headerRightNotifications}>
                <Ionicons
                    name="notifications-outline"
                    size={20}
                    style={Styles.headerRightNotificationsIcon}
                />
                <Text style={Styles.headerRightNotificationsIconReddot}></Text>
            </BlurView>
            <ImageBackground
                source={userSampleImage}
                resizeMode="cover"
                style={Styles.headerRightUserImageWrapper}
                imageStyle={Styles.headerRightUserImage}
            />
        </View>
    );
}


export const YoutubeHeaderOptions = {
    headerLeft: () => <HeaderLeft />,
    headerRight: () => <HeaderRight />,
    headerTitle: "",
    headerTransparent: true,
};
