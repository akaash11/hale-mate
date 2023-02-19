import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Matches, NewScreen, Profile } from "./";
import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "../assets/styles";
import TabBarIcon from "../components/TabBarIcon";
import CameraComponent from "./CameraComponent";
import { DataT } from "../types";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainScreen = () => {
    const data1: DataT[] = [];
    const [data, setData] = useState(data1)
    const addToData = (d : DataT) => {
        let newData = [...data];
        newData.push(d);
        setData(newData);
        
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Tab"
                    options={{ headerShown: false, animationEnabled: false }}
                >
                    {() => (
                        <Tab.Navigator
                            tabBarOptions={{
                                showLabel: false,
                                activeTintColor: PRIMARY_COLOR,
                                inactiveTintColor: DARK_GRAY,
                                labelStyle: {
                                    fontSize: 14,
                                    textTransform: "uppercase",
                                    paddingTop: 10,
                                },
                                style: {
                                    backgroundColor: WHITE,
                                    borderTopWidth: 0,
                                    marginBottom: 0,
                                    shadowOpacity: 0.05,
                                    shadowRadius: 10,
                                    shadowColor: BLACK,
                                    shadowOffset: { height: 0, width: 0 },
                                },
                            }}
                        >
                            <Tab.Screen
                                name="New"
                                // component={NewScreen}
                                children={() => <NewScreen handleDataAdd={addToData} />}
                                options={{
                                    tabBarIcon: ({ focused }) => (
                                        <TabBarIcon
                                            focused={focused}
                                            iconName="camera"
                                            text="New"
                                        />
                                    ),
                                }}
                            />

                            <Tab.Screen
                                name="Explore"
                                component={Home}
                                options={{
                                    tabBarIcon: ({ focused }) => (
                                        <TabBarIcon
                                            focused={focused}
                                            iconName="search"
                                            text="Explore"
                                        />
                                    ),
                                }}
                            />

                            <Tab.Screen
                                name="My Clicks"
                                // component={Matches}
                                children={() => <Matches data={data} />}
                                options={{
                                    tabBarIcon: ({ focused }) => (
                                        <TabBarIcon
                                            focused={focused}
                                            iconName="fast-food"
                                            text="My Clicks"
                                        />
                                    ),
                                }}
                            />

                            <Tab.Screen
                                name="Profile"
                                component={Profile}
                                options={{
                                    tabBarIcon: ({ focused }) => (
                                        <TabBarIcon
                                            focused={focused}
                                            iconName="person"
                                            text="Profile"
                                        />
                                    ),
                                }}
                            />
                        </Tab.Navigator>
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainScreen;
