import React from 'react';
import {View,Text,TextInput} from 'react-native';

export default  function Input({errorMessage ,placeholder,onChangeText,value,editable,keyboardType,label,secureTextEntry}) {
    return (
        <View>
            <Text className={`text-sm font-semibold  pl-1 ${errorMessage ?'text-red-500 ' :'text-gray-900'}`}>
                {label}
            </Text>
            <TextInput
                className={`p-4 border rounded-lg ${errorMessage ?'border-red-500 ' :'border-gray-300'}`}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                editable={editable}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            />
            <Text className={`text-sm font-semibold pl-1 text-red-500 pt-1 ${errorMessage ?'blokck' :'hidden'}`}>
                {errorMessage}
            </Text>
        </View>
    )
}
