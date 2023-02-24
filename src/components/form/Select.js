import React, { useState } from 'react';
import {Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Select({ errorMessage, placeholder, label, options,zIndex,zIndexInverse,onChangeValue,onSelectItem}) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(options);

    const handleValueChange = (itemValue) => {
        setValue(itemValue);
        onChangeValue && onChangeValue(itemValue);
    };

    return (
    <>
        <Text className={`text-sm font-semibold  pl-1 ${errorMessage ? 'text-red-500 ' : 'text-gray-900'}`}>
            {label}
        </Text>
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            onChangeValue={handleValueChange}
            onSelectItem={onSelectItem}
            setItems={setItems}
            style={{
                borderColor: errorMessage ? '#ef4444' : '#cbd5e1'
            }}
            dropDownContainerStyle={{
                borderColor: errorMessage ? '#ef4444' : '#cbd5e1'
            }}
            zIndex={zIndex}
            zIndexInverse={zIndexInverse}
            placeholder={placeholder}
        />
        <Text className={`text-sm font-semibold pl-1 text-red-500 pt-1 ${errorMessage ? 'block' : 'hidden'}`}>
        {errorMessage}
        </Text>
    </>
    );
} 

{/* 
## EXAMPLE CALL SELECT COMPONENT
    <>
        <Select 
            label=""
            placeholder="select" 
            errorMessage="test"
            options={[
                { label: 'Option 1', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'Option 3', value: 'option3' },
            ]} 
            onSelectItem={(item) => {
                console.log(item);
            }}
            onChangeValue={(value) => console.log(value)}
            zIndex={3000}
            zIndexInverse={1000}
        />
    </>
    <>
        <Select 
            label=""
            placeholder="select" 
            errorMessage="test"
            options={[
                { label: 'Option 1', value: '2' },
                { label: 'Option 2', value: '3' },
                { label: 'Option 3', value: '4' },
            ]} 
            onChangeValue={(value) => console.log(value)}
            zIndex={2000}
            zIndexInverse={2000}
        /> 
    </>
*/}
