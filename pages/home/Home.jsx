import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import Styles from './home.style'
import { useHeaderHeight } from '@react-navigation/elements';
import ScreenBackground from '../../components/ScreenBackground';
import Ionicons from '@expo/vector-icons/Ionicons'
import { BlurView } from 'expo-blur'
import userSampleImage from '../../assets/images/user-profile-sample.png'

export default function Home() {
    const headerHeight = useHeaderHeight();
    return (
        <ScreenBackground>
            <Text style={{ marginTop: headerHeight }}>Home</Text>
        </ScreenBackground>
    )
}

export function HeaderLeft() {
    return (
        <Text style={Styles.headerLeft}>Good Morning, Jane !</Text>
    )
}

export function HeaderRight() {
    return (
        <View style={Styles.headerRight}>
            <View style={Styles.headerRightNotifications}>
                <Ionicons name='notifications-outline' size={20} style={Styles.headerRightNotificationsIcon} />
                <Text style={Styles.headerRightNotificationsIconReddot}></Text>
            </View>
            <ImageBackground source={userSampleImage} resizeMode="cover" style={Styles.headerRightUserImageWrapper} imageStyle={Styles.headerRightUserImage} />
        </View>
    )
}

export const HomeHeaderOptions = {
    headerLeft: () => (<HeaderLeft />),
    headerRight: () => (<HeaderRight />),
    headerTitle: '',
    headerTransparent: true,
}