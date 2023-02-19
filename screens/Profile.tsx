import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import PieChart from 'react-native-expo-pie-chart';

import { Icon, ProfileItem } from "../components";
import DEMO from "../assets/data/demo";
import styles, { WHITE } from "../assets/styles";
import { auth } from '../firebase';

const Profile = ({unratedCount}:any) => {
  const {
    age,
    image,
    info1,
    info2,
    info3,
    info4,
    location,
    match,
    name,
  } = DEMO[7];

  const signOut =() => {
    console.log("signout");
    auth.signOut();
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={{marginTop:80,  fontSize:35, marginLeft:30 }}>Hello, Ankit!</Text>
      <Text style={{marginTop:16,  fontSize:25, marginLeft:25 }}> Summary </Text>
      <View style={{flex:1}}><PieChart 
    data={[
    {
        key: 'First Data',
        count: 2,
        color: 'red',
    },
    {
        key: 'Second Data',
        count: 8,
        color: 'green',
    },
    {
        key: 'Third Data',
        count: unratedCount ?? 0,
        color: 'gray',
    },
    ]}
    length={250}
/></View>
      <TouchableOpacity style={styles.roundedButton} onPress={() => signOut()}>
        <Icon name="log-out-outline" size={20} color={WHITE} />
        <Text style={styles.textButton}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
