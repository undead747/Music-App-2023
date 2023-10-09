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
    { key: "1", title: "Music" },
    { key: "2", title: "Artist" },
    { key: "3", title: "Album" },
  ]);

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
    const renderLabel = ({ route }) => (
        <Text>{route.title}</Text>
      );

    return (<TabBar
    {...props}
    renderLabel={renderLabel}
    style={Styles.popularTab(Dimensions.get("window").width)}
    indicatorStyle={{backgroundColor: '#C93655', height: 2.5}}
    />
    );
    }

const MusicTab = () => (
  <View style={{ flex: 1, backgroundColor: "red" }} />
);

const ArtistTab = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const AlbumTab = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  1: MusicTab,
  2: ArtistTab,
  3: AlbumTab,
});

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
