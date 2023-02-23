import * as React from "react";
import { StyleSheet, Pressable, View } from 'react-native';
import {FontAwesome,MaterialCommunityIcons,Ionicons,} from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import HistoryScreen from "../screens/history/HistoryScreen";
import ProductScreen from "../screens/product/ProductScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import { theme } from "../theme/index";

// Route for bottom navigator
const BottomNavigator = createBottomTabNavigator();
export const TabBottomStack = () => (
    <BottomNavigator.Navigator
        screenOptions={{
            tabBarStyle:styles.tabContainer,
            tabBarLabelStyle:styles.tabLabel ,
            tabBarActiveTintColor:theme.colors.activeTintColor,
            tabBarInactiveTintColor:theme.colors.inactiveColor,
            safeAreaInset: { bottom: 'never', top: 'never' }
            
        }}
        
    >
    <BottomNavigator.Screen 
        name="Dashboard" 
        component={HomeScreen} 
        options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <FontAwesome  name="home" size={8} color={focused ? theme.colors.activeTintColor: theme.colors.inactiveColor} />
            ),
            tabBarLabel: "Home",
        }}
    />

    <BottomNavigator.Screen 
        name="Histrory" 
        component={HistoryScreen} 
        options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <Ionicons name="md-receipt-sharp" size={7} color={focused ? theme.colors.activeTintColor: theme.colors.inactiveColor} />
            ),
            tabBarLabel: "History",
        }}
    />

    <BottomNavigator.Screen 
        name="Product" 
        component={ProductScreen} 
        options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name="shopping" size={7} color={focused ? theme.colors.activeTintColor: theme.colors.inactiveColor} />
            ),
            tabBarLabel: "Product",
        }}
    />

    <BottomNavigator.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <FontAwesome name="user-circle" size={7} color={focused ? theme.colors.activeTintColor: theme.colors.inactiveColor} />
            ),
            tabBarLabel: "Profile",
        }}
    />

    </BottomNavigator.Navigator>
);

const styles = StyleSheet.create({
    tabContainer:{
        // backgroundColor:theme.colors.lightGray,
        padding:8,
        height:70,
        paddingBottom:10
    },
    tabLabel:{
        fontSize:12,
    }
})