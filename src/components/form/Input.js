import React from 'react';
import {View,Text,TextInput,Pressable} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default  function Input({errorMessage ,placeholder,onChangeText,value,editable,keyboardType,label,secureTextEntry,leftIcon, rightIcon,onPress}) {
    const renderLeftAccessory = () => {
        if (!leftIcon) return null;
        return <MaterialIcons name={leftIcon} size={24} color="black" style={{ marginRight: 8 }} />;
    };

    const renderRightAccessory = () => {
        if (!rightIcon) return null;
        return <MaterialIcons name={rightIcon} size={24} color="black" style={{ marginLeft: 8 }} />;
    };
    return (
        <View className="relative">
            <Text className={`text-sm font-semibold   pl-1 ${errorMessage ?'text-red-500 ' :'text-gray-900'}`}>
                {label}
            </Text>
            <TextInput
                className={`
                border rounded-lg 
                ${Platform.OS === "android" ? 'p-2' : 'p-4'}
                ${errorMessage ?'border-red-500 ' :'border-gray-300'}
                ${rightIcon ?'pr-12 ' :'px-4'}
                ${leftIcon ?'pl-12 ' :'px-4'}
                `}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                editable={editable}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                renderLeftAccessory={renderLeftAccessory}
                renderRightAccessory={renderRightAccessory}
            />
            {rightIcon ?
                <Pressable 
                onPress={onPress}
                className={`
                absolute right-0 px-4 
                `}
                style={{ top:Platform.OS === "android" ? 30 : 28}}
                >
                    <MaterialIcons name={rightIcon} size={24} color="black" style={{ marginLeft: 8 }} />
                </Pressable>
            :null}
            {leftIcon ?
                <View className={`
                    absolute left-0 px-2 
                    `}
                    style={{ top:Platform.OS === "android" ? 30 : 28}}
                    >
                    <MaterialIcons name={leftIcon} size={24} color="black" style={{ marginLeft: 8 }} />
                </View>
            :null}
            <Text className={`text-sm font-semibold pl-1 text-red-500 ${errorMessage ?'blokck' :'hidden'}`}>
                {errorMessage}
            </Text>
        </View>
    )
}

{/* 
### EXAMPLE CALL INPUT COMPONENT
    <View className="mb-4">
        <Input
            placeholder="input icon left"
            leftIcon="search"
        />
    </View>
    <View className="mb-4">
        <Input
            placeholder="input icon right"
            rightIcon="menu"
        />
    </View>
    <View className="mb-4">
        <Input
            label="input with label"
            placeholder="input with label"
        />
    </View>
    <View className="mb-4">
        <Input
            label="input with label & error message"
            placeholder="input with label & error message"
            errorMessage="Error Message"
        />
    </View> 
*/}
