import React from "react";
import { ImageBackground, Text, View, Dimensions } from "react-native";
import Styles from "./home.style";
import { useHeaderHeight } from "@react-navigation/elements";
import ScreenBackground from "../../components/ScreenBackground";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import userSampleImage from "../../assets/images/user-profile-sample.png";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

export default function Home() {
    const headerHeight = useHeaderHeight();
    return (
        <ScreenBackground>
            <Text style={Styles.container(headerHeight)}>
                <Popular />
            </Text>
        </ScreenBackground>
    );
}

export function Popular() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 1, title: "Music" },
        { key: 2, title: "Artist" },
        { key: 3, title: "Album" },
    ]);

    const renderScene = SceneMap({
        1: MusicTab,
        2: ArtistTab,
        3: AlbumTab,
    });

    return (
        <View>
            <Text>Popular</Text>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                onIndexChange={setIndex}
            />
        </View>
    );
}

const renderTabBar = (props) => {
    const renderLabel = ({ route, focused, ...props }) =>{
        return (
           <Text style={focused ? Styles.selectedPopularTabItem : Styles.popularTabItem}>{route.title}</Text>
       );
    }

    return (
    <View style={Styles.popularTabListWrapper}>
        <TabBar
            {...props}
            renderLabel={renderLabel}
            style={Styles.popularTabList(Dimensions.get("window").width)}
            indicatorStyle={{ backgroundColor: '#C93655', height: 3 }}
            tabStyle={{justifyContent: 'flex-end',alignItems: 'baseline', width: 80, marginRight: 20 }}
        />
        <Text style={Styles.popularTabListLiner(Dimensions.get("window").width)}></Text>
    </View>
    );
}

const MusicTab = (props) => {
    return (
        <View>
            <Text>Test</Text>
        </View>
    );
}

const ArtistTab = (props) => {
    console.log(props)
    return (
        <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
    );

}

const AlbumTab = (props) => (
    <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

export function HeaderLeft() {
    return <Text style={Styles.headerLeft}>Good Morning, Chau !</Text>;
}

export function HeaderRight() {
    return (
        <View style={Styles.headerRight}>
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

export const HomeHeaderOptions = {
    headerLeft: () => <HeaderLeft />,
    headerRight: () => <HeaderRight />,
    headerTitle: "",
    headerTransparent: true,
};
